import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline';
  withPadding?: boolean;
  clickable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', withPadding = true, clickable = false, children, ...props }, ref) => {
    const baseClasses = 'transition-all duration-300';
    
    const variants = {
      default: 'bg-transparent border-t border-secondary-300',
      elevated: 'bg-[#fffaf1] border border-secondary-200',
      outline: 'bg-transparent border border-secondary-300',
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      withPadding && 'p-6',
      clickable && 'cursor-pointer',
      className
    );

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
