import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const sources = [
  {
    label: 'ICRC global cases',
    href: 'https://www.icrc.org/en/statement/icrc-registering-unprecedented-numbers-missing-persons',
  },
  {
    label: 'ICRC Nigeria',
    href: 'https://www.icrc.org/en/article/nigeria-families-missing-meet',
  },
  {
    label: 'FBI NCIC 2024',
    href: 'https://www.fbi.gov/file-repository/cjis/2024-ncic-missing-and-unidentified-person-statistics.pdf/view',
  },
  {
    label: 'FIJ Nigeria data gap',
    href: 'https://fij.ng/article/we-checked-polices-naptips-data-repositories-for-missing-persons-they-were-empty-useless/',
  },
];

const StorySection = () => {
  const header = useScrollAnimation();
  const image = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });
  const card = useScrollAnimation({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="story" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div
          ref={header.ref}
          className={`flex justify-center mb-12 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-[#0DC298] text-xs font-semibold tracking-widest uppercase border border-[#0DC298]/20 rounded-full px-4 py-2 bg-[#0DC298]/5">
            The Missing-Person Response Gap
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div
            ref={image.ref}
            className={`relative rounded-3xl overflow-hidden transition-all duration-800 delay-100 ${image.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDuration: '800ms' }}
          >
            <img
              src="https://storage.readdy-site.link/project_files/4595eb8c-149c-49e9-9439-5e04fb75c157/c5c38919-18c0-4e00-8d4d-1b44056299c2_Uduaksforsttweet.jpg?v=44abe827e4bd75f224c82cc5c68af4ae"
              alt="Social media missing-person alert that inspired Echo's response model"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">A reference point, not the whole story</p>
              <p className="text-white font-medium text-sm leading-relaxed">
                Hiny Umoren's case showed what happens when a distress signal becomes public too late.
              </p>
            </div>
          </div>

          <div
            ref={card.ref}
            className={`relative bg-[#F8F9FF] border border-[#000B26]/8 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-800 delay-200 ${card.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDuration: '800ms', transitionDelay: '150ms' }}
          >
            <div className="text-[#0DC298]/20 text-8xl font-serif leading-none mb-4 select-none">&ldquo;</div>

            <div className="flex-1">
              <h2 className="text-[#000B26] text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                From scattered posts to coordinated response
              </h2>

              <div className="space-y-5 text-[#000B26]/55 text-base leading-relaxed">
                <p>
                  Missing-person alerts often begin as screenshots, voice notes, and urgent captions scattered across WhatsApp, X, Instagram, and Facebook. People want to help, but the signal is fragmented: last-known location in one post, contact details in another, a photo in a group chat, and no clear feedback loop.
                </p>
                <p>
                  The scale is real. The ICRC reported nearly 255,000 active missing-person cases globally after more than 56,000 new cases in 2024. In Nigeria, the ICRC has recorded around 24,000 missing persons since 2014 in the northeast alone. The FBI's 2024 NCIC report listed 93,447 active missing-person records in the United States.
                </p>
                <p>
                  Echo is built for the earlier, messier moment before a case becomes another plea online. It captures context, routes it to trusted people, escalates when nobody responds, and turns the Echo Feed into a share-ready community signal that can move across platforms with the same facts intact.
                </p>
                <p>
                  Hiny Umoren's case remains one reference point for this vision: the signal existed, but the response system was too slow. Echo is our attempt to make that gap smaller for anyone who may be becoming unreachable, unsafe, or missing.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#000B26]/8">
              <p className="text-[#0DC298] text-xl md:text-2xl font-light italic leading-snug mb-4">
                &ldquo;A missing-person signal should not have to fight the algorithm alone.&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                {sources.map((source) => (
                  <a
                    key={source.label}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2060C6] text-xs font-medium bg-[#2060C6]/8 border border-[#2060C6]/15 rounded-full px-3 py-1 hover:bg-[#2060C6]/12 transition-colors"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
