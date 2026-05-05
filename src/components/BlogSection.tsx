import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import SectionTitle from './SectionTitle';
import MotionWrapper from './MotionWrapper';

export default function BlogSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-xl">
        <div className="flex items-end justify-between mb-14">
          <MotionWrapper>
            <SectionTitle en="Column" ja="住まいのコラム" />
          </MotionWrapper>
          <Link
            href="/news"
            className="hidden sm:inline-flex text-[11px] tracking-[0.22em] uppercase text-[#8A6A43] border-b border-[#8A6A43]/60 pb-px hover:text-[#6d5234] transition-colors"
          >
            view more
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <MotionWrapper key={post.id} delay={i * 0.1}>
              <Link href={post.href} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:brightness-105 group-hover:scale-102 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] border border-[#E5DED2] px-2.5 py-1 text-[#6B6259] tracking-[0.1em]">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#6B6259] font-display">{post.date}</span>
                </div>
                <h3 className="text-sm font-medium text-[#2D2A26] leading-snug group-hover:text-[#8A6A43] transition-colors">
                  {post.title}
                </h3>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
