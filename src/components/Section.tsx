import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  variant?: 'default' | 'alt' | 'primary';
  paddingSize?: 'sm' | 'md' | 'lg';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    title, 
    description, 
    variant = 'default',
    paddingSize = 'md',
    children,
    ...props 
  }, ref) => {
    const variants = {
      default: 'bg-secondary-50',
      alt: 'bg-secondary-100',
      primary: 'bg-[#fffaf1]',
    };

    const padding = {
      sm: 'py-10 md:py-14',
      md: 'py-16 md:py-24 lg:py-28',
      lg: 'py-20 md:py-28 lg:py-36',
    };

    const classes = cn(
      'w-full border-t border-secondary-200',
      variants[variant],
      padding[paddingSize],
      className
    );

    return (
      <section className={classes} ref={ref} {...props}>
        <div className="container-xl">
          {(title || description) && (
            <div className="mb-10 md:mb-12 max-w-3xl">
              {title && <h2 className="mb-4 text-secondary-900">{title}</h2>}
              {description && <p className="text-lg text-muted">{description}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
