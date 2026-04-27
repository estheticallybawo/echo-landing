const Footer = () => {
  return (
    <footer className="bg-[#000B26] border-t border-white/5 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <img
                src="https://static.readdy.ai/image/f8bc89d488b0ebdd78eefcee48d1d05e/c4d55ab777fff630d9e09cb5c764e6a1.png"
                alt="Echo Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              A personal safety AI that listens, understands, and activates help, ensuring no one is ever alone in a moment of danger.
            </p>
            <p className="text-[#0DC298] text-xs font-medium tracking-widest">#EchoCommunity</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Product</p>
              <ul className="space-y-3">
                {['How It Works', 'Demo', 'Privacy Policy', 'Open Source'].map((item) => (
                  <li key={item}>
                    <a href="#" rel="nofollow" className="text-white/40 hover:text-white/70 text-sm transition-colors cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Community</p>
              <ul className="space-y-3">
                {[
                { label: 'Join Echo', href: '#' },
                { label: 'Team', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Hackathon', href: 'https://www.kaggle.com/competitions/gemma-4-good-hackathon' },
              ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} rel="nofollow" className="text-white/40 hover:text-white/70 text-sm transition-colors cursor-pointer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3">
              {[
                { icon: 'ri-twitter-x-line', label: 'Twitter/X', href: 'https://x.com/Echo4all' },
                { icon: 'ri-github-line', label: 'GitHub', href: 'https://www.github.com/estheticallybawo/echo' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  rel="nofollow"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/8 hover:bg-[#2060C6]/15 hover:border-[#2060C6]/30 text-white/50 hover:text-[#2060C6] transition-all duration-200 cursor-pointer"
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © 2026 Echo. Built for the Gemma 4 Good · Kaggle × Google Hackathon.
          </p>
          <p className="text-white/20 text-xs italic">Trusted by early supporters</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
