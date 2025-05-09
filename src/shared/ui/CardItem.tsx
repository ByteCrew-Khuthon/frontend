import React, { type ReactNode } from 'react';

import { cn } from '@/shared/utils';

interface CardItemProps {
  className?: string;
  children: ReactNode;
}

export default function CardItem({ className, children }: CardItemProps) {
  return (
    <div
      className={cn(
        className,
        'rounded-large box-shadow-dock flex w-full items-center gap-4 bg-white p-4',
      )}
    >
      {children}
    </div>
  );
}
