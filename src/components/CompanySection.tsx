import Link from 'next/link';
import SectionTitle from './SectionTitle';
import MotionWrapper from './MotionWrapper';

const companyInfo = [
  { label: '会社名', value: '有限会社 亀井工務店' },
  { label: '代表者', value: '亀井 雅明' },
  { label: '創業', value: '大正5年7月（1916年）' },
  { label: '所在地', value: '〒254-0087 神奈川県平塚市豊田本郷1752' },
  { label: '電話', value: '0463-31-6372' },
  { label: 'FAX', value: '0463-35-2589' },
  { label: '営業時間', value: '8:00〜18:00（日祝定休）' },
  { label: '事業内容', value: '注文住宅・リフォーム・外壁塗装・外まわり工事・SW工法' },
  { label: '施工エリア', value: '神奈川県全域' },
];

export default function CompanySection() {
  return (
    <section className="bg-[#F7F3EA] py-24 md:py-32">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <MotionWrapper>
            <div>
              <SectionTitle en="Company" ja="会社情報" />
              <dl className="mt-10 divide-y divide-[#E5DED2]">
                {companyInfo.map(({ label, value }) => (
                  <div key={label} className="flex gap-8 py-4 text-sm">
                    <dt className="w-20 shrink-0 text-[#6B6259] text-xs tracking-wide">{label}</dt>
                    <dd className="text-[#2D2A26]">{value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/company"
                className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[#8A6A43] group"
              >
                <span>会社概要を見る</span>
                <span className="w-8 h-px bg-[#8A6A43] group-hover:w-14 transition-all duration-300" />
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/family.jpg"
                alt="亀井工務店"
                className="w-full h-full object-cover"
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
