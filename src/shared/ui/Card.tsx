import React from 'react';
import { cn } from '@/shared/utils';
import type { Article } from '@/widgets/home/types';

interface CardProps {
  className?: string;
  article: Article;
}

export default function Card({ className, article }: CardProps) {
  const { title, content } = article;

  return (
    <div
      className={cn(
        className,
        'rounded-large box-shadow-dock flex flex-shrink-0 flex-col gap-4 bg-white p-4',
      )}
    >
      <span>{title}</span>
      <p>{content}</p>
    </div>
  );
}
