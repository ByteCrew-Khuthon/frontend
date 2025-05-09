import React from 'react';

import { notifications } from '@/mock';
import { NotificationItem } from '@/shared/ui';

import Map from './Map';
import { DangerIcon } from '@/asset/icons';

export default function MapContainer() {
  return (
    <>
      <div className='p-normal-padding flex w-screen flex-col gap-6 bg-white pt-4'>
        <span className='text-xl font-bold'>근처 축사 발병 지도</span>
        <div className='border-border h-100 overflow-hidden rounded-lg border-[1px]'>
          <Map />
        </div>
      </div>
      <div className='p-normal-padding flex flex-1 flex-col gap-6 bg-transparent pt-0'>
        <span className='text-xl font-bold'>최근 발병 기록</span>
        <div className='flex flex-col gap-3'>
          {notifications.map(n => (
            <NotificationItem key={n.id} {...n} icon={DangerIcon} />
          ))}
        </div>
      </div>
    </>
  );
}
