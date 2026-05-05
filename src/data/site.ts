export const siteConfig = {
  name: '有限会社 亀井工務店',
  description: '神奈川県平塚市の工務店。住まいの修繕、リフォーム、塗装、新築まで、家の状態を見ながら相談できます。',
  url: 'https://www.kameikoumuten.co.jp',
  ogImage: 'https://www.kameikoumuten.co.jp/og-image.jpg',
  locale: 'ja-JP',
  
  company: {
    name: '有限会社 亀井工務店',
    phone: '0463-31-6372',
    fax: '0463-35-2589',
    email: 'info@kameikoumuten.co.jp',
    address: '〒254-0087 神奈川県平塚市豊田本郷1752',
    ceo: '亀井 雅明',
    founded: '大正5年7月',
  },
  
  social: {
    line: 'https://lin.ee/tY2zlos',
    instagram: 'https://www.instagram.com/kamei_koumuten/',
    youtube: 'https://www.youtube.com/channel/UCxRowqwFjMTIf1HiCc6Ircw',
  },
};

export const navLinks = [
  { href: '/', label: 'ホーム', main: true },
  { href: '/company', label: '会社概要', main: true },
  { href: '/team', label: 'スタッフ紹介', main: true },
  { href: '/subsidies', label: '補助金情報', main: true },
  { href: '/brand/hokkori', label: 'ほっこりな家', main: true },
  { href: '/reform', label: 'リフォーム', main: true },
  { href: '/works', label: '施工事例', main: true },
  { href: '/reform/super-wall', label: 'スーパーウォール工法', main: false, parent: '/reform' },
  { href: '/reform/exterior', label: '外まわりリフォーム', main: false, parent: '/reform' },
  { href: '/reform/painting', label: '塗装', main: false, parent: '/reform' },
  { href: '/how-to-build', label: '家づくりのステップ', main: true },
  { href: '/news', label: 'ニュース・イベント', main: true },
  { href: '/contact', label: 'お問合せ', main: true, highlight: true },
];
