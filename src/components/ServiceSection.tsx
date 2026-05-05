import Link from 'next/link';
import MotionWrapper from './MotionWrapper';

export default function ServiceSection() {
  return (
    <section className="relative h-[520px] md:h-[620px] overflow-hidden">
      <img
        src="/images/contact-room.jpg"
        alt="住まいの相談・サービス"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1B]/80 via-[#1E1E1B]/50 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container-xl">
          <MotionWrapper>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#E5DED2]/60 mb-5 font-display">
              Service
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-snug mb-6 max-w-lg tracking-wide">
              家づくりの<br />
              最初の一歩から。
            </h2>
            <p className="text-sm text-[#E5DED2]/75 leading-[2] max-w-sm mb-10">
              注文住宅・リフォーム・外壁塗装・断熱改修など、住まいのことは何でもご相談ください。相談会・現地調査は無料です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/brand/hokkori"
                className="inline-flex items-center justify-center bg-[#8A6A43] px-8 py-4 text-sm tracking-[0.14em] text-white hover:bg-[#9B7A4E] transition-all duration-300"
              >
                注文住宅を見る
              </Link>
              <Link
                href="/reform"
                className="inline-flex items-center justify-center border border-white/40 px-8 py-4 text-sm tracking-[0.14em] text-white/90 hover:bg-white/8 transition-all duration-300"
              >
                リフォームを見る
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
