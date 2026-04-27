import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PhoneMockup = () => (
  <div className="relative mx-auto w-[220px] flex-shrink-0">
    <div className="relative bg-[#0B0F1A] rounded-[38px] p-2.5">
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0B0F1A] rounded-full z-20 flex items-center justify-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1a1f2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#1a1f2e]"></div>
      </div>

      <div className="bg-white rounded-[30px] overflow-hidden h-[420px] flex flex-col">
        <img
          src="https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/0fb84223-2a26-42c7-b5a6-a6b695b400d3_Activity.png?v=37e90dff2a25495addb1cd2c4fa86a54"
          alt="Echo App Activity Screen"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>

    <div className="absolute right-[-3px] top-20 w-1 h-8 bg-[#1a1f2e] rounded-r-full"></div>
    <div className="absolute left-[-3px] top-16 w-1 h-6 bg-[#1a1f2e] rounded-l-full"></div>
    <div className="absolute left-[-3px] top-26 w-1 h-10 bg-[#1a1f2e] rounded-l-full"></div>
    <div className="absolute left-[-3px] top-40 w-1 h-10 bg-[#1a1f2e] rounded-l-full"></div>

    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#2060C6]/30 blur-xl rounded-full"></div>
  </div>
);

const ClosingSection = () => {
  const textCol = useScrollAnimation({ threshold: 0.1 });
  const phoneCol = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative bg-[#0B0F1A] py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2060C6]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#0DC298]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — Text + CTAs */}
          <div
            ref={textCol.ref}
            className={`flex-1 text-center lg:text-left transition-all duration-800 ${textCol.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDuration: '800ms' }}
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-tight">
              No one should face
              <br />
              <em className="not-italic text-[#2060C6] font-semibold">fear alone.</em>
            </h2>

            <p className="text-white/40 text-base md:text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Join the Echo community and be part of a movement that believes every voice deserves to be heard, and every call for help deserves an answer.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
              <button className="flex items-center gap-3 bg-[#2060C6] hover:bg-[#1a4fa0] text-white px-6 py-3.5 rounded-2xl transition-all duration-200 cursor-pointer group">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className="ri-android-line text-2xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none mb-0.5">Download</p>
                  <p className="text-sm font-semibold leading-none whitespace-nowrap">Echo APK</p>
                </div>
                <div className="ml-1 w-5 h-5 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <i className="ri-download-2-line text-sm"></i>
                </div>
              </button>

              <button
                disabled
                className="flex items-center gap-3 bg-white/6 border border-white/10 text-white/50 px-6 py-3.5 rounded-2xl cursor-not-allowed relative overflow-hidden"
              >
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className="ri-apple-line text-2xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] opacity-60 leading-none mb-0.5">Coming soon</p>
                  <p className="text-sm font-semibold leading-none whitespace-nowrap">App Store</p>
                </div>
                <span className="ml-2 text-[9px] font-semibold bg-white/10 rounded-full px-2 py-0.5 whitespace-nowrap">Soon</span>
              </button>
            </div>

            <p className="text-white/20 text-xs mb-10 flex items-center gap-1.5 justify-center lg:justify-start">
              <i className="ri-information-line text-[#2060C6]/50"></i>
              APK is a prototype build for demo purposes · Android 10+
            </p>

            <div className="mb-4 flex justify-center lg:justify-start">
              <a
                href="https://whatsapp.com/channel/0029VbDDMu884Om5qL1beh0D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-200 cursor-pointer whitespace-nowrap text-lg"
              >
                Join the Echo Community
              </a>
            </div>

            <div className="mb-6 flex flex-col items-center lg:items-start gap-1.5">
              <a
                href="https://x.com/Echo4all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/8 hover:bg-white/14 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap text-sm"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-twitter-x-line text-base"></i>
                </div>
                Follow us on X
              </a>
              <p className="text-white/25 text-[11px] leading-snug max-w-[260px] text-center lg:text-left">
                Stay updated &amp; help amplify every Echo case, your follow matters.
              </p>
            </div>

            <p className="text-white/15 text-xs tracking-widest">#EchoCommunity</p>
          </div>

          {/* Right — Phone mockup */}
          <div
            ref={phoneCol.ref}
            className={`flex-shrink-0 flex flex-col items-center gap-6 transition-all duration-800 delay-200 ${phoneCol.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDuration: '800ms', transitionDelay: '200ms' }}
          >
            <PhoneMockup />

            <div className="flex gap-6 mt-4">
              {[
                { value: '3-Layer', label: 'Protocol' },
                { value: '<10s', label: 'Response' },
                { value: '100%', label: 'Offline' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white text-base font-semibold">{stat.value}</p>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
