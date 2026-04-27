import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const initialComments = [
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
  const [comments, setComments] = useState(initialComments);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setAvatarPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const header = useScrollAnimation();
  const feed = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });

  const handleSubmit = () => {
    if (!inputValue.trim() || !name.trim()) return;
    const newComment = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
      initials: name
        .trim()
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2),
      gradient: 'from-[#2060C6] to-[#0DC298]',
      avatar: avatarPreview || null,
      time: 'Just now',
      text: inputValue.trim(),
    };
    setComments([newComment, ...comments]);
    setInputValue('');
    setName('');
    setRole('');
    setAvatarPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="community" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0DC298]/5 blur-[120px] pointer-events-none" />

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
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse block"></span>
              <span className="text-red-400 text-xs font-medium">Live</span>
            </div>
          </div>

          {/* Comments Feed */}
          <div className="max-h-80 overflow-y-auto px-6 py-4 space-y-4">
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
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[#0B0F1A] text-sm font-medium">{comment.name}</span>
                    {comment.role && (
                      <span className="text-[#0DC298] text-xs font-medium bg-[#0DC298]/8 rounded-full px-2 py-0.5">{comment.role}</span>
                    )}
                    <span className="text-[#0B0F1A]/25 text-xs ml-auto">{comment.time}</span>
                  </div>
                  <p className="text-[#0B0F1A]/60 text-sm leading-relaxed">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-[#0B0F1A]/6 px-6 py-4 space-y-3 bg-white">
            <div className="flex gap-3 items-center">
              {/* Avatar upload */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-11 h-11 rounded-full flex-shrink-0 overflow-hidden border-2 border-dashed border-[#0B0F1A]/15 hover:border-[#0DC298]/50 transition-colors cursor-pointer bg-[#F8F9FF] flex items-center justify-center"
                title="Upload your photo"
              >
                {avatarPreview ? (
                  <img src={avatarPreview} alt="preview" className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center text-[#0B0F1A]/25">
                    <i className="ri-camera-line text-base"></i>
                  </div>
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name..."
                className="flex-1 bg-[#F8F9FF] border border-[#0B0F1A]/10 rounded-xl px-4 py-2.5 text-[#0B0F1A] text-sm placeholder-[#0B0F1A]/30 outline-none focus:border-[#0DC298]/40 transition-colors"
              />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="What you do... (optional)"
                className="flex-1 bg-[#F8F9FF] border border-[#0B0F1A]/10 rounded-xl px-4 py-2.5 text-[#0B0F1A] text-sm placeholder-[#0B0F1A]/30 outline-none focus:border-[#0DC298]/40 transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Share your voice..."
                className="flex-1 bg-[#F8F9FF] border border-[#0B0F1A]/10 rounded-xl px-4 py-2.5 text-[#0B0F1A] text-sm placeholder-[#0B0F1A]/30 outline-none focus:border-[#3B82F6]/40 transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#2060C6] hover:bg-[#1a4fa0] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap text-sm"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
