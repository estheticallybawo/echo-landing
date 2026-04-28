import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import { firebaseDb, hasFirebase } from '@/lib/firebase';

type FirestoreComment = {
  name: string;
  role: string;
  message: string;
  avatarUrl: string;
  createdAt?: Timestamp;
};

type UiComment = {
  id: string | number;
  name: string;
  role: string;
  initials: string;
  gradient: string;
  avatar: string | null;
  time: string;
  text: string;
};

const hasRenderableContent = (row: FirestoreComment) =>
  Boolean(row?.name?.trim()) && Boolean(row?.message?.trim());

const MAX_COMMENT_LENGTH = 300;

const getInitials = (name: string) =>
  name
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

const formatTimeAgo = (isoDate: string) => {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const diffMinutes = Math.floor(diffMs / 60000);

  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes} min ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
};

const mapFirestoreCommentToUi = (id: string, row: FirestoreComment): UiComment => ({
  id,
  name: row.name,
  role: row.role || '',
  initials: getInitials(row.name || ''),
  gradient: 'from-[#2060C6] to-[#0DC298]',
  avatar: row.avatarUrl || null,
  time: row.createdAt ? formatTimeAgo(row.createdAt.toDate().toISOString()) : 'Just now',
  text: row.message || '',
});

const initialComments: UiComment[] = [
  {
    id: 1,
    name: 'Amara Diallo',
    role: 'University Student',
    initials: 'AD',
    gradient: 'from-[#2060C6] to-[#1a4fa0]',
    avatar: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20university%20student%20smiling%20natural%20light%20warm%20tones%20simple%20clean%20background%20portrait%20photo%20realistic&width=80&height=80&seq=comm1&orientation=squarish',
    time: '2 min ago',
    text: "This is exactly what we needed. I've been scared to walk home alone for years. Echo gives me real hope.",
  },
  {
    id: 2,
    name: 'Chidi Okafor',
    role: 'Software Engineer',
    initials: 'CO',
    gradient: 'from-[#0DC298] to-[#0aa882]',
    avatar: 'https://readdy.ai/api/search-image?query=young%20african%20man%20software%20engineer%20professional%20headshot%20neutral%20background%20confident%20smile%20portrait%20photo%20realistic&width=80&height=80&seq=comm2&orientation=squarish',
    time: '8 min ago',
    text: 'The 3-layer escalation system is brilliant. Most apps just send one notification and hope for the best. Echo keeps going.',
  },
  {
    id: 3,
    name: 'Nadia Kamara',
    role: 'Nurse Practitioner',
    initials: 'NK',
    gradient: 'from-[#2060C6] to-[#0DC298]',
    avatar: 'https://readdy.ai/api/search-image?query=african%20woman%20nurse%20practitioner%20warm%20smile%20professional%20portrait%20soft%20light%20clean%20background%20photo%20realistic&width=80&height=80&seq=comm3&orientation=squarish',
    time: '15 min ago',
    text: 'I shared this with my sister who travels for work. She cried. We both did. Thank you for building this.',
  },
  {
    id: 4,
    name: 'Emeka Eze',
    role: 'Community Organizer',
    initials: 'EE',
    gradient: 'from-[#0DC298] to-[#2060C6]',
    avatar: 'https://readdy.ai/api/search-image?query=african%20man%20community%20organizer%20friendly%20portrait%20natural%20light%20simple%20background%20warm%20expression%20photo%20realistic&width=80&height=80&seq=comm4&orientation=squarish',
    time: '22 min ago',
    text: 'The offline capability is a game changer for rural communities. So many safety apps are useless without internet.',
  },
  {
    id: 5,
    name: 'Sade Williams',
    role: 'Journalist',
    initials: 'SW',
    gradient: 'from-[#2060C6] to-[#0DC298]',
    avatar: 'https://readdy.ai/api/search-image?query=african%20woman%20journalist%20professional%20headshot%20confident%20expression%20clean%20background%20soft%20lighting%20portrait%20photo%20realistic&width=80&height=80&seq=comm5&orientation=squarish',
    time: '31 min ago',
    text: "Hiny's story broke my heart. I'm glad something meaningful is being built in her memory. #EchoCommunity",
  },
];

