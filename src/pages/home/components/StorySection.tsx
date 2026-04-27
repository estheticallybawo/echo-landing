import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StorySection = () => {
  const header = useScrollAnimation();
  const image = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const card = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="story" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          ref={header.ref}
          className={`flex justify-center mb-12 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#0DC298] text-xs font-semibold tracking-widest uppercase border border-[#0DC298]/20 rounded-full px-4 py-2 bg-[#0DC298]/5">
            The Echo Story
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div
            ref={image.ref}
            className={`relative rounded-3xl overflow-hidden transition-all duration-800 delay-100 ${image.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDuration: '800ms' }}
          >
            <img
              src="https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/c5c38919-18c0-4e00-8d4d-1b44056299c2_Uduaksforsttweet.jpg?v=44abe827e4bd75f224c82cc5c68af4ae"
              alt="Hiny Umoren , Why Echo Exists"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Inspired by a true story</p>
              <p className="text-white font-medium text-sm leading-relaxed">
                Hiny Umoren. A young woman who reached out for help , and was never answered in time.
              </p>
            </div>
          </div>

          {/* Right: Story Card */}
          <div
            ref={card.ref}
            className={`relative bg-[#F8F9FF] border border-[#000B26]/8 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-800 delay-200 ${card.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDuration: '800ms', transitionDelay: '150ms' }}
          >
            <div className="text-[#0DC298]/20 text-8xl font-serif leading-none mb-4 select-none">&ldquo;</div>

            <div className="flex-1">
              <h2 className="text-[#000B26] text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                Why Echo Exists
              </h2>

              <div className="space-y-5 text-[#000B26]/55 text-base leading-relaxed">
                <p>
                  On April 27, 2021, Iniobong &ldquo;Hiny&rdquo; Umoren tweeted from Uyo, Akwa Ibom State: <em className="text-[#000B26]/70">&ldquo;Please, I&apos;m really in need of a job... my location is Uyo, I&apos;m creative, a fast learner. CV available on request.&rdquo;</em> A reply came quickly, a supposed job offer at a construction company.
                </p>
                <p>
                  She followed up. She went. She was lured to a house in Uruan Local Government Area. Her friend Happiness received a one-second audio clip on WhatsApp, then called back and heard screaming.
                </p>
                <p>
                  By Sunday, May 2nd, Hiny was found dead. Buried in a shallow grave. Two suspects were arrested. The hashtag <strong className="text-[#0B0F1A]/80">#FindHinyUmoren</strong> had gone viral, but the help came too late.
                </p>
                <p>
                  She had reached out. Publicly. Desperately. The signal was there, but no system existed to turn that signal into a real-time safety net. Echo was built to close that gap: between a cry for help and the people who can actually answer it.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#000B26]/8">
              <p className="text-[#0DC298] text-xl md:text-2xl font-light italic leading-snug mb-3">
                &ldquo;The signal was there. The system wasn&apos;t.&rdquo;
              </p>
              <p className="text-[#000B26]/35 text-sm">
                Echo exists so every cry for help reaches someone in time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
