'use client';

import { FormEvent, useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import { siteConfig } from '@/data/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // フォーム送信処理
      // 実装例：API呼び出しやメール送信
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumb current="/contact" />
      
      <HeroBanner
        title="お問合せ"
        subtitle="電話・フォームで相談"
        description="内容がまとまっていなくても大丈夫です。気になる箇所や困っていることからお知らせください。"
        variant="small"
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card variant="elevated">
                <h3 className="text-lg font-bold mb-4">お電話</h3>
                <a
                  href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`}
                  className="text-lg font-bold text-primary-800 hover:text-primary-900"
                >
                  {siteConfig.company.phone}
                </a>
                <p className="text-sm text-muted mt-2">営業時間：月～金 9:00～18:00</p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-lg font-bold mb-4">メール</h3>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="break-all text-primary-800 hover:text-primary-900"
                >
                  {siteConfig.company.email}
                </a>
                <p className="text-sm text-muted mt-2">24時間受付</p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-lg font-bold mb-4">住所</h3>
                <p className="text-muted">
                  {siteConfig.company.address}
                </p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-lg font-bold mb-4">SNS</h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-secondary-300 transition-colors hover:border-primary-700 hover:text-primary-800"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-secondary-300 transition-colors hover:border-primary-700 hover:text-primary-800"
                    aria-label="LINE"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" />
                    </svg>
                  </a>
                </div>
              </Card>

              <figure className="image-frame aspect-[4/3]">
                <img src="/images/contact-room.jpg" alt="相談スペースの仮写真" />
              </figure>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 p-4">
                    <p className="text-green-800 font-medium">
                      ✓ お問い合わせありがとうございます。内容を確認させていただきます。
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4">
                    <p className="text-red-800 font-medium">
                      申し訳ございません。送信に失敗しました。もう一度お試しください。
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    お名前 <span className="text-primary-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-secondary-300 bg-secondary-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="山田太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    メールアドレス <span className="text-primary-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-secondary-300 bg-secondary-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="example@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    お電話番号 <span className="text-primary-700">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-secondary-300 bg-secondary-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    ご用件 <span className="text-primary-700">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-secondary-300 bg-secondary-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">選択してください</option>
                    <option value="new-build">新築について</option>
                    <option value="reform">リフォームについて</option>
                    <option value="painting">塗装について</option>
                    <option value="inquiry">その他お問い合わせ</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    お問い合わせ内容 <span className="text-primary-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none border border-secondary-300 bg-secondary-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="ご質問やご要望をお書きください"
                  />
                </div>

                <div className="paper-panel p-4">
                  <p className="text-xs text-secondary-600 mb-2">
                    <span className="font-medium">※ プライバシーポリシー</span>
                  </p>
                  <p className="text-xs text-secondary-600">
                    ご入力いただいた個人情報は、お問い合わせへの回答に使用させていただきます。
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-6">
            {[
              {
                q: '相談は無料ですか？',
                a: 'はい。ご相談は全て無料です。費用が発生することはございません。',
              },
              {
                q: '見積はいくつまでもらえますか？',
                a: 'ご希望のプランの数だけご提案させていただきます。複数プランの比較検討も可能です。',
              },
              {
                q: '工事中に追加費用は発生しますか？',
                a: 'ご契約時の金額からの追加費用は基本的に発生いたしません。工事内容の変更がある場合はご相談いただきます。',
              },
              {
                q: '営業時間外での対応は可能ですか？',
                a: 'お電話でのご相談は営業時間内（月～金 9:00～18:00）となっておりますが、ご事情によってはご対応させていただきます。お気軽にお電話ください。',
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-secondary-200 pb-6 last:border-b-0">
                <h3 className="font-bold mb-2 flex gap-2">
                  <span className="text-primary-700">Q</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-muted flex gap-2">
                  <span className="font-bold text-primary-700">A</span>
                  <span>{item.a}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
