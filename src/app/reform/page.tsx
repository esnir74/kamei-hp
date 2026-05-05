import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Link from 'next/link';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/reform'],
};

export default function ReformPage() {
  const services = [
    {
      title: 'リフォーム施工事例',
      description: '和室から洋室へ、トイレ、キッチン、お店のリフォームなど、様々な実績をご紹介。',
      href: '/works',
      mark: '例',
    },
    {
      title: 'スーパーウォール工法',
      description: '高断熱・高気密で、省エネルギーで快適な住環境を実現するリフォーム工法。',
      href: '/reform/super-wall',
      mark: '温',
    },
    {
      title: '外まわりリフォーム',
      description: '外壁、屋根、門周りなど。家全体の見た目を新しくリフレッシュ。',
      href: '/reform/exterior',
      mark: '外',
    },
    {
      title: '塗装',
      description: '外壁塗装、屋根塗装。長く美しく保つ塗装をご提案します。',
      href: '/reform/painting',
      mark: '塗',
    },
  ];

  return (
    <>
      <Breadcrumb current="/reform" />
      
      <HeroBanner
        title="リフォーム"
        subtitle="修繕・改修・外まわり"
        description="水まわり、内装、外壁、屋根。今の家で気になっているところを見ながら、暮らしに合う直し方を考えます。"
        variant="small"
      />

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto mb-12">
          <h2>リフォームとは</h2>
          <p>
            リフォームは、古くなったところを新しくするだけの工事ではありません。
          </p>
          <p>
            使いにくい動線を直す、寒さをやわらげる、段差を減らす、雨から家を守る。今の住まいをどう続けていくかを考えるための工事です。
          </p>
        </div>

        <div className="grid_auto gap-6">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card variant="elevated" clickable className="h-full">
                <div className="service-mark">{service.mark}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <div className="text-primary-800 font-medium hover:text-primary-900">
                  詳しく見る
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="リフォームの流れ" variant="alt">
        <div className="max-w-3xl mx-auto">
          {[
            { title: 'ご相談', description: 'ご要望やお困りなことをお聞きします。' },
            { title: '現地調査', description: '実際に現地を確認し、最適なプランを検討します。' },
            { title: '提案・見積', description: '複数のプランと見積をご提案いたします。' },
            { title: 'ご契約', description: 'プランにご満足いただけましたら、ご契約いたします。' },
            { title: '工事実施', description: '丁寧に工事を進め、定期的にご報告させていただきます。' },
            { title: '完成・お引き渡し', description: '工事完成後、アフターサービスについてのご説明をいたします。' },
          ].map((item, index) => (
            <div key={item.title} className="flex gap-4 mb-8">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                {index < 5 && <div className="w-px h-12 bg-primary-300 mt-2" />}
              </div>
              <div className="pt-1">
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="elevated" className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3">リフォームに関するご相談は無料です</h3>
            <p className="text-muted mb-4">
              「どこまで直すべきか」「予算内で何を優先するか」など、工事内容が固まる前の段階からご相談いただけます。
            </p>
            <Link href="/contact">
              <Button>
                ご相談をお申し込み
              </Button>
            </Link>
          </Card>

          <Card variant="outline">
            <h4 className="font-bold mb-3">補助金をご活用ください</h4>
            <p className="text-sm text-muted">
              各種リフォーム補助金が利用可能です。詳しくは補助金情報ページをご覧ください。
            </p>
            <Link href="/subsidies" className="text-primary-800 text-sm font-medium">
              補助金情報
            </Link>
          </Card>

          <Card variant="outline">
            <h4 className="font-bold mb-3">施工事例を参考に</h4>
            <p className="text-sm text-muted">
              様々なリフォーム実績をご紹介しています。イメージ作成の参考にしてください。
            </p>
            <Link href="/works" className="text-primary-800 text-sm font-medium">
              施工事例
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}
