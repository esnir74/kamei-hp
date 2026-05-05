'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site';

const navItems = [
  { href: '/company', label: 'About' },
  { href: '/brand/hokkori', label: 'Hokkori' },
  { href: '/works', label: 'Works' },
  { href: '/reform', label: 'Reform' },
  { href: '/subsidies', label: 'Subsidy' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-[0_1px_0_rgba(229,222,210,0.8)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-xl">
          <div className="flex h-[68px] items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 border border-[#8A6A43]/50 flex items-center justify-center transition-colors group-hover:border-[#8A6A43]">
                <span className="font-display text-[#8A6A43] text-base font-light italic">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-xs tracking-[0.18em] font-medium transition-colors ${scrolled ? 'text-[#1F2933]' : 'text-[#1F2933]'}`}>
                  亀井工務店
                </span>
                <span className="text-[9px] tracking-[0.12em] text-[#6B6259] font-display mt-0.5">
                  KAMEI KOUMUTEN
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] tracking-[0.18em] font-medium transition-colors hover:text-[#8A6A43] ${
                    scrolled ? 'text-[#2D2A26]' : 'text-[#2D2A26]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`}
                className="text-[11px] tracking-wider text-[#6B6259] hover:text-[#8A6A43] transition-colors"
              >
                {siteConfig.company.phone}
              </a>
              <Link
                href="/contact"
                className="border border-[#8A6A43] px-5 py-2 text-[11px] tracking-[0.15em] text-[#8A6A43] hover:bg-[#8A6A43] hover:text-white transition-all duration-300"
              >
                お問い合わせ
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#2D2A26] hover:text-[#8A6A43] transition-colors"
              aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#FAF8F3] flex flex-col pt-[68px]"
          >
            <div className="flex flex-col h-full px-8 py-10">
              <nav className="flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-2xl text-[#2D2A26] hover:text-[#8A6A43] transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-10 border-t border-[#E5DED2] space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-[#8A6A43] text-center py-4 text-sm tracking-[0.15em] text-white hover:bg-[#7a5c38] transition-colors"
                >
                  お問い合わせ
                </Link>
                <a
                  href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`}
                  className="block w-full text-center py-4 text-sm text-[#6B6259] border border-[#E5DED2] hover:border-[#8A6A43] transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
