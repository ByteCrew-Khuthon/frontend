import React from 'react';
import { cn } from '@/shared/utils';
import type { Article } from '@/widgets/home/types';

interface CardProps {
  className?: string;
  article: Article;
}

export default function Card({ className, article }: CardProps) {
  const { title, content } = article;
  const hasHeader = title.includes('[초록]');

  return (
    <div
      className={cn(
        className,
        'rounded-large box-shadow-dock flex flex-shrink-0 flex-col gap-2 overflow-hidden bg-white p-4',
      )}
    >
      <div className='w-[86%] text-lg font-semibold'>
        {hasHeader ? title.split('[초록]')[1].slice(0, 30) + '...' : title}
      </div>
      <div className='flex-1 overflow-hidden'>
        {content.slice(0, 90) + '...'}
      </div>
    </div>
  );
}
