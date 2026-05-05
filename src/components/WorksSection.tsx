import Link from 'next/link';
import { works } from '@/lib/data';
import SectionTitle from './SectionTitle';
import MotionWrapper from './MotionWrapper';

export default function WorksSection() {
  const [featured, second, third] = works;

  return (
    <section className="bg-[#F7F3EA] py-24 md:py-36">
      <div className="container-xl">
        <div className="flex items-end justify-between mb-14">
          <MotionWrapper>
            <SectionTitle en="Works" ja="施工事例" />
          </MotionWrapper>
          <Link
            href="/works"
            className="hidden sm:inline-flex text-[11px] tracking-[0.22em] uppercase text-[#8A6A43] border-b border-[#8A6A43]/60 pb-px hover:text-[#6d5234] transition-colors"
          >
            all works
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-6">
          {featured && (
            <MotionWrapper>
              <Link href={featured.href} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex gap-2 mb-3">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-[9px] border border-[#E5DED2] px-2.5 py-1 text-[#6B6259] tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-[#1F2933] group-hover:text-[#8A6A43] transition-colors mb-2 tracking-wide">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-[#6B6259] leading-[1.9] max-w-md">{featured.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2.5 text-[11px] text-[#8A6A43] tracking-[0.18em] uppercase">
                    read more <span className="w-6 h-px bg-[#8A6A43]" />
                  </span>
                </div>
              </Link>
            </MotionWrapper>
          )}

          <div className="flex flex-col gap-8">
            {[second, third].filter(Boolean).map((work, i) => (
              work && (
                <MotionWrapper key={work.id} delay={(i + 1) * 0.1}>
                  <Link href={work.href} className="group flex gap-4 items-start">
                    <div className="shrink-0 w-28 md:w-32 aspect-[3/2] overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {work.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[9px] border border-[#E5DED2] px-1.5 py-0.5 text-[#6B6259]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm font-medium text-[#1F2933] group-hover:text-[#8A6A43] transition-colors leading-snug mb-1.5">
                        {work.title}
                      </h3>
                      <p className="text-xs text-[#6B6259] line-clamp-2 leading-[1.8]">
                        {work.description}
                      </p>
                    </div>
                  </Link>
                </MotionWrapper>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
