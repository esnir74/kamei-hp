import { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/news'],
};

export default function NewsPage() {
  const notices = [
    {
      title: 'お知らせは順次更新します',
      content: '営業日、相談会、施工事例の追加など、公開できる情報から掲載していきます。',
    },
    {
      title: '相談会は予約制です',
      content: 'リフォームや外まわりの相談は、現場確認の日程と合わせて個別に調整しています。',
    },
  ];

  return (
    <>
      <Breadcrumb current="/news" />

      <HeroBanner
        title="ニュース・イベント"
        subtitle="お知らせ"
        description="営業日や相談会など、亀井工務店からのお知らせを掲載します。"
        variant="small"
      />

      <Section>
        <div className="max-w-4xl space-y-8">
          {notices.map((item) => (
            <Card key={item.title} variant="outline">
              <p className="section-note mb-3">NEWS</p>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted">{item.content}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="相談会について" variant="alt">
        <div className="max-w-3xl">
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">住まいの相談は、個別に時間を取って伺います</h3>
            <p className="text-muted mb-6">
              間取り、段差、外壁、屋根、塗装など、相談内容によって確認したい場所が変わります。事前に内容をお知らせいただけると、当日スムーズにお話できます。
            </p>
            <Link href="/contact">
              <Button>相談日を問い合わせる</Button>
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}
