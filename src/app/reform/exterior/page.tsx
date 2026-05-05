import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Link from 'next/link';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/reform/exterior'],
};

export default function ExteriorPage() {
  const services = [
    {
      title: '外壁工事',
      description: '外壁の張替え、補修、断熱改修など、外壁全般のリフォームに対応。',
    },
    {
      title: '屋根工事',
      description: '屋根の葺き替え、補修、遮熱屋根への改修など。',
    },
    {
      title: '窓・ドア交換',
      description: '古い窓・ドアを新しいものに交換し、断熱性・気密性を向上。',
    },
    {
      title: '玄関リフォーム',
      description: 'バリアフリー対応の段差解消、ドアの交換など。',
    },
    {
      title: 'バルコニー・ポーチ',
      description: 'バルコニーの防水工事、ポーチの段差解消など。',
    },
    {
      title: 'エクステリア（庭・門）',
      description: '庭、門、フェンスなどの外構工事に対応。',
    },
  ];

  return (
    <>
      <Breadcrumb current="/reform/exterior" />
      
      <HeroBanner
        title="外まわりリフォーム"
        subtitle="外壁・屋根・玄関まわり"
        description="家の外まわりは、見た目だけでなく雨風から住まいを守る大切な部分です。"
        variant="small"
      />

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto mb-12">
          <h2>外まわりリフォームの重要性</h2>
          <p>
            家の外観は、第一印象を左右する大切な要素です。また、外壁や屋根は、雨風から家を守る重要な役割も担っています。
          </p>
          <p>
            外まわりのリフォームは、見た目の美しさだけでなく、住宅の耐久性と機能性を向上させるための重要な工事です。
          </p>
        </div>

        <div className="grid_auto">
          {services.map((service) => (
            <Card key={service.title} variant="elevated">
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="こんなお悩みありませんか？" variant="alt">
        <div className="max-w-3xl mx-auto grid_auto">
          {[
            '外壁の色褪せや汚れが目立つ',
            'チョーキング現象が起きている',
            '屋根からの雨漏りがある',
            '古い窓で断熱性が悪い',
            '玄関の段差が多くて不便',
            'エクステリアが古く見える',
          ].map((item) => (
            <Card key={item} variant="outline">
              <p className="flex gap-3">
                <span className="text-primary-600 font-bold">!</span>
                <span>{item}</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid_auto-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">外まわりリフォームで得られるメリット</h2>
            <ul className="space-y-4 mb-8">
              {[
                '家全体の見た目が新しくなる',
                '老朽化による雨漏りなどのトラブルが解決',
                '断熱性・気密性が向上して快適に',
                'メンテナンス負担が減る',
                '住宅の資産価値が向上',
                'バリアフリー対応で安全に',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button size="lg">
                外まわりリフォームのご相談
              </Button>
            </Link>
          </div>
          <figure className="image-frame aspect-[4/3]">
            <img src="/images/hero-exterior.jpg" alt="外まわりリフォームの仮写真" />
          </figure>
        </div>
      </Section>

      <Section variant="alt">
        <div className="paper-panel border-l-4 border-primary-600 p-8 max-w-3xl">
          <h3 className="text-xl font-bold mb-4">外壁・屋根工事の周期目安</h3>
          <div className="space-y-3 text-sm">
            <p><span className="font-medium">塗装:</span> 7～10年ごと</p>
            <p><span className="font-medium">屋根:</span> 10～15年ごと</p>
            <p><span className="font-medium">外壁張替:</span> 20～30年ごと</p>
          </div>
          <p className="text-xs text-muted mt-4">※ 建材の素材や環境により異なります。</p>
        </div>
      </Section>
    </>
  );
}
