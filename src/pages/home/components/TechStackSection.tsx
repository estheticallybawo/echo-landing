import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const inferenceStack = [
  {
    layer: '01',
    label: 'Demo Layer',
    title: 'Flutter + Chrome',
    subtitle: 'voice UI and fast iteration',
    icon: 'ri-computer-line',
    color: '#2060C6',
    description:
      'The submission demo runs in Chrome from the Flutter app. The voice SOS flow captures a short request, shows listening/thinking/speaking states, and keeps typed fallback available for reliability.',
    tags: ['Flutter Web', 'Chrome STT', 'Voice SOS', 'Typed fallback'],
  },
  {
    layer: '02',
    label: 'Gemma Layer',
    title: 'Local llama.cpp Runtime',
    subtitle: 'transcript to Gemma response',
    icon: 'ri-terminal-box-line',
    color: '#0DC298',
    description:
      'For the web demo, Echo sends text transcripts to a local llama.cpp server running Gemma. Direct WAV understanding is supported as an experimental opt-in path, but the fast path is transcript-first for responsiveness.',
    tags: ['Gemma', 'llama.cpp', 'Local server', 'JSON decisions'],
  },
  {
    layer: '03',
    label: 'Safety Layer',
    title: 'Escalation Engine',
    subtitle: 'timer-based response loop',
    icon: 'ri-route-line',
    color: '#2060C6',
    description:
      'High or critical Gemma outputs, plus direct user requests for help, route into the emergency flow. The timers keep escalating even when AI or network services are slow.',
    tags: ['Tier 1', 'Tier 2', 'Echo Feed', 'Graceful fallback'],
  },
  {
    layer: '04',
    label: 'Bridge Layer',
    title: 'Local Feed + Telegram',
    subtitle: 'demo-ready contact loop',
    icon: 'ri-refresh-line',
    color: '#0DC298',
    description:
      'Incident state is kept locally with Hive-compatible storage and reflected in the Echo Feed. A local Telegram bridge can send Tier 1/Tier 2 messages and read SAFE, HELP, or CALL replies.',
    tags: ['Hive local state', 'Telegram bot', 'Echo Feed', 'Contact replies'],
  },
];

const archDiagram = [
  { id: 'mic', label: 'Voice SOS', icon: 'ri-mic-line', color: '#2060C6' },
  { id: 'transcript', label: 'Transcript', icon: 'ri-chat-voice-line', color: '#0DC298' },
  { id: 'gemma', label: 'Local Gemma', icon: 'ri-brain-line', color: '#2060C6', highlight: true },
  { id: 'router', label: 'Safety Decision', icon: 'ri-route-line', color: '#0DC298' },
  { id: 'alert', label: 'Feed + Bridge', icon: 'ri-alarm-warning-line', color: '#2060C6' },
];

const demoStates = [
  { state: 'Alert Triggered', icon: 'ri-alarm-warning-line', color: '#2060C6', active: true },
  { state: 'Saved Locally', icon: 'ri-database-2-line', color: '#0DC298', active: true },
  { state: 'AI Unavailable', icon: 'ri-wifi-off-line', color: '#000B26', active: false },
  { state: 'Timer Continues', icon: 'ri-timer-line', color: '#2060C6', active: true },
  { state: 'Bridge Syncs', icon: 'ri-refresh-line', color: '#0DC298', active: true },
  { state: 'Replies Received', icon: 'ri-user-received-line', color: '#2060C6', active: true },
];

const fallbackDetails = [
  {
    icon: 'ri-database-2-line',
    color: '#2060C6',
    title: 'Local Incident State',
    desc: 'The demo records emergency state locally so the Echo Feed can update even when external services are unavailable.',
  },
  {
    icon: 'ri-plug-line',
    color: '#0DC298',
    title: 'Optional Online Bridges',
    desc: 'ElevenLabs and Telegram improve the demo when configured, but Echo falls back to browser TTS and local UI state when they are down.',
  },
  {
    icon: 'ri-download-cloud-line',
    color: '#2060C6',
    title: 'Isolated Model Download Path',
    desc: 'The settings flow exposes compatible Gemma model options for APK testing without pulling Android-only AI dependencies into the web build.',
  },
];

const TechStackSection = () => {
  const header = useScrollAnimation();
  const arch = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const { ref: stackRef, visibleCount } = useStaggerAnimation(inferenceStack.length, { threshold: 0.08 });
  const finePrint = useScrollAnimation({ rootMargin: '0px 0px -20px 0px' });

  return (
    <section id="tech-stack" className="relative bg-[#F8F9FF] py-24 px-6 overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#2060C6]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0DC298]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/20 rounded-full px-4 py-2 bg-[#2060C6]/5">
            How Echo Was Built
          </span>
          <h2 className="text-[#000B26] text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
            Local-first demo,
            <br />
            <span className="text-[#000B26]/30 font-light">on-device path prepared</span>
          </h2>
          <p className="text-[#000B26]/45 text-base max-w-2xl mx-auto">
            Echo's current demo proves the safety experience in Chrome with a local Gemma server, local incident state, optional ElevenLabs voice, and an optional Telegram contact bridge. The APK/model-download path is isolated so future on-device runtime work does not break web testing.
          </p>
        </div>

        <div
          ref={arch.ref}
          className={`mb-16 bg-white border border-[#000B26]/8 rounded-3xl p-8 md:p-10 transition-all duration-700 ${arch.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-[#000B26]/35 text-xs font-semibold tracking-widest uppercase text-center mb-8">
            Demo Pipeline
          </p>

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

          <div className="mt-8 pt-6 border-t border-[#000B26]/6 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: 'ri-computer-line', label: 'Chrome Demo', color: '#2060C6' },
              { icon: 'ri-terminal-box-line', label: 'llama.cpp', color: '#0DC298' },
              { icon: 'ri-database-2-line', label: 'Hive Local State', color: '#2060C6' },
              { icon: 'ri-telegram-line', label: 'Telegram Bridge', color: '#0DC298' },
              { icon: 'ri-download-cloud-line', label: 'APK Model Path', color: '#2060C6' },
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

        <div ref={stackRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {inferenceStack.map((item, idx) => (
            <div
              key={item.layer}
              className={`bg-white border border-[#000B26]/8 rounded-3xl p-7 group hover:border-[#2060C6]/20 transition-all duration-500 ${
                idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
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

        <div
          ref={finePrint.ref}
          className={`bg-white border border-[#000B26]/8 rounded-3xl p-8 md:p-10 transition-all duration-700 delay-200 ${finePrint.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-full md:w-56">
              <p className="text-[#000B26]/30 text-xs font-semibold tracking-widest uppercase mb-5">
                Demo State Machine
              </p>
              <div className="space-y-3">
                {demoStates.map((step, i) => (
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
                      {i < demoStates.length - 1 && (
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

            <div className="hidden md:block w-px self-stretch bg-[#000B26]/6"></div>

            <div className="flex-1">
              <h3 className="text-[#000B26] text-2xl font-semibold mb-3">
                Graceful Degradation Architecture
              </h3>
              <p className="text-[#000B26]/50 text-sm leading-relaxed mb-6">
                Echo is designed for stressful demos and stressful real-world use: if one capability is unavailable, the rest of the safety flow still moves. Local state, manual triggers, and timer-based escalation do not depend on perfect AI, perfect speech recognition, or perfect network access.
              </p>
              <div className="space-y-4">
                {fallbackDetails.map((item) => (
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
