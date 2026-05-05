import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/subsidies'],
};

export default function SubsidiesPage() {
  const subsidies = [
    {
      title: '省エネ改修',
      description: '断熱、窓、給湯器など、住まいの省エネ性能を高める工事が対象になる場合があります。',
      point: '対象工事・製品の条件確認が必要です',
    },
    {
      title: '耐震改修',
      description: '建物の状態や築年数によって、耐震診断や改修の制度を確認します。',
      point: '事前診断が必要なことがあります',
    },
    {
      title: 'バリアフリー改修',
      description: '段差解消、手すり、出入口の調整など、暮らしやすさを整える工事を確認します。',
      point: '介護保険や自治体制度の確認が必要です',
    },
    {
      title: '自治体のリフォーム制度',
      description: '市区町村ごとに受付期間、予算、対象工事が異なります。',
      point: '申請前に最新情報を確認します',
    },
  ];

  return (
    <>
      <Breadcrumb current="/subsidies" />
      
      <HeroBanner
        title="補助金情報"
        subtitle="制度は年度ごとに変わります"
        description="リフォームで使える可能性のある制度を、工事内容に合わせて確認します。"
        variant="small"
      />

      <Section>
        <div className="paper-panel border-l-4 border-primary-700 p-6 mb-12">
          <h3 className="font-bold text-primary-900 mb-2">申請前の確認が大切です</h3>
          <p className="text-primary-900 text-sm">
            補助金は、工事前の申請が必要なものや、対象製品・受付期間が決まっているものがあります。具体的な金額や期限は、相談時に国・自治体の最新情報を確認します。
          </p>
        </div>

        <div className="grid_auto">
          {subsidies.map((subsidy) => (
            <Card key={subsidy.title} variant="elevated">
              <h3 className="text-lg font-bold mb-3">{subsidy.title}</h3>
              <p className="text-muted mb-4">{subsidy.description}</p>
              <div className="mb-6 text-sm">
                <p className="font-medium text-primary-800">{subsidy.point}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="補助金を活用してお得にリフォーム" variant="alt">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p>
              リフォーム工事を検討される際、国・地方自治体の補助金制度を活用することで、お得に工事を進めることができます。
            </p>
            <p>
              亀井工務店では、各種補助金制度の詳細や、お客様の工事が補助金の対象となるかどうかについて確認しながらご相談いただけます。
            </p>
            <p>
              「補助金を活用したリフォームを検討したい」「うちの工事は補助金の対象になるかな？」といったご質問も、お気軽にご相談ください。
            </p>
          </div>
          <div className="mt-8 paper-panel p-6">
            <h4 className="font-bold mb-4">ご相談までの流れ</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>ご連絡（お電話またはメール）</li>
              <li>現地調査・ご要望ヒアリング</li>
              <li>補助金対象の工事内容確認</li>
              <li>見積・プラン提案</li>
              <li>補助金申請サポート</li>
              <li>工事実施</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="paper-panel p-8">
          <h3 className="text-2xl font-bold mb-4">補助金についてお気軽にご相談ください</h3>
          <p className="text-muted mb-6">
            制度名だけでは分かりにくい条件も、工事内容に合わせて一緒に確認します。
          </p>
          <Button size="lg">
            相談フォームに進む
          </Button>
        </div>
      </Section>
    </>
  );
}
