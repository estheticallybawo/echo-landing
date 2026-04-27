import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const inferenceStack = [
  {
    layer: '01',
    label: 'Model Layer',
    title: 'Gemma 4 (2B)',
    subtitle: 'via LiteRT / llama.cpp',
    icon: 'ri-cpu-line',
    color: '#2060C6',
    description:
      'Quantized Gemma 4 2B runs entirely on-device using Google AI Edge\'s LiteRT runtime. INT4/INT8 quantization keeps the model under 1.5 GB , fast enough for real-time distress classification on mid-range Android hardware.',
    tags: ['LiteRT', 'INT4 Quant', 'Gemma 4 2B', 'llama.cpp fallback'],
  },
  {
    layer: '02',
    label: 'Inference Layer',
    title: 'On-Device Pipeline',
    subtitle: 'Audio → Embedding → Classification',
    icon: 'ri-sound-module-line',
    color: '#0DC298',
    description:
      'Raw microphone audio is chunked into 2-second windows, converted to mel-spectrograms, and passed through a lightweight encoder. The Gemma model classifies distress signals with <200ms latency , no cloud round-trip required.',
    tags: ['Mel Spectrogram', '<200ms Latency', 'Streaming Inference', 'No Cloud'],
  },
  {
    layer: '03',
    label: 'Routing Layer',
    title: 'Intelligent Task Router',
    subtitle: 'Local-first with edge fallback',
    icon: 'ri-route-line',
    color: '#2060C6',
    description:
      'Echo uses a Cactus-style local-first routing architecture. Simple classification stays fully on-device. Complex context analysis (e.g. multi-turn distress patterns) can optionally route to a lightweight edge model when connectivity is available.',
    tags: ['Local-First', 'Edge Routing', 'Cactus Architecture', 'Adaptive'],
  },
  {
    layer: '04',
    label: 'Sync Layer',
    title: 'Offline Sync Engine',
    subtitle: 'Queue → Compress → Sync',
    icon: 'ri-refresh-line',
    color: '#0DC298',
    description:
      'All alerts, location snapshots, and audio clips are queued locally in an encrypted SQLite store. When connectivity returns, the sync engine replays the queue in chronological order , ensuring no alert is ever lost, even in dead zones.',
    tags: ['SQLite Queue', 'Encrypted Store', 'Auto-Replay', 'Zero Data Loss'],
  },
];

const archDiagram = [
  { id: 'mic', label: 'Microphone', icon: 'ri-mic-line', color: '#2060C6', x: 'left' },
  { id: 'encoder', label: 'Audio Encoder', icon: 'ri-equalizer-line', color: '#0DC298', x: 'center-left' },
  { id: 'gemma', label: 'Gemma 4 2B', icon: 'ri-brain-line', color: '#2060C6', x: 'center', highlight: true },
  { id: 'router', label: 'Task Router', icon: 'ri-route-line', color: '#0DC298', x: 'center-right' },
  { id: 'alert', label: 'Alert Engine', icon: 'ri-alarm-warning-line', color: '#2060C6', x: 'right' },
];

