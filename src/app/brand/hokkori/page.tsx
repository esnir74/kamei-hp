import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Link from 'next/link';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/brand/hokkori'],
};

export default function HokkoriPage() {
  const features = [
    {
      mark: '間',
      title: '家族の動きに合う間取り',
      description: '朝の支度、洗濯、帰宅後の片付けなど、毎日の動きから間取りを考えます。',
    },
    {
      mark: '温',
      title: '季節を過ごしやすく',
      description: '断熱、日差し、風の通り方を見ながら、無理なく過ごせる家を目指します。',
    },
    {
      mark: '材',
      title: '手入れしやすい素材',
      description: '見た目だけでなく、掃除や補修のしやすさも含めて素材を選びます。',
    },
    {
      mark: '続',
      title: '長く住むためのつくり',
      description: '暮らしの変化に合わせて直しやすいこと、相談しやすいことも大切にします。',
    },
  ];

  return (
    <>
      <Breadcrumb current="/brand/hokkori" />

      <HeroBanner
        title="ほっこりな家"
        subtitle="落ち着いて暮らせる新築住宅"
        description="毎日の支度、食事、洗濯、片付け。暮らしの普通の時間が無理なく続く家を、一緒に考えます。"
        variant="small"
      />

      <Section>
        <div className="grid_auto-2 gap-12 items-center">
          <div>
            <p className="section-note mb-3">ほっこりな家とは</p>
            <h2 className="text-3xl font-bold mb-6">背伸びした家ではなく、暮らしになじむ家。</h2>
            <p className="text-lg text-muted mb-6">
              「ほっこりな家」は、亀井工務店が提案する新築住宅の考え方です。
            </p>
            <p className="mb-6">
              住み始めてからの使いやすさ、冬の寒さや夏の暑さ、片付けやすい収納、将来の手入れ。図面のきれいさだけでなく、毎日の暮らしを中心に考えます。
            </p>
            <p className="mb-8 text-muted">
              家族ごとに必要な形は違います。まずは、今の暮らしで好きなところ、不便なところから聞かせてください。
            </p>
            <Link href="/how-to-build">
              <Button size="lg">
                家づくりの流れを見る
              </Button>
            </Link>
          </div>
          <figure className="image-frame aspect-[4/3]">
            <img src="/images/new-house.jpg" alt="明るい住まいの仮写真" />
            <figcaption className="photo-caption">
              仮写真です。本番では新築事例や暮らしの写真に差し替えます。
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section title="ほっこりな家で大切にすること" variant="alt">
        <div className="grid_auto">
          {features.map((feature) => (
            <Card key={feature.title} variant="elevated">
              <div className="service-mark">{feature.mark}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="paper-panel p-8">
          <h2 className="text-3xl font-bold mb-6">打ち合わせで確認すること</h2>
          <div className="grid_auto-2">
            {[
              '今の住まいで気に入っている場所',
              '朝と夜に家族が集まる場所',
              '収納に困っているもの',
              '冬の寒さ、夏の暑さ、風通し',
              '将来の部屋の使い方',
              '予算内で優先したいこと',
            ].map((item) => (
              <div key={item} className="flex gap-3 border-b border-secondary-200 pb-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-primary-600" />
                <p className="text-secondary-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="新築の相談を始める前に"
        description="土地や図面が決まっていなくても、暮らし方の整理から始められます。"
        variant="primary"
      >
        <Link href="/contact">
          <Button size="lg">
            ほっこりな家について相談する
          </Button>
        </Link>
      </Section>
    </>
  );
}