const CommunitySection = () => {
  const [comments, setComments] = useState<UiComment[]>(hasFirebase ? [] : initialComments);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isLoadingComments, setIsLoadingComments] = useState(hasFirebase);

  const commentLength = inputValue.length;
  const remainingCharacters = MAX_COMMENT_LENGTH - commentLength;
  const isOverLimit = commentLength > MAX_COMMENT_LENGTH;

  const header = useScrollAnimation();
  const feed = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });

  useEffect(() => {
    if (!hasFirebase || !firebaseDb) {
      setIsLoadingComments(false);
      return;
    }

    const commentsQuery = query(
      collection(firebaseDb, 'communityComments'),
      orderBy('createdAt', 'desc'),
      limit(100),
    );

    const unsubscribe = onSnapshot(
      commentsQuery,
      (snapshot) => {
        const liveComments = snapshot.docs
          .map((doc) => ({ id: doc.id, row: doc.data() as FirestoreComment }))
          .filter((item) => hasRenderableContent(item.row))
          .map((item) => mapFirestoreCommentToUi(item.id, item.row));
        setComments(liveComments);
        setIsLoadingComments(false);
      },
      (error) => {
        console.error('Failed to read Firestore comments:', error);
        setIsLoadingComments(false);
        setSubmitError('Unable to read comments. Check Firestore rules.');
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async () => {
    if (!inputValue.trim() || !name.trim()) return;

    if (isOverLimit) {
      setSubmitError(`Your comment is too long. Please keep it within ${MAX_COMMENT_LENGTH} characters.`);
      return;
    }

    setSubmitError('');

    if (!hasFirebase || !firebaseDb) {
      setSubmitError('Firebase is not connected. This comment cannot be saved yet.');
      return;
    }

    try {
      await addDoc(collection(firebaseDb, 'communityComments'), {
        name: name.trim(),
        role: role.trim() || '',
        message: inputValue.trim(),
        avatarUrl: '',
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Failed to write Firestore comment:', error);
      const code =
        error && typeof error === 'object' && 'code' in error
          ? String((error as { code?: unknown }).code)
          : '';
      if (code.includes('permission-denied')) {
        setSubmitError('Write blocked by Firestore rules. Allow create on communityComments.');
      } else {
        setSubmitError('Could not post your comment right now. Please try again.');
      }
      return;
    }

    setInputValue('');
    setName('');
    setRole('');
  };

  return (
    <section id="community" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-full w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-[#0DC298]/5 blur-[120px] pointer-events-none md:right-1/4" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-12 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#0DC298] text-xs font-semibold tracking-widest uppercase border border-[#0DC298]/20 rounded-full px-4 py-2 bg-[#0DC298]/5">
            Community Voices
          </span>
          <h2 className="text-[#0B0F1A] text-4xl md:text-5xl font-semibold mt-6 mb-4">
            What people are saying
          </h2>
          <p className="text-[#0B0F1A]/45 text-base">
            Real voices from people who believe in Echo's mission.
          </p>
        </div>

        {/* Comment Container */}
        <div
          ref={feed.ref}
          className={`bg-[#F8F9FF] border border-[#0B0F1A]/8 rounded-3xl overflow-hidden transition-all duration-800 delay-100 ${feed.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDuration: '800ms', transitionDelay: '100ms' }}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#0B0F1A]/6">
            <span className="text-[#0B0F1A]/50 text-sm font-medium">Tell us what you think about Echo</span>
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full block ${hasFirebase ? 'bg-red-400 animate-pulse' : 'bg-[#0B0F1A]/25'}`}
              ></span>
              <span className={`text-xs font-medium ${hasFirebase ? 'text-red-400' : 'text-[#0B0F1A]/30'}`}>
                {hasFirebase ? 'Live' : 'Demo'}
              </span>
            </div>
          </div>

          {!hasFirebase && (
            <div className="px-6 py-3 border-b border-[#0B0F1A]/6 bg-[#2060C6]/5">
              <p className="text-[#0B0F1A]/50 text-xs">
                Connect Firebase to enable public real-time comments across devices.
              </p>
            </div>
          )}

          {/* Comments Feed */}
          <div className="max-h-80 overflow-y-auto px-6 py-4 space-y-4">
            {isLoadingComments && (
              <p className="text-[#0B0F1A]/35 text-sm">Loading community comments...</p>
            )}
            {!isLoadingComments && comments.length === 0 && hasFirebase && (
              <p className="text-[#0B0F1A]/35 text-sm">No community comments yet. Be the first to share.</p>
            )}
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="w-11 h-11 rounded-full flex-shrink-0 mt-0.5 overflow-hidden">
                  {comment.avatar ? (
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${comment.gradient} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {comment.initials}
                    </div>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-2xl px-4 py-3 border border-[#0B0F1A]/6">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-0.5">
                    <span className="text-[#0B0F1A] text-sm font-medium">{comment.name}</span>
                    {comment.role && (
                      <span className="text-[#0DC298] text-xs font-medium bg-[#0DC298]/8 rounded-full px-2 py-0.5 w-fit">{comment.role}</span>
                    )}
                    <span className="text-[#0B0F1A]/25 text-xs md:ml-auto">{comment.time}</span>
                  </div>
                  <p className="text-[#0B0F1A]/60 text-sm leading-relaxed">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-[#0B0F1A]/6 px-6 py-4 space-y-3 bg-white">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name..."
                className="w-full md:flex-1 bg-[#F8F9FF] border border-[#0B0F1A]/10 rounded-xl px-4 py-2.5 text-[#0B0F1A] text-sm placeholder-[#0B0F1A]/30 outline-none focus:border-[#0DC298]/40 transition-colors"
              />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="What you do... (optional)"
                className="w-full md:flex-1 bg-[#F8F9FF] border border-[#0B0F1A]/10 rounded-xl px-4 py-2.5 text-[#0B0F1A] text-sm placeholder-[#0B0F1A]/30 outline-none focus:border-[#0DC298]/40 transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  const nextValue = e.target.value;
                  setInputValue(nextValue);
                  if (submitError) setSubmitError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder={`Share your voice...`}
                maxLength={MAX_COMMENT_LENGTH}
                className={`w-full md:flex-1 bg-[#F8F9FF] border rounded-xl px-4 py-2.5 text-[#0B0F1A] text-sm placeholder-[#0B0F1A]/30 outline-none transition-colors ${
                  isOverLimit ? 'border-red-400 focus:border-red-400' : 'border-[#0B0F1A]/10 focus:border-[#3B82F6]/40'
                }`}
              />
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto bg-[#2060C6] hover:bg-[#1a4fa0] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap text-sm"
              >
                Share
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 text-[11px] text-[#0B0F1A]/35">
              <p>
                Keep it under {MAX_COMMENT_LENGTH} characters, including spaces.
              </p>
              <p className={isOverLimit ? 'text-red-400' : remainingCharacters <= 30 ? 'text-[#2060C6]' : ''}>
                {commentLength}/{MAX_COMMENT_LENGTH}
              </p>
            </div>
            {submitError && <p className="text-red-400 text-xs">{submitError}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
