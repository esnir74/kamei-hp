'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#1E1E1B]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: 'easeOut' }}
      >
        <img
          src="/images/hero-exterior.jpg"
          alt="亀井工務店の施工事例"
          className="w-full h-full object-cover opacity-65"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1B]/85 via-[#1E1E1B]/25 to-[#1E1E1B]/10" />

      <div className="relative z-10 container-xl w-full pb-24 md:pb-32 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#E5DED2]/60 mb-7 font-display"
        >
          Kamei Koumuten — Since 1916, Hiratsuka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.15] tracking-wide mb-7 max-w-3xl"
        >
          機能と美が<br />
          棲んでいる住まい。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-sm md:text-base text-[#E5DED2]/75 max-w-sm leading-[2] mb-12"
        >
          大正5年創業、平塚の地で100年。<br />
          お客様の気持ちに寄り添い、笑顔と心豊かな暮らしに貢献します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-[#8A6A43] px-8 py-4 text-sm tracking-[0.15em] text-white hover:bg-[#9B7A4E] transition-all duration-300 group"
          >
            家づくりを相談する
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center justify-center border border-white/40 px-8 py-4 text-sm tracking-[0.15em] text-white/90 hover:bg-white/8 transition-all duration-300"
          >
            施工事例を見る
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      >
        <span className="text-[9px] tracking-[0.35em] text-white/40 uppercase font-display">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 text-white/40" />
      </motion.div>
    </section>
  );
}
