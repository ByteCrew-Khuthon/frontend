import React from 'react';

import { notifications } from '@/mock';
import { CardItem } from '@/shared/ui';
import { cn, getDate } from '@/shared/utils';
import type { Notification } from '@/widgets/farm/types';
import Map from './Map';

export default function MapContainer() {
  return (
    <>
      <div className='p-normal-padding flex flex-col gap-6 bg-white pt-4'>
        <span className='text-xl font-bold'>근처 축사 발병 지도</span>
        <div className='border-border h-100 overflow-hidden rounded-lg border-[1px]'>
          <Map />
        </div>
      </div>
      <div className='p-normal-padding flex flex-1 flex-col gap-6 bg-transparent pt-0'>
        <span className='text-xl font-bold'>최근 기침 기록</span>
        <div className='flex flex-col gap-3'>
          {notifications.map(n => (
            <NotificationItem key={n.id} {...n} />
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
}: Notification) => {
  return (
    <CardItem
      className={cn(checking ? 'text-light' : 'text-dark')}
      shadow={!checking}
    >
      <div className='flex size-full items-center justify-between'>
        <div className='flex size-full items-center gap-4'>
          <div className='rounded-small h-full w-20 flex-shrink-0 bg-red-200' />
          <div className='flex flex-col'>
            <div className='flex w-full justify-between'>
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
