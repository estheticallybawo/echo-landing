import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const versions = [
  {
    version: 'Echo v1',
    label: 'Now',
    status: 'live',
    statusText: 'Live',
    icon: 'ri-smartphone-line',
    color: '#2060C6',
    bg: 'bg-[#2060C6]/5',
    border: 'border-[#2060C6]/20',
    title: 'The Mobile App',
    tagline: 'Safety in your pocket',
    description:
      'Echo begins as a powerful mobile application, an always-ready personal safety companion that uses on-device AI to detect distress, activate a 3-layer alert protocol, and connect you to the people who matter most.',
    features: [
      'On-device AI distress detection',
      '3-layer escalation protocol',
      'Offline-first, privacy-first',
      'Trusted contact network',
    ],
  },
  {
    version: 'Echo v2',
    label: 'Next',
    status: 'upcoming',
    statusText: 'Coming Soon',
    icon: 'ri-plug-line',
    color: '#0DC298',
    bg: 'bg-[#0DC298]/5',
    border: 'border-[#0DC298]/20',
    title: 'Platform Integration',
    tagline: 'Safety embedded everywhere',
    description:
      'Echo v2 opens its core safety engine as an SDK and API layer, enabling other apps, platforms, and services to embed Echo\'s intelligence directly. From ride-sharing to healthcare, any product can become Echo-powered.',
    features: [
      'Open SDK & API for third-party apps',
      'Plug-in safety layer for existing platforms',
      'Cross-app trusted contact sync',
      'Enterprise & developer partnerships',
    ],
  },
  {
    version: 'Echo v3',
    label: 'Future',
    status: 'vision',
    statusText: 'Vision',
    icon: 'ri-vip-crown-line',
    color: '#8B5CF6',
    bg: 'bg-[#8B5CF6]/5',
    border: 'border-[#8B5CF6]/20',
    title: 'Wearable Hardware',
    tagline: 'Invisible. Unstoppable.',
    description:
      'Echo v3 merges with the physical world, embedded into everyday jewelry and accessories that are completely undetectable. A ring, a bracelet, a pendant. One subtle gesture activates Echo silently, without ever reaching for a phone.',
    features: [
      'Embedded in jewelry & accessories',
      'Completely undetectable design',
      'One-gesture silent activation',
      'Always-on ambient awareness',
    ],
  },
];

const statusStyles: Record<string, string> = {
  live: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  upcoming: 'bg-[#0DC298]/8 text-[#0DC298] border border-[#0DC298]/25',
  vision: 'bg-[#8B5CF6]/8 text-[#8B5CF6] border border-[#8B5CF6]/25',
};

const RoadmapSection = () => {
  const header = useScrollAnimation();
  const { ref: cardsRef, visibleCount } = useStaggerAnimation(versions.length, { threshold: 0.08 });
  const connector = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="roadmap" className="relative bg-[#F8F9FF] py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#2060C6]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-20 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/20 rounded-full px-4 py-2 bg-[#2060C6]/5">
            The Road Ahead
          </span>
          <h2 className="text-[#0B0F1A] text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
            Echo is just getting
            <br />
            <span className="text-[#0B0F1A]/30 font-light">started</span>
          </h2>
          <p className="text-[#0B0F1A]/45 text-base max-w-xl mx-auto leading-relaxed">
            From a mobile app to an invisible layer of protection woven into everyday life , here's where Echo is headed.
          </p>
        </div>

        {/* Version Cards */}
        <div ref={cardsRef} className="relative">
          {/* Connector line (desktop) */}
          <div
            ref={connector.ref}
            className={`hidden md:block absolute top-[26px] left-[calc(16.666%-1px)] right-[calc(16.666%-1px)] h-px bg-gradient-to-r from-[#2060C6]/20 via-[#0DC298]/30 to-[#8B5CF6]/20 transition-all duration-1000 delay-300 ${connector.isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            style={{ transformOrigin: 'left center' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {versions.map((v, idx) => (
              <div
                key={v.version}
                className={`relative flex flex-col transition-all duration-700 ${idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Version badge + icon */}
                <div className="flex flex-col items-center mb-6">
                  <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-3 relative z-10 bg-white"
                    style={{ border: `1.5px solid ${v.color}30`, boxShadow: `0 0 0 6px ${v.color}08` }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className={`${v.icon} text-xl`} style={{ color: v.color }}></i>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[v.status]}`}
                  >
                    {v.statusText}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 ${v.bg} border ${v.border} rounded-3xl p-7 hover:bg-white transition-all duration-500 group`}
                >
                  <div className="mb-5">
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: v.color }}
                    >
                      {v.version}
                    </span>
                    <h3 className="text-[#0B0F1A] text-xl font-semibold mt-1 mb-1">{v.title}</h3>
                    <p className="text-[#0B0F1A]/35 text-xs font-medium italic">{v.tagline}</p>
                  </div>

                  <p className="text-[#0B0F1A]/50 text-sm leading-relaxed mb-6">{v.description}</p>

                  <ul className="space-y-2.5">
                    {v.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-[#0B0F1A]/60 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-xs" style={{ color: v.color }}></i>
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#0B0F1A]/35 text-sm max-w-lg mx-auto leading-relaxed">
            Each version of Echo builds on the last , expanding the reach of safety without ever compromising on privacy, simplicity, or trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
