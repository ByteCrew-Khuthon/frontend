import React, { type ReactNode } from 'react';

import { cn } from '@/shared/utils';

interface CardItemProps {
  className?: string;
  children: ReactNode;
  shadow?: boolean;
}

export default function CardItem({
  className,
  children,
  shadow = true,
}: CardItemProps) {
  return (
    <div
      className={cn(
        className,
        shadow && 'box-shadow-dock',
        'rounded-large flex w-full items-center gap-4 bg-white p-4',
      )}
    >
      {children}
    </div>
  );
}
