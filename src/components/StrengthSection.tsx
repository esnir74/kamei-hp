import { Leaf, Wind, Wrench, Heart } from 'lucide-react';
import { strengths } from '@/lib/data';
import SectionTitle from './SectionTitle';
import MotionWrapper from './MotionWrapper';
import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  leaf: Leaf,
  wind: Wind,
  hammer: Wrench,
  heart: Heart,
};

export default function StrengthSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-xl">
        <MotionWrapper>
          <SectionTitle en="Our Strengths" ja="選ばれる4つの理由" center />
        </MotionWrapper>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5DED2] border border-[#E5DED2]">
          {strengths.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Leaf;
            return (
              <MotionWrapper key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 hover:bg-[#FAF8F3] transition-colors duration-300 group h-full">
                  <Icon
                    className="w-5 h-5 text-[#8A6A43] mb-7 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-medium text-[#1F2933] mb-4 leading-snug tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6259] leading-[2]">{item.description}</p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
