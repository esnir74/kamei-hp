export interface PageMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogImage?: string;
  keywords?: string[];
  publishedAt?: Date;
  updatedAt?: Date;
}

export const pagesMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'ホーム | 有限会社 亀井工務店',
    description: '神奈川県平塚市の工務店。小さな修繕、リフォーム、塗装、新築まで、家の状態を見ながら相談できます。',
    keywords: ['工務店', 'リフォーム', '新築', '平塚', '神奈川'],
  },
  '/company': {
    title: '会社概要 | 有限会社 亀井工務店',
    description: '有限会社 亀井工務店の企業情報。創業から現在まで、地域の家づくりを支えてきた実績をご紹介します。',
    keywords: ['会社概要', '企業情報'],
  },
  '/team': {
    title: 'スタッフ紹介 | 有限会社 亀井工務店',
    description: '亀井工務店のスタッフをご紹介。経験豊かなメンバーが、あなたの家づくりをサポートします。',
    keywords: ['スタッフ', 'チーム'],
  },
  '/subsidies': {
    title: '補助金情報 | 有限会社 亀井工務店',
    description: '住宅リフォーム補助金・助成制度について、工事内容に合わせて確認します。制度は年度ごとに変わります。',
    keywords: ['補助金', '助成金', 'リフォーム補助'],
  },
  '/brand/hokkori': {
    title: 'ほっこりな家 | 有限会社 亀井工務店',
    description: 'ほっこりな家 - 亀井工務店の新築住宅ブランド。暖かみのある、家族を大切にする家づくりの提案。',
    keywords: ['新築', 'ほっこりな家'],
  },
  '/how-to-build': {
    title: '家づくりのステップ | 有限会社 亀井工務店',
    description: '家づくりの流れを、分かりやすくご説明します。相談から完成まで、各ステップを解説。',
    keywords: ['家づくり', 'ステップ', 'プロセス'],
  },
  '/reform': {
    title: 'リフォーム | 有限会社 亀井工務店',
    description: 'リフォームのことなら亀井工務店にお任せください。水廻りから全体改修まで、幅広いリフォーム実績があります。',
    keywords: ['リフォーム', '改修', 'リノベーション'],
  },
  '/works': {
    title: '施工事例 | 有限会社 亀井工務店',
    description: '亀井工務店の施工事例をご紹介。新築、リフォーム、塗装など、様々なプロジェクトの施工実績をご覧ください。',
    keywords: ['施工事例', '実績', 'ポートフォリオ'],
  },
  '/reform/super-wall': {
    title: 'スーパーウォール工法リフォーム | 有限会社 亀井工務店',
    description: 'スーパーウォール工法を活用したリフォーム。高断熱・高気密で、快適で省エネルギーな住環境を実現します。',
    keywords: ['スーパーウォール', '断熱', '高気密', 'リフォーム'],
  },
  '/reform/exterior': {
    title: '外まわりリフォーム | 有限会社 亀井工務店',
    description: '外壁、屋根、門周りなど、外まわりのリフォームも対応。家全体の見た目を新しく。',
    keywords: ['外壁', '屋根', '外装', 'リフォーム'],
  },
  '/reform/painting': {
    title: '塗装 | 有限会社 亀井工務店',
    description: '外壁塗装、屋根塗装など、塗装工事のことはお任せください。長く美しく保つ塗装をご提案します。',
    keywords: ['塗装', '外壁塗装', '屋根塗装'],
  },
  '/news': {
    title: 'ニュース・イベント | 有限会社 亀井工務店',
    description: '亀井工務店のイベント情報やお知らせをご紹介。最新情報をチェック。',
    keywords: ['ニュース', 'イベント', 'お知らせ'],
  },
  '/contact': {
    title: 'お問合せ | 有限会社 亀井工務店',
    description: 'ご不明な点やご質問は、こちらのフォームからお気軽にお問い合わせください。',
    keywords: ['お問合せ', 'お問い合わせ', '連絡'],
  },
};

export interface WorkItem {
  id: string;
  title: string;
  category: 'reform' | 'new-build' | 'painting';
  description: string;
  date: string;
  image?: string;
  before?: string;
  after?: string;
  images?: string[];
  tags?: string[];
}

export const workExamples: WorkItem[] = [
  {
    id: 'work-001',
    title: '段差を無くし、畳からフローリングへ',
    category: 'reform',
    description: 'つまづいてしまって危ない段差を無くし、お手入れの楽なフローリングへのリフォーム。',
    date: '2025-01',
    image: '/images/work-living.jpg',
    tags: ['フローリング', '段差解消'],
  },
  {
    id: 'work-002',
    title: '和室から洋室へ',
    category: 'reform',
    description: '築40年の和室を、クローゼット付きの洋室に改修。畳をフローリングに変更し、明るく使いやすい空間に生まれ変わりました。',
    date: '2024-12',
    image: '/images/work-room.jpg',
    tags: ['フローリング', '床工事', 'クローゼット'],
  },
  {
    id: 'work-003',
    title: 'トイレリフォーム',
    category: 'reform',
    description: 'シンプルなトイレにアクセントクロスを施し、洗練された空間に改修。',
    date: '2024-11',
    image: '/images/contact-room.jpg',
    tags: ['トイレ', 'インテリア'],
  },
  {
    id: 'work-004',
    title: 'お店リフォーム',
    category: 'reform',
    description: '以前は薬局だった店舗を、ワンちゃんも入れるカフェにリフォーム。',
    date: '2024-10',
    image: '/images/detail-light.jpg',
    tags: ['店舗改修', 'カフェ'],
  },
];
