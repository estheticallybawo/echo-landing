import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const waveRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = waveRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const waves = [
        { amp: 18, freq: 0.018, speed: 0.03, color: 'rgba(32,96,198,0.45)', offset: 0 },
        { amp: 12, freq: 0.025, speed: 0.05, color: 'rgba(32,96,198,0.2)', offset: 1.5 },
        { amp: 8, freq: 0.012, speed: 0.02, color: 'rgba(13,194,152,0.35)', offset: 3 },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let x = 0; x <= canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.freq + t * wave.speed + wave.offset) * wave.amp;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      t += 1;
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#2060C6]/8 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#0DC298]/6 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#2060C6]/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 bg-[#2060C6]/8 border border-[#2060C6]/20 rounded-full px-4 py-2 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span className="w-2 h-2 rounded-full bg-[#0DC298] animate-pulse block"></span>
          <span className="text-[#2060C6] text-xs font-medium tracking-widest uppercase">Gemma 4 Good · Kaggle × Google Hackathon</span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-light text-[#000B26] leading-tight mb-6 tracking-tight transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '120ms' }}
        >
          You are{' '}
          <em className="not-italic text-[#2060C6] font-semibold">heard.</em>
          <br />
          Help is already on the way.
        </h1>

        {/* Subtext */}
        <p
          className={`text-[#000B26]/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '240ms' }}
        >
          Echo is a personal safety AI that listens, understands context, and starts a coordinated help flow, turning a one-way cry for help into a two-way system of response, confirmation, and community action.
        </p>

        {/* Feature Pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '360ms' }}
        >
          {[
            { icon: 'ri-mic-line', label: 'Listens for you' },
            { icon: 'ri-wifi-off-line', label: 'Local-first demo' },
            { icon: 'ri-group-line', label: 'Telegram bridge ready' },
            { icon: 'ri-shield-line', label: 'Activates help quietly' },
          ].map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2 bg-[#2060C6]/6 border border-[#2060C6]/15 rounded-full px-4 py-2.5"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${pill.icon} text-[#2060C6] text-sm`}></i>
              </div>
              <span className="text-[#000B26]/70 text-sm font-medium whitespace-nowrap">{pill.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '480ms' }}
        >
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#2060C6] hover:bg-[#1a4fa0] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap text-base"
          >
            See How It Works
          </button>
          <button
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-[#000B26]/15 hover:border-[#2060C6]/40 text-[#000B26]/70 hover:text-[#2060C6] font-medium px-8 py-4 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap text-base"
          >
            Watch Demo
          </button>
        </div>

        {/* Waveform Canvas */}
        <div
          className={`w-full max-w-2xl h-16 relative transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <canvas ref={waveRef} className="w-full h-full" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-arrow-down-line text-[#000B26]/25 text-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
