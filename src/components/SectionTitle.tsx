interface SectionTitleProps {
  en: string;
  ja: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ en, ja, center = false, light = false }: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className={`text-xs tracking-[0.3em] uppercase mb-4 font-medium font-display ${light ? 'text-[#E5DED2]/60' : 'text-[#8A6A43]'}`}>
        {en}
      </p>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-snug ${light ? 'text-white' : 'text-[#1F2933]'}`}>
        {ja}
      </h2>
    </div>
  );
}
