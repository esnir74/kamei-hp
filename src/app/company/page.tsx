import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import { pagesMetadata } from '@/data/pages';

export const metadata: Metadata = {
  ...pagesMetadata['/company'],
};

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb current="/company" />
      
      <HeroBanner
        title="会社概要"
        subtitle="平塚の住まいを見てきた工務店"
        description="大きな工事の前にも、小さな不具合の相談にも。まずは家の状態と暮らし方を丁寧に伺います。"
        variant="small"
      />

      <Section>
        <div className="grid_auto-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">有限会社 亀井工務店</h2>
            <p className="text-lg text-muted mb-6">
              神奈川県平塚市で、住まいの新築・リフォーム・塗装を行っています。
            </p>
            <p className="mb-6">
              住まいの困りごとは、図面だけでは分からないことが多いものです。風の通り方、床のきしみ、雨の日の不安、家族の動き方まで見ながら、必要な工事を一緒に整理します。
            </p>
            <p className="mb-6 text-muted">
              工事の大きさに関わらず、後から直しにくいところほど丁寧に。長く住む家だからこそ、派手さよりも日々の安心を大切にしています。
            </p>

            <div className="paper-panel p-6 mt-8">
              <h3 className="font-bold mb-4">会社情報</h3>
              <dl className="space-y-4 text-sm">
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-secondary-700">会社名</dt>
                  <dd className="col-span-2">有限会社 亀井工務店</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-secondary-700">所在地</dt>
                  <dd className="col-span-2">神奈川県平塚市</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-secondary-700">電話</dt>
                  <dd className="col-span-2">0463-31-6372</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-secondary-700">業務内容</dt>
                  <dd className="col-span-2">
                    新築住宅、リフォーム、塗装、増改築
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <figure className="image-frame aspect-[4/3]">
              <img src="/images/detail-light.jpg" alt="住まいの空気感を伝える仮写真" />
              <figcaption className="photo-caption">
                仮写真です。本番では事務所、現場、職人の手元などに差し替えます。
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section title="会社の特徴" variant="alt">
        <div className="grid_auto">
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">現場を見てから話す</h3>
            <p className="text-muted">
              困りごとの原因は一つとは限りません。現地で状態を見ながら、必要な工事と急がなくてよい工事を分けます。
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">暮らしながらの工事に配慮</h3>
            <p className="text-muted">
              リフォームは生活のそばで進みます。日程、音、ほこり、使えない場所を事前に確認します。
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">見えない部分を大切に</h3>
            <p className="text-muted">
              仕上がりだけでなく、下地や雨仕舞いなど、住み始めてから効いてくる部分を丁寧に扱います。
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">工事後も相談しやすく</h3>
            <p className="text-muted">
              引き渡し後に気づくこともあります。住まいの変化を見ながら、必要な手入れを一緒に考えます。
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">分かる言葉で見積</h3>
            <p className="text-muted">
              工事内容、材料、費用の理由をできるだけ分かる言葉で説明します。
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3">小さな相談から</h3>
            <p className="text-muted">
              まだ工事するか決まっていない段階でも、状態確認や進め方の相談から始められます。
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
