import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const layers = [
  {
    number: '01',
    label: 'Layer 1',
    title: 'Inner Circle',
    color: '#2060C6',
    borderColor: 'border-[#2060C6]/20',
    bgColor: 'bg-[#2060C6]/4',
    icon: 'ri-user-heart-line',
    items: [
      'Starts the Tier 1 alert path',
      'Shares demo location context and incident summary',
      'Receives SAFE, HELP, or CALL responses',
    ],
    description:
      "When Echo detects high-risk language or the user asks for help, the demo can notify a trusted contact through the Telegram bridge with the incident summary and last-known location context.",
  },
  {
    number: '02',
    label: 'Layer 2',
    title: 'Escalation',
    color: '#0DC298',
    borderColor: 'border-[#0DC298]/20',
    bgColor: 'bg-[#0DC298]/4',
    icon: 'ri-alarm-warning-line',
    items: [
      "Triggered if Tier 1 doesn't resolve",
      'Backup contact path is notified',
      'Timeline and Echo Feed state update',
    ],
    description:
      "If the first contact path does not mark the user safe, Echo escalates on a timer. The demo keeps the alert visible and repeatable so the response loop is easy to show end to end.",
  },
  {
    number: '03',
    label: 'Layer 3',
    title: 'Public Signal',
    color: '#2060C6',
    borderColor: 'border-[#2060C6]/20',
    bgColor: 'bg-[#2060C6]/4',
    icon: 'ri-broadcast-line',
    items: [
      'Final escalation to the Echo Feed',
      'Local community awareness layer activated',
      'Incident stays visible until marked safe',
    ],
    description:
      'As a last resort, Echo posts to the Echo Feed, showing how a private distress signal can become a wider community signal when closer contacts do not respond.',
  },
];

const HowItWorksSection = () => {
  const header = useScrollAnimation();
  const { ref: cardsRef, visibleCount } = useStaggerAnimation(layers.length, { threshold: 0.1 });
  const offline = useScrollAnimation({ rootMargin: '0px 0px -30px 0px' });

  return (
    <section id="how-it-works" className="relative bg-[#F8F9FF] py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2060C6]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/20 rounded-full px-4 py-2 bg-[#2060C6]/5">
            How Echo Works
          </span>
          <h2 className="text-[#0B0F1A] text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
            A 3-Layer Protocol
            <br />
            <span className="text-[#0B0F1A]/35 font-light">that keeps moving</span>
          </h2>
          <p className="text-[#0B0F1A]/45 text-base max-w-xl mx-auto">
            Echo doesn't just send one alert. It keeps escalating until someone responds, because your safety is non-negotiable.
          </p>
        </div>

        {/* Layer Cards */}
        <div ref={cardsRef} className="space-y-6">
          {layers.map((layer, idx) => (
            <div
              key={layer.number}
              className={`relative ${layer.bgColor} border ${layer.borderColor} rounded-3xl p-8 md:p-10 overflow-hidden group hover:bg-white transition-all duration-500 ${
                idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 text-[120px] font-bold leading-none select-none pointer-events-none"
                style={{ color: layer.color, opacity: 0.05 }}
              >
                {layer.number}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${layer.color}12`, border: `1px solid ${layer.color}25` }}
                  >
                    <div className="w-7 h-7 flex items-center justify-center">
                      <i className={`${layer.icon} text-xl`} style={{ color: layer.color }}></i>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-[#0B0F1A] text-2xl font-semibold mb-3">{layer.title}</h3>
                  <p className="text-[#0B0F1A]/50 text-sm leading-relaxed mb-5">{layer.description}</p>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[#0B0F1A]/65 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                          <i className="ri-check-line text-xs" style={{ color: layer.color }}></i>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offline Banner */}
        <div
          ref={offline.ref}
          className={`mt-10 bg-white border border-[#0B0F1A]/8 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center transition-all duration-700 delay-300 ${offline.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-wifi-off-line text-[#2060C6]"></i>
          </div>
          <p className="text-[#0B0F1A]/60 text-sm">
            <span className="text-[#0B0F1A] font-medium">Emergency state is local-first</span>
            {' '}, online bridges add Telegram and natural voice when available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
