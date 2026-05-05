import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Link from 'next/link';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/reform/painting'],
};

export default function PaintingPage() {
  const paintingTypes = [
    {
      title: '外壁塗装',
      description: '外壁の塗り替えで、家の見た目を新しく。長く美しさを保ちます。',
    },
    {
      title: '屋根塗装',
      description: '屋根の塗装で、防水性を向上。雨漏り防止にも効果的です。',
    },
    {
      title: '木部塗装',
      description: 'ウッドデッキや木製ドアなど、木部の塗装を施工。',
    },
    {
      title: 'シーリング工事',
      description: 'コーキング・シーリング材の交換で、塗装の効果をさらに向上。',
    },
  ];

  const paintTypes = [
    {
      name: 'アクリル塗装',
      lifespan: '5～7年',
      cost: '予算重視',
      features: '価格が安く、塗り替えが気軽。',
    },
    {
      name: 'ウレタン塗装',
      lifespan: '8～10年',
      cost: '中程度',
      features: '耐水性が良く、光沢が続く。',
    },
    {
      name: 'シリコン塗装',
      lifespan: '10～15年',
      cost: '中～高',
      features: '耐候性が良く、最も普及している。',
    },
    {
      name: 'フッ素塗装',
      lifespan: '15～20年',
      cost: '高い',
      features: '耐久性が非常に高い。',
    },
  ];

  return (
    <>
      <Breadcrumb current="/reform/painting" />
      
      <HeroBanner
        title="塗装"
        subtitle="外壁・屋根の手入れ"
        description="見た目を整えるだけでなく、雨風や紫外線から家を守るための塗装を考えます。"
        variant="small"
      />

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto mb-12">
          <h2>塗装工事とは</h2>
          <p>
            塗装工事は、外壁や屋根を塗料で塗り替える工事です。見た目のリフレッシュだけでなく、防水性の向上、紫外線からの保護、耐候性の確保など、住宅を守る重要な役割を担っています。
          </p>
          <p>
            定期的な塗装メンテナンスにより、住宅の寿命を大幅に延ばすことができます。
          </p>
        </div>

        <div className="grid_auto">
          {paintingTypes.map((type) => (
            <Card key={type.title} variant="elevated">
              <h3 className="text-lg font-bold mb-3">{type.title}</h3>
              <p className="text-muted">{type.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="塗料の種類と選び方" variant="alt">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b-2 border-secondary-900">
              <tr>
                <th className="text-left p-4 font-bold">塗料</th>
                <th className="text-left p-4 font-bold">耐用年数</th>
                <th className="text-left p-4 font-bold">価格帯</th>
                <th className="text-left p-4 font-bold">特徴</th>
              </tr>
            </thead>
            <tbody>
              {paintTypes.map((paint) => (
                <tr key={paint.name} className="border-b border-secondary-900/20">
                  <td className="p-4 font-medium">{paint.name}</td>
                  <td className="p-4">{paint.lifespan}</td>
                  <td className="p-4">{paint.cost}</td>
                  <td className="p-4 text-muted">{paint.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid_auto-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">塗装工事の流れ</h2>
            <div className="space-y-4 mb-8">
              {[
                { step: 1, title: '現地調査', desc: '塗装の劣化状況を確認します。' },
                { step: 2, title: '足場設置', desc: '安全に工事を進めるため、足場を組みます。' },
                { step: 3, title: '高圧洗浄', desc: 'カビやコケを除去します。' },
                { step: 4, title: 'シーリング工事', desc: 'ひび割れやシーリング材の交換を行います。' },
                { step: 5, title: '下地処理', desc: 'パテやシーラーで下地を整えます。' },
                { step: 6, title: '塗装施工', desc: '下塗り・中塗り・上塗りを行います。' },
                { step: 7, title: '足場解体', desc: '塗装完了後、足場を解体します。' },
                { step: 8, title: 'お引き渡し', desc: '最終確認後、アフターサービスのご説明をいたします。' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <span className="w-8 h-8 bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {item.step}
                  </span>
                  <div className="pt-1">
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact">
              <Button size="lg">
                塗装のご相談
              </Button>
            </Link>
          </div>
          <figure className="image-frame aspect-[4/3]">
            <img src="/images/hero-exterior.jpg" alt="外壁や屋根の塗装相談を想定した仮写真" />
          </figure>
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="paper-panel border-l-4 border-primary-600 p-6">
            <h3 className="font-bold mb-2">塗装の時期の目安</h3>
            <p className="text-sm text-muted">
              塗装の周期は、塗料の種類や立地条件により異なりますが、一般的には7～15年ごとが目安です。外壁のひび割れやチョーキング現象が見られたら、塗装のご検討をお勧めします。
            </p>
          </div>
          <Card variant="outline">
            <h3 className="font-bold mb-3">無料で現地調査いたします</h3>
            <p className="text-sm text-muted mb-4">
              外壁や屋根の劣化状況を確認し、最適な塗料と工法をご提案させていただきます。
            </p>
            <Link href="/contact">
              <Button variant="primary">
                現地調査の申し込み
              </Button>
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}
