import Link from 'next/link';
import { newsItems } from '@/lib/data';
import SectionTitle from './SectionTitle';
import MotionWrapper from './MotionWrapper';

export default function NewsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-xl">
        <div className="flex items-end justify-between mb-10">
          <MotionWrapper>
            <SectionTitle en="News" ja="お知らせ" />
          </MotionWrapper>
          <Link
            href="/news"
            className="hidden sm:inline-flex text-[11px] tracking-[0.22em] uppercase text-[#8A6A43] hover:text-[#6d5234] transition-colors border-b border-[#8A6A43]/60 pb-px"
          >
            view more
          </Link>
        </div>

        <div className="divide-y divide-[#E5DED2]">
          {newsItems.map((item, i) => (
            <MotionWrapper key={item.id} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 hover:pl-1 transition-all duration-300"
              >
                <span className="shrink-0 text-xs text-[#6B6259] font-display tracking-wide w-24">
                  {item.date}
                </span>
                <span className="shrink-0 text-[10px] tracking-[0.12em] border border-[#E5DED2] px-2.5 py-1 text-[#6B6259] w-fit">
                  {item.category}
                </span>
                <span className="text-sm text-[#2D2A26] group-hover:text-[#8A6A43] transition-colors leading-relaxed">
                  {item.title}
                </span>
              </Link>
            </MotionWrapper>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/news"
            className="text-[11px] tracking-[0.22em] uppercase text-[#8A6A43] border-b border-[#8A6A43]/60 pb-px"
          >
            view more
          </Link>
        </div>
      </div>
    </section>
  );
}
