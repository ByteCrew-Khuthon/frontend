import React from 'react';

import { CardItem } from '@/shared/ui';
import { cn, getDate } from '@/shared/utils';

import type { Notification } from '@/widgets/farm/types';
import { useFetchNotification } from '../api';

export default function NotificationContainer() {
  const { data } = useFetchNotification();

  return (
    <>
      <div className='p-normal-padding flex h-full flex-col gap-6 pt-4'>
        <div className='flex flex-col gap-3'>
          {data &&
            data.map((n, i) => (
              <NotificationItem
                key={n.id}
                {...n}
                className={cn(i === data.length - 1 && 'mb-6')}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const NotificationItem = ({
  title,
  description,
  date,
  checking,
  className,
}: Notification & { className?: string }) => {
  return (
    <CardItem
      className={cn(
        className,
        checking ? 'text-light' : 'text-dark',
        'border-border active:bg-fill h-26 border-[0.5px] transition duration-70',
      )}
      shadow={!checking}
    >
      <div className='flex size-full items-center justify-between'>
        <div className='flex size-full items-center gap-4'>
          <div className='rounded-small h-full w-20 flex-shrink-0 bg-red-200' />
          <div className='flex flex-1 flex-col'>
            <div className='flex justify-between'>
              <span className='font-semibold'>{title}</span>
              <span className='text-sm'>
                {getDate(date, 'YYYY년 MM월 DD일')}
              </span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </CardItem>
  );
};
