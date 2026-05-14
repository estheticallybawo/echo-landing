import { useState, useEffect } from 'react';

interface AppPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const screens = [
  {
    id: 'onboarding1',
    label: 'Onboarding',
    image: 'https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/ad1dcd78-6575-4a56-8241-4d172df01773_Onboarding-31.png?v=5f253776d053a1cfbf3473924ab55df9',
    icon: 'ri-home-4-line',
  },
  {
    id: 'onboarding2',
    label: 'Get Started',
    image: 'https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/781f8a33-5f1d-45d0-a015-fbd7c811b901_Onboarding-36.png?v=e2447d8a08aa0d6aee5675825f7b9208',
    icon: 'ri-shield-flash-line',
  },
  {
    id: 'onboarding3',
    label: 'Setup',
    image: 'https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/aacbc47c-1aa5-4308-8a38-2fe35378ffb3_Onboarding-42.png?v=35e5572c4ba71c62e709ead4d3a2e717',
    icon: 'ri-group-line',
  },
  {
    id: 'onboarding4',
    label: 'Permission',
    image: 'https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/1b5405df-781d-45e3-a98a-749a2b5e8776_Onboarding-39.png?v=25852cb94307573ead2460a50a8ea0fc',
    icon: 'ri-broadcast-line',
  },
  {
    id: 'activity',
    label: 'Activity',
    image: 'https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/6077f36e78d0b8378345b83d4e60892d.png',
    icon: 'ri-pulse-line',
  },
];

const AppPreviewModal = ({ isOpen, onClose }: AppPreviewModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) setActiveIndex(0);
  }, [isOpen]);

  const activeScreen = screens[activeIndex];

  const goPrev = () => setActiveIndex((i) => (i - 1 + screens.length) % screens.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % screens.length);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0B0F1A]/80 backdrop-blur-md" />

      {/* ── MOBILE LAYOUT ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-1 lg:hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-3 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all cursor-pointer z-30"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        {/* Screen label */}
        <p className="text-white/50 text-sm font-medium tracking-widest uppercase mb-4 mt-1">
          {activeScreen.label}
        </p>

        {/* Phone + arrows row */}
        <div className="flex items-center gap-2">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all cursor-pointer shrink-0"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          {/* Phone Shell */}
          <div
            className="relative w-[280px] bg-[#111827] rounded-[44px] p-2.5"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 28px 80px rgba(0,0,0,0.85)' }}
          >
            {/* Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111827] rounded-full z-20 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1e2535]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#1e2535]"></div>
            </div>
            {/* Screen */}
            <div className="relative rounded-[36px] overflow-hidden h-[560px]">
              {screens.map((screen, i) => (
                <img
                  key={screen.id}
                  src={screen.image}
                  alt={screen.label}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-400 ${
                    i === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            {/* Side buttons */}
            <div className="absolute right-[-4px] top-32 w-1 h-14 bg-[#1e2535] rounded-r-full"></div>
            <div className="absolute left-[-4px] top-28 w-1 h-10 bg-[#1e2535] rounded-l-full"></div>
            <div className="absolute left-[-4px] top-44 w-1 h-16 bg-[#1e2535] rounded-l-full"></div>
            <div className="absolute left-[-4px] top-64 w-1 h-16 bg-[#1e2535] rounded-l-full"></div>
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-[44px] pointer-events-none"
              style={{ boxShadow: '0 0 60px rgba(32,96,198,0.4)' }}
            ></div>
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all cursor-pointer shrink-0"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-5">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                i === activeIndex ? 'w-5 h-2 bg-[#2060C6]' : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl overflow-hidden hidden lg:flex flex-row shadow-2xl max-h-[92vh]">

        {/* Left Panel — Info */}
        <div className="w-2/5 bg-[#000B26] p-8 flex flex-col justify-between">
          <div>
            <button
              onClick={onClose}
              className="mb-8 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all cursor-pointer"
            >
              <i className="ri-close-line text-lg"></i>
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0DC298] border border-[#0DC298]/30 rounded-full px-3 py-1">
                App Preview
              </span>
            </div>

            <h2 className="text-white text-3xl font-semibold leading-tight mb-4">
              Echo in your pocket
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Swipe through real screens from the Echo app. See exactly what your experience looks like from onboarding to your first alert.
            </p>

            {/* Screen Tabs */}
            <div className="flex flex-col gap-2 mb-8">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-left whitespace-nowrap ${
                    activeIndex === i
                      ? 'bg-[#2060C6]/20 text-[#2060C6] border border-[#2060C6]/30'
                      : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                  }`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`text-xs ${screen.icon}`}></i>
                  </div>
                  {screen.label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {[
                { icon: 'ri-wifi-off-line', text: 'Local-first emergency state' },
                { icon: 'ri-lock-line', text: 'Cloud features are opt-in' },
                { icon: 'ri-flashlight-line', text: 'Timer-based escalation' },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3 text-white/40 text-xs">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${f.icon} text-[#0DC298]`}></i>
                  </div>
                  {f.text}
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/20 text-xs mt-6">Real app screens , Echo mobile</p>
        </div>

        {/* Right Panel — Phone Mockup */}
        <div className="w-3/5 bg-gradient-to-br from-[#000B26] to-[#0a1535] flex items-center justify-center p-8">
          <div className="relative">
            <div className="relative w-[280px] bg-[#111827] rounded-[44px] p-3" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.6)' }}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111827] rounded-full z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1e2535]"></div>
                <div className="w-3 h-3 rounded-full bg-[#1e2535]"></div>
              </div>
              <div className="relative rounded-[36px] overflow-hidden h-[560px]">
                {screens.map((screen, i) => (
                  <img
                    key={screen.id}
                    src={screen.image}
                    alt={screen.label}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                      activeIndex === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute right-[-4px] top-24 w-1 h-10 bg-[#1e2535] rounded-r-full"></div>
            <div className="absolute left-[-4px] top-20 w-1 h-8 bg-[#1e2535] rounded-l-full"></div>
            <div className="absolute left-[-4px] top-32 w-1 h-12 bg-[#1e2535] rounded-l-full"></div>
            <div className="absolute left-[-4px] top-48 w-1 h-12 bg-[#1e2535] rounded-l-full"></div>
            <div className="absolute inset-0 rounded-[44px] pointer-events-none" style={{ boxShadow: '0 0 60px rgba(32,96,198,0.25)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreviewModal;
