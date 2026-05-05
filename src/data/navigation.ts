export interface NavItem {
  href: string;
  label: string;
  description?: string;
  children?: NavItem[];
  icon?: string;
}

export const mainNavigation: NavItem[] = [
  {
    href: '/',
    label: 'ホーム',
    description: 'トップページ',
  },
  {
    href: '/company',
    label: '会社情報',
    children: [
      { href: '/company', label: '会社概要' },
      { href: '/team', label: 'スタッフ紹介' },
      { href: '/subsidies', label: '補助金情報' },
    ],
  },
  {
    href: '/brand/hokkori',
    label: 'ほっこりな家',
    description: '新築住宅ブランド',
  },
  {
    href: '/how-to-build',
    label: '家づくりのステップ',
    description: '家づくりのプロセス',
  },
  {
    href: '/reform',
    label: 'リフォーム',
    children: [
      { href: '/reform', label: 'リフォーム一覧' },
      { href: '/works', label: '施工事例' },
      { href: '/reform/super-wall', label: 'スーパーウォール工法' },
      { href: '/reform/exterior', label: '外まわりリフォーム' },
      { href: '/reform/painting', label: '塗装' },
    ],
  },
  {
    href: '/news',
    label: 'ニュース・イベント',
    description: 'イベント情報・お知らせ',
  },
  {
    href: '/contact',
    label: 'お問合せ',
    description: 'お気軽にご連絡ください',
  },
];

export const breadcrumbMap: Record<string, { label: string; parent?: string }> = {
  '/': { label: 'ホーム' },
  '/company': { label: '会社概要', parent: '/' },
  '/team': { label: 'スタッフ紹介', parent: '/company' },
  '/subsidies': { label: '補助金情報', parent: '/' },
  '/brand/hokkori': { label: 'ほっこりな家', parent: '/' },
  '/how-to-build': { label: '家づくりのステップ', parent: '/' },
  '/reform': { label: 'リフォーム', parent: '/' },
  '/works': { label: '施工事例', parent: '/reform' },
  '/reform/super-wall': { label: 'スーパーウォール工法', parent: '/reform' },
  '/reform/exterior': { label: '外まわりリフォーム', parent: '/reform' },
  '/reform/painting': { label: '塗装', parent: '/reform' },
  '/news': { label: 'ニュース・イベント', parent: '/' },
  '/contact': { label: 'お問合せ', parent: '/' },
};
