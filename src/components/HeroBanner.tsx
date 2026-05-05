import React from 'react';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  overlay?: boolean;
  variant?: 'default' | 'small';
  children?: React.ReactNode;
}

export default function HeroBanner({
  title,
  subtitle,
  description,
  backgroundImage,
  overlay = true,
  variant = 'default',
  children,
}: HeroBannerProps) {
  const isSmall = variant === 'small';

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#F7F3EA] ${
        isSmall ? 'border-b border-[#E5DED2] py-14 md:py-20' : 'py-14 md:py-20 lg:py-28'
      }`}
    >
      <div className={isSmall ? 'container-xl' : 'container-wide'}>
        <div
          className={
            isSmall
              ? 'max-w-3xl'
              : 'grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:items-end'
          }
        >
          <div className={!isSmall ? 'pb-8 lg:pb-12' : ''}>
            {subtitle && (
              <p className="section-note mb-5">{subtitle}</p>
            )}
            <h1
              className={`mb-6 font-serif tracking-wide text-[#1F2933] ${
                isSmall ? 'text-4xl md:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'
              }`}
            >
              {title}
            </h1>
            {description && (
              <p className={`max-w-2xl text-base text-[#6B6259] leading-[2] ${children ? 'mb-8' : ''}`}>
                {description}
              </p>
            )}
            {children}
          </div>

          {!isSmall && backgroundImage && (
            <figure className="image-frame aspect-[4/3] lg:aspect-[16/11]">
              <img
                src={backgroundImage}
                alt=""
                className={overlay ? 'brightness-[0.96] saturate-[0.92] w-full h-full object-cover' : 'w-full h-full object-cover'}
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
