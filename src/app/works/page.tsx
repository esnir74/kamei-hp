import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import { pagesMetadata, workExamples } from '@/data/pages';
import Link from 'next/link';

export const metadata: Metadata = {
  ...pagesMetadata['/works'],
};

export default function WorksPage() {
  return (
    <>
      <Breadcrumb current="/works" />

      <HeroBanner
        title="施工事例"
        subtitle="住まいの困りごとから見る工事"
        description="どんな工事をしたかだけでなく、何に困っていて、どう使いやすくしたかが伝わるようにまとめています。"
        variant="small"
      />

      <Section>
        <div className="grid_auto">
          {workExamples.map((work) => (
            <Card key={work.id} variant="elevated">
              <div className="image-frame mb-5 aspect-[4/3]">
                <img src={work.image} alt={work.title} />
              </div>

              <div className="mb-4">
                <span className="badge text-xs">
                  {work.category === 'reform' && 'リフォーム'}
                  {work.category === 'new-build' && '新築'}
                  {work.category === 'painting' && '塗装'}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">{work.title}</h3>
              <p className="text-muted text-sm mb-4">{work.description}</p>

              <p className="text-xs text-secondary-500 mb-4">{work.date}</p>

              {work.tags && work.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {work.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="工事前と工事後の見方" variant="alt">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="image-frame mb-4 aspect-[4/3] opacity-80">
                <img src="/images/contact-room.jpg" alt="工事前の確認イメージ" />
              </div>
              <h4 className="font-bold text-center">工事前</h4>
              <p className="text-sm text-muted text-center mt-2">使いにくさや傷みの原因を確認します。</p>
            </div>

            <div>
              <div className="image-frame mb-4 aspect-[4/3]">
                <img src="/images/work-living.jpg" alt="工事後の暮らしのイメージ" />
              </div>
              <h4 className="font-bold text-center">工事後</h4>
              <p className="text-sm text-muted text-center mt-2">暮らしやすさと手入れのしやすさを整えます。</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="paper-panel p-8">
          <h3 className="text-2xl font-bold mb-4">掲載していない工事もご相談ください</h3>
          <p className="text-muted mb-6">
            家の状態は一軒ずつ違います。掲載例に近い工事がなくても、気になる箇所の写真や状況をお知らせください。
          </p>
          <Link href="/contact">
            <Button>写真を送って相談する</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
