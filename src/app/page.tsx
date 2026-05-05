import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import AboutSection from '@/components/AboutSection';
import StrengthSection from '@/components/StrengthSection';
import WorksSection from '@/components/WorksSection';
import ServiceSection from '@/components/ServiceSection';
import BlogSection from '@/components/BlogSection';
import CompanySection from '@/components/CompanySection';
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: '亀井工務店 | 暮らしに寄り添う家づくり',
  description: '地域に根ざした工務店として、自然素材と確かな施工で、長く心地よく暮らせる住まいをご提案します。',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsSection />
      <AboutSection />
      <StrengthSection />
      <WorksSection />
      <ServiceSection />
      <BlogSection />
      <CompanySection />
      <CtaSection />
    </>
  );
}
