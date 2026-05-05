import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Link from 'next/link';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/how-to-build'],
};

export default function HowToBuildPage() {
  const steps = [
    {
      number: 1,
      title: 'ご相談',
      description: 'まずはお気軽にご相談ください。ご予算、ライフスタイル、ご要望などをお聞きします。',
      duration: '初回相談：30分～1時間',
    },
    {
      number: 2,
      title: '現地調査・プラン作成',
      description: '土地や既存建物を調査させていただき、ご要望をもとに複数のプランをご作成いたします。',
      duration: '2～3週間',
    },
    {
      number: 3,
      title: 'プレゼンテーション・見積',
      description: 'ご作成したプランをご説明し、詳細な見積をご提示いたします。ご質問やご変更についても、この段階で対応させていただきます。',
      duration: '1～2時間',
    },
    {
      number: 4,
      title: 'ご検討',
      description: 'プランや見積をご検討いただきます。ご不明な点やご質問があれば、いつでもお気軽にお問い合わせください。',
      duration: '1～2週間',
    },
    {
      number: 5,
      title: 'ご契約',
      description: 'プランにご満足いただけましたら、ご契約させていただきます。重要事項の説明などを行います。',
      duration: '契約手続き：1時間',
    },
    {
      number: 6,
      title: '詳細打合せ・確認申請',
      description: '建築確認申請の手続きを進めながら、仕様や細部についての詳細打合せを行います。',
      duration: '2～3週間',
    },
    {
      number: 7,
      title: '工事開始',
      description: '工事を開始いたします。定期的に進捗報告をさせていただきます。定期的な検査も実施いたします。',
      duration: '工事期間：3～6ヶ月',
    },
    {
      number: 8,
      title: '竣工・完成',
      description: '工事が完成いたしました。最終確認を行い、アフターサービスについてのご説明をさせていただきます。',
      duration: 'お引き渡し',
    },
    {
      number: 9,
      title: 'アフターサービス',
      description: 'お引き渡し後も、定期的にご連絡させていただき、末永いお付き合いをさせていただきます。',
      duration: '生涯サポート',
    },
  ];

  return (
    <>
      <Breadcrumb current="/how-to-build" />
      
      <HeroBanner
        title="家づくりのステップ"
        subtitle="相談から引き渡し後まで"
        description="決めることを一度に詰め込まず、順番に確認しながら進めます。"
        variant="small"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="mb-8 md:mb-12">
              <div className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-20 bg-primary-300 mt-2 mb-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 pt-2 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-sm font-medium text-primary-800">目安: {step.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="各ステップでのポイント" variant="alt">
        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">相談・打合せ</h3>
            <p className="text-muted mb-4">
              最初の相談が大切です。ご要望、ご予算、ゆずれない点などを丁寧にお聞きします。
            </p>
            <p className="text-sm text-primary-800 font-medium">ステップ 1 - 5</p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">工事・施工</h3>
            <p className="text-muted mb-4">
              定期的な報告と検査を行い、工事品質を維持いたします。ご不安な点があればご相談ください。
            </p>
            <p className="text-sm text-primary-800 font-medium">ステップ 6 - 8</p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">アフターサービス</h3>
            <p className="text-muted mb-4">
              工事終了後も、定期的にご連絡させていただき、末永くお付き合いさせていただきます。
            </p>
            <p className="text-sm text-primary-800 font-medium">ステップ 9</p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl paper-panel p-8">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2">Q. 相談は無料ですか？</h4>
              <p className="text-muted">A. はい。ご相談はすべて無料です。ご要望や資金計画などについて、お気軽にご相談ください。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Q. 工事期間はどのくらいですか？</h4>
              <p className="text-muted">A. 工事内容や規模によって異なりますが、一般的には3～6ヶ月程度です。詳しくはお問い合わせください。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Q. 相談から完成まで、どのくらい時間がかかりますか？</h4>
              <p className="text-muted">A. 相談から完成まで、通常は1年程度を予定しています。お急ぎの場合はご相談ください。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Q. 打合せはどこで行いますか？</h4>
              <p className="text-muted">A. 当社事務所、またはお客様ご指定の場所で打合せさせていただきます。</p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="primary">
        <div>
          <h3 className="text-2xl font-bold mb-4">今からはじめる家づくり</h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            まずはお気軽に、ご相談ください。ご要望、ご予算、ご質問など、どんなことでも構いません。
          </p>
          <Link href="/contact">
            <Button size="lg">
              まずは相談する
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
