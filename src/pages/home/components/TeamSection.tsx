import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const team = [
  {
    initials: 'ET',
    name: 'Esther Tsotso',
    location: 'PHC, Nigeria',
    role: 'Product Engineer',
    bio: "As a final year Software Engineering Student with dreams of seeing and exploring the world, Echo resonates with me as I'd love the confidence it brings, knowing that help is not far-fetched\u00a0",
    gradient: 'from-[#2060C6] to-[#1a4fa0]',
    image: 'https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/8dca4d74504d1c6591256570f222b4cc.jpeg',
    linkedin: 'https://linkedin.com/in/estheticallybawo',
    isLead: true,
  },
  {
    initials: 'RS',
    name: 'Rola Shonuyi',
    location: 'Lagos, Nigeria',
    role: 'Frontend Engineer',
    bio: 'Echo resonates with me as a frontend engineer passionate about innovate solutions that make a difference',
    gradient: 'from-[#0DC298] to-[#0aa882]',
    image: 'https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/702a5844ce7c73b36f0f7f29e311a4b7.png',
    linkedin: 'https://www.linkedin.com/in/kofoworola-shonuyi-647835220',
  },
  {
    initials: 'NM',
    name: 'Naema Mohamed',
    location: 'Hargeisa, Somalia',
    role: 'Fullstack/mobile Enigeer',
    bio: "As someone driven to create solutions that makes a difference Echo stood out for me because I could immediately see how much impact it could potentially have on so many women's lives ",
    gradient: 'from-[#2060C6] to-[#0DC298]',
    image: 'https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/c63e56c38d65d43d6dfc8dd2a012a33e.png',
    linkedin: 'https://www.linkedin.com/in/naema-m-36aa01310/',
  },
  {
    initials: 'PO',
    name: 'Precious Okorom',
    location: 'Calabar, Nigeria',
    role: 'Software/Mobile Engineer',
    bio: "Echo is one product I see becoming my life's dedication because I see how much good it can do for people right when they need it the most ",
    gradient: 'from-[#0DC298] to-[#2060C6]',
    image: 'https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/d6b72aef1359fb69d86ef71daee4d4e8.png',
    linkedin: 'https://linkedin.com/in/precious-okorom',
  },
  {
    initials: 'LB',
    name: 'Lilian Balogun',
    location: 'Lagos, Nigeria',
    role: 'Product Designer',
    bio: 'Echo is an amazing product. It is very promising, it\'s not just a hackathon attempt for me, It\'s an opportunity to give people a chance at life, it\'s hope and reassurance in what could be the most terrible experience.',
    gradient: 'from-[#2060C6] to-[#0DC298]',
    image: 'https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/5ef67e6dbb1267f3f4059f76aac21b0a.jpeg',
    linkedin: 'https://linkedin.com/in/lilian-balogun',
  },
];

const TeamSection = () => {
  const header = useScrollAnimation();
  const { ref: cardsRef, visibleCount } = useStaggerAnimation(team.length, { threshold: 0.08 });

  return (
    <section id="team" className="relative bg-[#F8F9FF] py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#2060C6]/6 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/20 rounded-full px-4 py-2 bg-[#2060C6]/5">
            Meet the Team
          </span>
          <h2 className="text-[#000B26] text-4xl md:text-5xl font-semibold mt-6 mb-4">
            The people behind Echo
          </h2>
          <p className="text-[#000B26]/45 text-base max-w-xl mx-auto">
            We&apos;re a team of builders, designers, and dreamers brought together by a fellowship that led us to the Gemma 4 Good Hackathon. The moment we saw what Gemma 4 could do, we shared a clear conviction: technology should exist to protect people.
          </p>
        </div>

        {/* Team Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className={`relative bg-white border border-[#000B26]/8 rounded-3xl p-6 flex flex-col items-center text-center group hover:border-[#2060C6]/25 hover:bg-[#2060C6]/3 transition-all duration-500 ${
                idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Team Lead badge on card */}
              {member.isLead && (
                <div className="absolute top-3 right-3 bg-[#0DC298]/12 border border-[#0DC298]/35 text-[#0DC298] text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full whitespace-nowrap">
                  Team Lead
                </div>
              )}

              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#000B26]/8 group-hover:ring-[#2060C6]/30 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} items-center justify-center text-white font-bold text-xl hidden`}
                  >
                    {member.initials}
                  </div>
                </div>
                {/* LinkedIn badge */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="absolute -bottom-1 -right-1 w-7 h-7 flex items-center justify-center bg-[#0A66C2] rounded-full text-white hover:bg-[#004182] transition-colors duration-200 cursor-pointer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <i className="ri-linkedin-fill text-sm" />
                </a>
              </div>

              <h3 className="text-[#000B26] font-semibold text-sm mb-0.5 leading-tight">{member.name}</h3>
              <p className="text-[#000B26]/35 text-[10px] mb-1 tracking-wide">{member.location}</p>
              <p className="text-[#2060C6] text-xs font-medium mb-3 uppercase tracking-wide">{member.role}</p>

              <div className="w-8 h-px bg-[#000B26]/10 mb-3" />

              <p className="text-[#000B26]/50 text-xs leading-relaxed italic">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;