const TechStackSection = () => {
  const header = useScrollAnimation();
  const arch = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const { ref: stackRef, visibleCount } = useStaggerAnimation(inferenceStack.length, { threshold: 0.08 });
  const finePrint = useScrollAnimation({ rootMargin: '0px 0px -20px 0px' });

  return (
    <section id="tech-stack" className="relative bg-[#F8F9FF] py-24 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#2060C6]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0DC298]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/20 rounded-full px-4 py-2 bg-[#2060C6]/5">
            How Echo Was Built
          </span>
          <h2 className="text-[#000B26] text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
            On-Device AI,
            <br />
            <span className="text-[#000B26]/30 font-light">no cloud required</span>
          </h2>
          <p className="text-[#000B26]/45 text-base max-w-2xl mx-auto">
            Echo is built on Gemma 4 running entirely on your phone. The full inference pipeline , from raw audio to distress classification to alert dispatch , happens locally, in under 200ms.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div
          ref={arch.ref}
          className={`mb-16 bg-white border border-[#000B26]/8 rounded-3xl p-8 md:p-10 transition-all duration-700 ${arch.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-[#000B26]/35 text-xs font-semibold tracking-widest uppercase text-center mb-8">
            Inference Pipeline
          </p>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
            {archDiagram.map((node, idx) => (
              <div key={node.id} className="flex flex-col md:flex-row items-center gap-3 md:gap-0 w-full md:w-auto">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      node.highlight
                        ? 'bg-[#2060C6] ring-4 ring-[#2060C6]/20'
                        : 'bg-white border border-[#000B26]/10'
                    }`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i
                        className={`${node.icon} text-lg`}
                        style={{ color: node.highlight ? '#fff' : node.color }}
                      ></i>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium text-center whitespace-nowrap ${
                      node.highlight ? 'text-[#2060C6] font-semibold' : 'text-[#000B26]/50'
                    }`}
                  >
                    {node.label}
                  </span>
                </div>
                {idx < archDiagram.length - 1 && (
                  <div className="hidden md:flex items-center flex-1 mx-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-[#2060C6]/20 to-[#0DC298]/20"></div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-s-line text-[#000B26]/20 text-sm"></i>
                    </div>
                  </div>
                )}
                {idx < archDiagram.length - 1 && (
                  <div className="md:hidden flex flex-col items-center">
                    <div className="w-px h-4 bg-gradient-to-b from-[#2060C6]/20 to-[#0DC298]/20"></div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-down-s-line text-[#000B26]/20 text-sm"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Runtime badges */}
          <div className="mt-8 pt-6 border-t border-[#000B26]/6 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: 'ri-android-line', label: 'Android 10+', color: '#2060C6' },
              { icon: 'ri-cpu-line', label: 'LiteRT Runtime', color: '#0DC298' },
              { icon: 'ri-lock-line', label: 'Fully On-Device', color: '#2060C6' },
              { icon: 'ri-timer-line', label: '<200ms Latency', color: '#0DC298' },
              { icon: 'ri-wifi-off-line', label: 'Offline-First', color: '#2060C6' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-[#F8F9FF] border border-[#000B26]/8 rounded-full px-4 py-2"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${badge.icon} text-xs`} style={{ color: badge.color }}></i>
                </div>
                <span className="text-[#000B26]/55 text-xs font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Cards */}
        <div ref={stackRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {inferenceStack.map((item, idx) => (
            <div
              key={item.layer}
              className={`bg-white border border-[#000B26]/8 rounded-3xl p-7 group hover:border-[#2060C6]/20 transition-all duration-500 ${
                idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${item.icon} text-base`} style={{ color: item.color }}></i>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: item.color, opacity: 0.5 }}
                >
                  {item.label}
                </span>
              </div>

              <h3 className="text-[#000B26] text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-[#000B26]/35 text-xs mb-3 font-medium">{item.subtitle}</p>
              <p className="text-[#000B26]/50 text-sm leading-relaxed mb-5">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: `${item.color}08`,
                      color: item.color,
                      border: `1px solid ${item.color}18`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Offline Sync Architecture Detail */}
        <div
          ref={finePrint.ref}
          className={`bg-white border border-[#000B26]/8 rounded-3xl p-8 md:p-10 transition-all duration-700 delay-200 ${finePrint.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Offline sync visual */}
            <div className="flex-shrink-0 w-full md:w-56">
              <p className="text-[#000B26]/30 text-xs font-semibold tracking-widest uppercase mb-5">
                Sync State Machine
              </p>
              <div className="space-y-3">
                {[
                  { state: 'Alert Triggered', icon: 'ri-alarm-warning-line', color: '#2060C6', active: true },
                  { state: 'Queued Locally', icon: 'ri-database-2-line', color: '#0DC298', active: true },
                  { state: 'Offline Mode', icon: 'ri-wifi-off-line', color: '#000B26', active: false },
                  { state: 'Connection Returns', icon: 'ri-wifi-line', color: '#2060C6', active: true },
                  { state: 'Queue Replayed', icon: 'ri-refresh-line', color: '#0DC298', active: true },
                  { state: 'Contacts Notified', icon: 'ri-user-received-line', color: '#2060C6', active: true },
                ].map((step, i) => (
                  <div key={step.state} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: step.active ? `${step.color}12` : '#F8F9FF',
                          border: `1px solid ${step.active ? step.color + '25' : '#000B2610'}`,
                        }}
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i
                            className={`${step.icon} text-xs`}
                            style={{ color: step.active ? step.color : '#000B2630' }}
                          ></i>
                        </div>
                      </div>
                      {i < 5 && (
                        <div
                          className="w-px h-3 mt-1"
                          style={{ backgroundColor: step.active ? `${step.color}20` : '#000B2608' }}
                        ></div>
                      )}
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: step.active ? '#000B26' : '#000B2640' }}
                    >
                      {step.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-[#000B26]/6"></div>

            {/* Right: Description */}
            <div className="flex-1">
              <h3 className="text-[#000B26] text-2xl font-semibold mb-3">
                Offline Sync Architecture
              </h3>
              <p className="text-[#000B26]/50 text-sm leading-relaxed mb-6">
                Echo is designed for the real world , where networks fail, signals drop, and disasters knock out infrastructure. The offline sync engine ensures that every alert, location ping, and audio clip is preserved locally and delivered the moment connectivity returns.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: 'ri-database-2-line',
                    color: '#2060C6',
                    title: 'Encrypted SQLite Queue',
                    desc: 'All events are written to an AES-256 encrypted local database before any network attempt.',
                  },
                  {
                    icon: 'ri-archive-line',
                    color: '#0DC298',
                    title: 'Delta Compression',
                    desc: 'Location and audio payloads are compressed before queuing , minimizing storage and burst bandwidth on reconnect.',
                  },
                  {
                    icon: 'ri-refresh-line',
                    color: '#2060C6',
                    title: 'Idempotent Replay',
                    desc: 'Each queued event has a unique ID. Replaying the queue is safe , duplicates are automatically deduplicated on the receiving end.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className={`${item.icon} text-sm`} style={{ color: item.color }}></i>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#000B26] text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-[#000B26]/45 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
