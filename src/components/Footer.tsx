import Link from 'next/link';
import { siteConfig } from '@/data/site';

const footerNav = {
  service: [
    { href: '/brand/hokkori', label: '注文住宅' },
    { href: '/reform', label: 'リフォーム' },
    { href: '/reform/super-wall', label: 'スーパーウォール工法' },
    { href: '/reform/exterior', label: '外まわりリフォーム' },
    { href: '/reform/painting', label: '塗装' },
    { href: '/works', label: '施工事例' },
  ],
  company: [
    { href: '/company', label: '会社概要' },
    { href: '/team', label: 'スタッフ紹介' },
    { href: '/how-to-build', label: '家づくりのステップ' },
    { href: '/subsidies', label: '補助金情報' },
    { href: '/news', label: 'お知らせ' },
    { href: '/contact', label: 'お問い合わせ' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1B]">
      <div className="container-xl">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 border border-[#8A6A43]/40 flex items-center justify-center">
                <span className="font-display text-[#8A6A43] text-base font-light italic">K</span>
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-[#E5DED2]/80">亀井工務店</p>
                <p className="text-[9px] tracking-[0.12em] text-[#6B6259] font-display mt-0.5">KAMEI KOUMUTEN</p>
              </div>
            </div>

            <p className="text-sm text-[#6B6259] leading-[2.1] max-w-xs mb-8">
              大正5年創業。平塚市豊田本郷を拠点に、神奈川県全域で新築・リフォーム・塗装に対応。100年の信頼とともに、笑顔と心豊かな暮らしに貢献します。
            </p>

            <div className="space-y-2 text-sm mb-8">
              <p className="flex items-baseline gap-3">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A6A43] font-display">Tel</span>
                <a
                  href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`}
                  className="text-[#6B6259] hover:text-[#E5DED2] transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </p>
              <p className="text-xs text-[#6B6259]/70 pl-8">FAX: {siteConfig.company.fax}</p>
              <p className="text-xs text-[#6B6259]/70 pl-8">8:00〜18:00（日祝定休）</p>
            </div>

            <div className="flex gap-2">
              {[
                { href: siteConfig.social.instagram, label: 'Instagram' },
                { href: siteConfig.social.youtube, label: 'YouTube' },
                { href: siteConfig.social.line, label: 'LINE' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] tracking-[0.12em] border border-[#8A6A43]/25 px-3 py-1.5 text-[#6B6259] hover:border-[#8A6A43] hover:text-[#8A6A43] transition-all duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#8A6A43] mb-7 font-display">Service</p>
            <ul className="space-y-3.5">
              {footerNav.service.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-[#6B6259] hover:text-[#E5DED2] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#8A6A43] mb-7 font-display">Company</p>
            <ul className="space-y-3.5">
              {footerNav.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-[#6B6259] hover:text-[#E5DED2] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-[#6B6259]/70">© 2017–2026 有限会社 亀井工務店</p>
          <p className="text-[11px] text-[#6B6259]/40 tracking-[0.18em] font-display">KAMEI KOUMUTEN</p>
        </div>
      </div>
    </footer>
  );
}
