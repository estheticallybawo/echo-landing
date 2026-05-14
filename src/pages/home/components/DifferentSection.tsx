import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: 'ri-heart-pulse-line',
    title: 'Before The Report',
    description:
      'Echo is designed for the moment before a person is officially missing, when a small signal, a last-known location, or a worried message can still change the timeline.',
    color: '#2060C6',
    bg: 'bg-[#2060C6]/5',
    border: 'border-[#2060C6]/12',
  },
  {
    icon: 'ri-wifi-off-line',
    title: 'Local-First When It Matters',
    description:
      'Emergency state and escalation timers keep moving locally. Online bridges add contact alerts, replies, and amplification when available.',
    color: '#0DC298',
    bg: 'bg-[#0DC298]/5',
    border: 'border-[#0DC298]/12',
  },
  {
    icon: 'ri-lock-password-line',
    title: 'Structured Context',
    description:
      'Gemma helps turn messy speech into a clear summary: what happened, where the person was last known, who should be contacted, and what action is needed next.',
    color: '#2060C6',
    bg: 'bg-[#2060C6]/5',
    border: 'border-[#2060C6]/12',
  },
  {
    icon: 'ri-community-line',
    title: 'Built For Amplification',
    description:
      'When private contacts do not respond, Echo Feed creates a share-ready signal so communities can amplify the same facts instead of fragmented posts.',
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
            Echo is not just a panic button. It is a response loop for the fragile window where someone may be becoming unreachable, unsafe, or missing.
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
