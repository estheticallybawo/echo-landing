import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#000B26]/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/8a86bf1ce49b82c0328abe7a334c2013.png"
            alt="Echo Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Story', id: 'story' },
            { label: 'How It Works', id: 'how-it-works' },
            { label: 'Demo', id: 'demo' },
            { label: 'Roadmap', id: 'roadmap' },
            { label: 'Tech Stack', id: 'tech-stack' },
            { label: 'Tracks', id: 'hackathon-tracks' },
            { label: 'Team', id: 'team' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#000B26]/55 hover:text-[#2060C6] text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://whatsapp.com/channel/0029VbDDMu884Om5qL1beh0D"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#2060C6] hover:bg-[#1a4fa0] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
        >
          Join Echo
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#000B26]/60 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#000B26]/8 px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Story', id: 'story' },
            { label: 'How It Works', id: 'how-it-works' },
            { label: 'Demo', id: 'demo' },
            { label: 'Roadmap', id: 'roadmap' },
            { label: 'Tech Stack', id: 'tech-stack' },
            { label: 'Tracks', id: 'hackathon-tracks' },
            { label: 'Team', id: 'team' },
            { label: 'Community', id: 'community' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#000B26]/60 hover:text-[#2060C6] text-sm font-medium text-left transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://whatsapp.com/channel/0029VbDDMu884Om5qL1beh0D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2060C6] text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer whitespace-nowrap w-fit"
          >
            Join Echo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
