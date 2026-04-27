import { useState, useEffect, useRef } from 'react';
import AppPreviewModal from './AppPreviewModal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const timelineEvents = [
  { time: 'T+0s', label: 'Trigger activated', icon: 'ri-record-circle-line', color: '#2060C6' },
  { time: 'T+2s', label: 'AI detects distress', icon: 'ri-brain-line', color: '#2060C6' },
  { time: 'T+5s', label: 'Inner circle notified', icon: 'ri-group-line', color: '#0DC298' },
  { time: 'T+30s', label: 'Escalation begins', icon: 'ri-alarm-warning-line', color: '#0DC298' },
  { time: 'T+60s', label: 'Public awareness activated', icon: 'ri-broadcast-line', color: '#0DC298' },
];

const DemoSection = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [running, setRunning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const header = useScrollAnimation();
  const video = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const timeline = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const cta = useScrollAnimation({ rootMargin: '0px 0px -20px 0px' });

  const startSimulation = () => {
    if (running) return;
    setActiveNode(0);
    setRunning(true);
    let current = 0;
    intervalRef.current = setInterval(() => {
      current += 1;
      if (current >= timelineEvents.length) {
        clearInterval(intervalRef.current!);
        setRunning(false);
        return;
      }
      setActiveNode(current);
    }, 1200);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <AppPreviewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="demo" className="relative bg-[#F8F9FF] py-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0DC298]/6 blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            ref={header.ref}
            className={`text-center mb-12 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-[#2060C6] text-xs font-semibold tracking-widest uppercase border border-[#2060C6]/25 rounded-full px-4 py-2 bg-[#2060C6]/5">
              Demo Experience
            </span>
            <h2 className="text-[#000B26] text-4xl md:text-5xl font-semibold mt-6 mb-4">
              See Echo in Action
            </h2>
            <p className="text-[#000B26]/50 text-base max-w-lg mx-auto">
              Watch how Echo responds in real time, from trigger to community activation.
            </p>
          </div>

          {/* Video Embed */}
          <div
            ref={video.ref}
            className={`relative rounded-3xl overflow-hidden border border-[#000B26]/8 mb-12 bg-[#000B26]/5 transition-all duration-800 ${video.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDuration: '800ms' }}
          >
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/X1TeMtL94aw"
                title="Echo Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Timeline Simulation */}
          <div
            ref={timeline.ref}
            className={`bg-white border border-[#000B26]/8 rounded-3xl p-8 md:p-10 mb-8 transition-all duration-700 delay-100 ${timeline.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[#000B26] font-semibold text-lg">Response Timeline Simulation</h3>
              <button
                onClick={startSimulation}
                disabled={running}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  running
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#2060C6] text-white hover:bg-[#1a4fa0]'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${running ? 'ri-loader-4-line animate-spin' : 'ri-play-line'} text-sm`}></i>
                </div>
                {running ? 'Running...' : 'Run Simulation'}
              </button>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-6 left-0 right-0 h-px bg-gray-200" />
              <div
                className="absolute top-6 left-0 h-px bg-[#2060C6] transition-all duration-700"
                style={{ width: `${(activeNode / (timelineEvents.length - 1)) * 100}%` }}
              />
              <div className="flex justify-between relative">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 w-1/5">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        idx <= activeNode
                          ? 'border-[#2060C6] bg-[#2060C6]/10'
                          : 'border-gray-200 bg-gray-50'
                      } ${idx === activeNode && running ? 'ring-4 ring-[#2060C6]/20' : ''}`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i
                          className={`${event.icon} text-sm transition-colors duration-300 ${
                            idx <= activeNode ? 'text-[#2060C6]' : 'text-gray-300'
                          }`}
                        ></i>
                      </div>
                    </div>
                    <span className={`text-xs font-bold transition-colors duration-300 ${idx <= activeNode ? 'text-[#2060C6]' : 'text-gray-300'}`}>
                      {event.time}
                    </span>
                    <span className={`text-xs text-center leading-tight transition-colors duration-300 ${idx <= activeNode ? 'text-[#000B26]/70' : 'text-gray-300'}`}>
                      {event.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-4">
              {timelineEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                    idx <= activeNode ? 'bg-[#2060C6]/8 border border-[#2060C6]/20' : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${idx <= activeNode ? 'bg-[#2060C6]/15' : 'bg-gray-100'}`}>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${event.icon} text-sm ${idx <= activeNode ? 'text-[#2060C6]' : 'text-gray-300'}`}></i>
                    </div>
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${idx <= activeNode ? 'text-[#2060C6]' : 'text-gray-300'}`}>{event.time}</span>
                    <span className={`text-sm ${idx <= activeNode ? 'text-[#000B26]/70' : 'text-gray-300'}`}>{event.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview App CTA */}
          <div
            ref={cta.ref}
            className={`text-center transition-all duration-700 delay-200 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white border border-[#000B26]/10 hover:border-[#2060C6]/40 hover:bg-[#2060C6]/5 text-[#000B26] font-medium px-8 py-4 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-smartphone-line text-[#2060C6]"></i>
              </div>
              Preview App
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-[#000B26]/30 text-sm"></i>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoSection;
