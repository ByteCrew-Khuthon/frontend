import React, { type ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        className,
        'rounded-large box-shadow-dock flex flex-shrink-0 flex-col gap-4 bg-white p-4',
      )}
    >
      {children}
    </div>
  );
}
