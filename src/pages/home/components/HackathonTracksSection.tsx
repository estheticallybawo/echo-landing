import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const mainTracks = [
  {
    track: 'Global Resilience',
    icon: 'ri-global-line',
    color: '#2060C6',
    match: 'Primary',
    matchColor: '#2060C6',
    description:
      'Echo is built around resilient emergency response. The current demo keeps incident state and escalation timers local, while the architecture prepares a device model path for offline/on-device use once Android runtime testing is complete.',
    alignments: [
      'Local-first incident state and escalation timers',
      'Prepared Gemma model download path for APK testing',
      'Designed for disaster and high-stress scenarios',
      'Graceful fallback when AI or network services are unavailable',
    ],
  },
  {
    track: 'Health & Sciences',
    icon: 'ri-heart-pulse-line',
    color: '#0DC298',
    match: 'Strong',
    matchColor: '#0DC298',
    description:
      'Echo bridges the gap between distress and coordinated response. The demo uses voice or typed input, Gemma-assisted safety decisions, and a timed escalation loop to show how urgent signals can become structured action.',
    alignments: [
      'AI-assisted emergency triage from user requests',
      'Democratizes personal safety for all income levels',
      'Accelerates emergency response through intelligent triage',
      'Clear UI states for listening, thinking, speaking, and escalating',
    ],
  },
  {
    track: 'Digital Equity & Inclusivity',
    icon: 'ri-team-line',
    color: '#2060C6',
    match: 'Strong',
    matchColor: '#2060C6',
    description:
      'Echo is being designed for mid-range Android devices and low-connectivity communities. For submission, the reliable test surface is Chrome; the APK/model-download path is present for team testing and future validation.',
    alignments: [
      'Chrome-first demo for broad judge access',
      'APK model catalog and compatibility messaging prepared',
      'Stress-tested UX for high-anxiety situations',
      'Closes the safety gap for vulnerable populations',
    ],
  },
  {
    track: 'Safety & Trust',
    icon: 'ri-shield-check-line',
    color: '#0DC298',
    match: 'Strong',
    matchColor: '#0DC298',
    description:
      'Echo makes cloud features explicit. The current demo can run core emergency state locally, while optional ElevenLabs and Telegram bridges are configured through local proxies and user-provided secrets.',
    alignments: [
      'Cloud voice and contact bridges are opt-in',
      'Gemma output surfaces severity and suggested action',
      'Local storage backs the demo feed and emergency state',
      'Transparent alert logic, no black-box decisions',
    ],
  },
];

const specialTracks = [
  {
    prize: 'Cactus',
    award: '$10,000',
    icon: 'ri-route-line',
    color: '#0DC298',
    org: 'Special Technology',
    description:
      'Echo explored Cactus-style local-first routing, but the final demo intentionally avoids web-breaking native inference dependencies. Runtime adapters keep Android/on-device work isolated from the Chrome path.',
    fit: 'Explored',
    fitColor: '#0DC298',
  },
  {
    prize: 'llama.cpp',
    award: 'Prize',
    icon: 'ri-terminal-box-line',
    color: '#2060C6',
    org: 'Special Technology',
    description:
      'Echo uses llama.cpp + GGUF quantization for the local Gemma demo path. It is currently deployed as a local server backend, with the app prepared to expose model download and compatibility options for later device runtime validation.',
    fit: 'Current Runtime',
    fitColor: '#000B26',
  },
];

const HackathonTracksSection = () => {
  const header = useScrollAnimation();
  const specialHeader = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const { ref: mainRef, visibleCount: mainVisible } = useStaggerAnimation(mainTracks.length, { threshold: 0.08 });
  const { ref: specialRef, visibleCount: specialVisible } = useStaggerAnimation(specialTracks.length, { threshold: 0.1 });

  return (
    <section id="hackathon-tracks" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#2060C6]/4 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#0DC298] text-xs font-semibold tracking-widest uppercase border border-[#0DC298]/20 rounded-full px-4 py-2 bg-[#0DC298]/5">
            Hackathon Track Alignment
          </span>
          <h2 className="text-[#000B26] text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
            Where Echo fits
            <br />
            <span className="text-[#000B26]/30 font-light">in the Gemma 4 Good challenge</span>
          </h2>
          <p className="text-[#000B26]/45 text-base max-w-2xl mx-auto">
            Echo aligns with four main tracks and is a primary contender for two special technology prizes. Here's exactly how.
          </p>
        </div>

        {/* Main Tracks */}
        <div ref={mainRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {mainTracks.map((track, idx) => (
            <div
              key={track.track}
              className={`bg-[#F8F9FF] border border-[#000B26]/8 rounded-3xl p-7 group hover:bg-white hover:border-[#2060C6]/15 transition-all duration-500 ${
                idx < mainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${track.color}10`, border: `1px solid ${track.color}20` }}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${track.icon} text-base`} style={{ color: track.color }}></i>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${track.matchColor}10`,
                    color: track.matchColor,
                    border: `1px solid ${track.matchColor}20`,
                  }}
                >
                  {track.match} Match
                </span>
              </div>

              <h3 className="text-[#000B26] text-lg font-semibold mb-3">{track.track}</h3>
              <p className="text-[#000B26]/50 text-sm leading-relaxed mb-5">{track.description}</p>

              {/* Alignment points */}
              <ul className="space-y-2">
                {track.alignments.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#000B26]/60 text-xs">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs" style={{ color: track.color }}></i>
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Technology Prizes */}
        <div
          ref={specialHeader.ref}
          className={`transition-all duration-700 ${specialHeader.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-10">
            <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/20 rounded-full px-4 py-2 bg-[#2060C6]/5">
              Special Technology Prizes
            </span>
            <h3 className="text-[#000B26] text-3xl font-semibold mt-6 mb-3">
              Technical Prize Eligibility
            </h3>
          </div>

          <div ref={specialRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {specialTracks.map((item, idx) => (
              <div
                key={item.prize}
                className={`relative bg-[#F8F9FF] border rounded-3xl p-7 transition-all duration-500 ${
                  idx < specialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${item.fit === 'Primary Target' ? 'border-[#2060C6]/20 bg-gradient-to-b from-[#2060C6]/4 to-[#F8F9FF]' : 'border-[#000B26]/8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center mb-5 mt-2">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${item.icon} text-base`} style={{ color: item.color }}></i>
                    </div>
                  </div>
                </div>

                <p className="text-[#000B26]/35 text-xs font-semibold tracking-widest uppercase mb-1">
                  {item.org}
                </p>
                <h4 className="text-[#000B26] text-xl font-semibold mb-3">{item.prize} Prize</h4>
                <p className="text-[#000B26]/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonTracksSection;
