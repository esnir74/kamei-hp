import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Link from 'next/link';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/reform/super-wall'],
};

export default function SuperWallPage() {
  const benefits = [
    {
      title: '高い断熱性能',
      description: '冬は暖かく、夏は涼しい。季節を感じながら快適に過ごせます。',
    },
    {
      title: '高気密性',
      description: '隙間風がなく、室内の温度を一定に保ち、より快適です。',
    },
    {
      title: '省エネルギー',
      description: '冷暖房の効率が上がり、電気代削減につながります。',
    },
    {
      title: '結露対策',
      description: 'カビやダニの発生を抑制し、健康で清潔な住環境を実現。',
    },
    {
      title: '耐震性能',
      description: '高い耐震性で、地震の揺れに強い構造になります。',
    },
    {
      title: '快適な湿度管理',
      description: 'スーパーウォール工法により、室内の湿度が自動調整されます。',
    },
  ];

  return (
    <>
      <Breadcrumb current="/reform/super-wall" />
      
      <HeroBanner
        title="スーパーウォール工法リフォーム"
        subtitle="断熱・気密を見直す"
        description="寒さ、暑さ、結露などの悩みに合わせて、住まいの性能を高める方法を確認します。"
        variant="small"
      />

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto mb-12">
          <h2>スーパーウォール工法とは</h2>
          <p>
            スーパーウォール工法は、LIXIL が開発した高断熱・高気密の工法です。新築だけでなく、リフォームでも住まいの性能を見直す選択肢になります。
          </p>
          <p>
            冬の結露やカビ、夏の不快な湿度も軽減。一年中快適で健康的な住環境を実現できます。
          </p>
        </div>

        <div className="grid_auto">
          {benefits.map((benefit) => (
            <Card key={benefit.title} variant="elevated">
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="スーパーウォール工法の仕組み" variant="alt">
        <div className="max-w-3xl mx-auto">
          <div className="paper-panel p-8 mb-8">
            <h3 className="font-bold mb-4">3つのポイント</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2 text-primary-600">1. 高断熱パネル</h4>
                <p className="text-muted">
                  建築用硬質硅酸ウレタンフォームを使用した高断熱パネルにより、優れた断熱性能を実現。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-primary-600">2. 高気密設計</h4>
                <p className="text-muted">
                  隙間のない設計により、高い気密性を確保。冷暖房の効率が向上します。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-primary-600">3. 湿度調整機能</h4>
                <p className="text-muted">
                  室内の湿度を自動調整し、結露やカビを軽減。健康的な住環境を実現。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid_auto-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">スーパーウォール工法で変わる生活</h2>
            <ul className="space-y-4 mb-8">
              {[
                'エアコンの設定温度で部屋全体が快適に',
                '結露が減ってお掃除が楽に',
                'アレルギーが緩和されることも',
                '冬でも素足で過ごせるような温かさ',
                '電気代が削減される',
                '地震に強い構造になる',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button size="lg">
                スーパーウォール工法について詳しく相談
              </Button>
            </Link>
          </div>
          <figure className="image-frame aspect-[4/3]">
            <img src="/images/work-room.jpg" alt="断熱リフォームの暮らしを想定した仮写真" />
          </figure>
        </div>
      </Section>

      <Section variant="alt">
        <div className="paper-panel border-l-4 border-primary-600 p-8 max-w-3xl">
          <h3 className="text-xl font-bold mb-4">さらに詳しく知りたい方へ</h3>
          <p className="text-muted mb-6">
            LIXIL公式サイトにて、スーパーウォール工法についてさらに詳しい情報をご確認いただけます。
          </p>
          <a href="https://www.lixil.co.jp/lineup/construction_method/mdr-swr/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="primary">
              LIXIL公式サイトを確認する
            </Button>
          </a>
        </div>
      </Section>
    </>
  );
}
