import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: 'ri-heart-pulse-line',
    title: 'Gentle by Design',
    description:
      "Echo is built to feel like a calm, trusted friend , not a surveillance tool. Every interaction is designed to reduce anxiety, not add to it.",
    color: '#2060C6',
    bg: 'bg-[#2060C6]/5',
    border: 'border-[#2060C6]/12',
  },
  {
    icon: 'ri-wifi-off-line',
    title: 'Works Without Internet',
    description:
      "On-device AI means Echo functions even in remote areas, underground, or when networks are jammed. Your safety doesn't depend on a signal.",
    color: '#0DC298',
    bg: 'bg-[#0DC298]/5',
    border: 'border-[#0DC298]/12',
  },
  {
    icon: 'ri-lock-password-line',
    title: 'Privacy-First AI',
    description:
      "Your data stays on your device. Echo processes audio locally, nothing is stored or sent to servers without your explicit consent.",
    color: '#2060C6',
    bg: 'bg-[#2060C6]/5',
    border: 'border-[#2060C6]/12',
  },
  {
    icon: 'ri-community-line',
    title: 'Built Around Real Human Response',
    description:
      "Technology alone doesn't save lives, people do. Echo is designed to activate real humans in your life, not just send automated alerts.",
    color: '#0DC298',
    bg: 'bg-[#0DC298]/5',
    border: 'border-[#0DC298]/12',
  },
];

const DifferentSection = () => {
  const header = useScrollAnimation();
  const { ref: gridRef, visibleCount } = useStaggerAnimation(features.length, { threshold: 0.1 });

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0DC298]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#0DC298] text-xs font-semibold tracking-widest uppercase border border-[#0DC298]/20 rounded-full px-4 py-2 bg-[#0DC298]/5">
            What Makes Echo Different
          </span>
          <h2 className="text-[#0B0F1A] text-4xl md:text-5xl font-semibold mt-6 mb-4">
            Safety that feels{' '}
            <em className="not-italic text-[#0DC298]">human</em>
          </h2>
          <p className="text-[#0B0F1A]/45 text-base max-w-xl mx-auto">
            Most safety apps are reactive. Echo is proactive, intelligent, and built around the way real people actually help each other.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`relative ${feature.bg} border ${feature.border} rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-500 cursor-default ${
                idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${feature.color}12`, border: `1px solid ${feature.color}20` }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`${feature.icon} text-lg`} style={{ color: feature.color }}></i>
                </div>
              </div>
              <h3 className="text-[#0B0F1A] text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#0B0F1A]/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;
