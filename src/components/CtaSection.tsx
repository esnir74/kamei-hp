import Link from 'next/link';
import { siteConfig } from '@/data/site';
import MotionWrapper from './MotionWrapper';

export default function CtaSection() {
  return (
    <section className="bg-[#1E1E1B] py-24 md:py-36">
      <div className="container-xl">
        <MotionWrapper>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#E5DED2]/40 mb-7 font-display">
              Contact
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-snug mb-6 tracking-wide">
              まずは、お気軽に<br />
              ご相談ください。
            </h2>
            <p className="text-sm text-[#E5DED2]/60 leading-[2] mb-12 max-w-sm mx-auto">
              現地調査・相談会は無料です。新築・リフォーム・塗装まで、内容が固まっていなくても構いません。まずはお電話かフォームからどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8A6A43] px-10 py-4 text-sm tracking-[0.15em] text-white hover:bg-[#9B7A4E] transition-all duration-300 group"
              >
                お問い合わせ
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/20 px-10 py-4 text-sm tracking-[0.15em] text-white/70 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                資料請求
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-white/8">
              <p className="text-[10px] text-[#E5DED2]/40 mb-3 tracking-[0.3em] uppercase font-display">Tel</p>
              <a
                href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`}
                className="font-display text-2xl md:text-3xl text-white/80 tracking-[0.12em] hover:text-[#8A6A43] transition-colors"
              >
                {siteConfig.company.phone}
              </a>
              <p className="text-[11px] text-[#E5DED2]/35 mt-3 tracking-wide">8:00〜18:00（日祝定休）</p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
