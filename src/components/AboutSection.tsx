import Link from 'next/link';
import MotionWrapper from './MotionWrapper';

export default function AboutSection() {
  return (
    <section className="bg-[#F7F3EA] py-24 md:py-36 overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <MotionWrapper>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-5 font-medium font-display text-[#8A6A43]">
                About us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-snug text-[#1F2933] mb-8">
                100年、地域とともに<br />
                歩み続けた家づくり。
              </h2>
              <p className="text-sm text-[#6B6259] leading-[2.1] max-w-sm mb-4">
                大正5年の創業から100年超。曾祖父の代から平塚の地で家づくりを続けてきました。信用第一を基本に、建てた後の10年・20年経ってからも「よかった」と言われる家を目指しています。
              </p>
              <p className="text-sm text-[#6B6259] leading-[2.1] max-w-sm">
                新築・リフォーム・塗装まで、設計から竣工後のメンテナンスまで一貫して対応。お客様の気持ちに寄り添い、笑顔と心豊かな暮らしに貢献します。
              </p>
              <Link
                href="/company"
                className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[#8A6A43] group"
              >
                <span>私たちについて</span>
                <span className="w-8 h-px bg-[#8A6A43] group-hover:w-14 transition-all duration-400" />
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/new-house.jpg"
                  alt="家づくりのこだわり"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 border border-[#8A6A43]/20" />
              <div className="absolute -top-5 -right-5 w-12 h-12 border border-[#E5DED2]" />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
