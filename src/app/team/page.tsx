import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/team'],
};

export default function TeamPage() {
  const staffRoles = [
    {
      role: '相談・現地確認',
      description: '最初の相談では、困っている場所だけでなく、普段の使い方や家族の動き方も伺います。',
    },
    {
      role: '大工・施工',
      description: '仕上がると見えなくなる下地や納まりを大切にしながら、住まいに合わせて手を入れます。',
    },
    {
      role: '工事管理',
      description: '住みながらの工事でも不安が少なくなるよう、日程や作業範囲を確認しながら進めます。',
    },
    {
      role: '事務・連絡窓口',
      description: 'お問い合わせ、日程調整、書類の確認など、工事前後の連絡を支えます。',
    },
  ];

  return (
    <>
      <Breadcrumb current="/team" />

      <HeroBanner
        title="スタッフ紹介"
        subtitle="顔が見える距離で相談できます"
        description="住まいの工事は、誰に話すかも大切です。担当ごとの動きが分かるように、役割を紹介します。"
        variant="small"
      />

      <Section>
        <div className="mb-12 grid gap-10 lg:grid-cols-[360px_1fr] lg:items-end">
          <figure className="image-frame aspect-[4/3]">
            <img src="/images/family.jpg" alt="相談の雰囲気を伝える仮写真" />
          </figure>
          <p className="text-lg">
            本番ではスタッフや現場の写真に差し替えます。ここでは、誰に相談できるかが分かるように役割ごとの動きを整理しています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {staffRoles.map((staff) => (
            <Card key={staff.role} variant="elevated">
              <div className="service-mark">人</div>
              <h3 className="text-lg font-bold mb-3">{staff.role}</h3>
              <p className="text-sm text-muted">
                {staff.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="スタッフの想い" variant="alt">
        <div className="max-w-3xl prose prose-lg">
          <p>
            私たちが大切にしているのは、工事の前にきちんと話を聞くことです。暮らしながら困っていることは、現場を見て初めて分かることもあります。
          </p>
          <p>
            新築、リフォーム、塗装。どの工事でも、仕上がりだけでなく、その後の暮らしや手入れまで考えて進めます。
          </p>
          <p>
            気になることがあれば、まとまった依頼でなくてもご相談ください。
          </p>
        </div>
      </Section>
    </>
  );
}
