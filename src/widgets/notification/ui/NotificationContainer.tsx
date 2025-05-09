import React from 'react';

import { NotificationItem } from '@/shared/ui';
import { cn } from '@/shared/utils';

import { useFetchNotification } from '../api';
import { HazardIcon, SpoonIcon, TemperatureIcon } from '@/asset/icons';

export default function NotificationContainer() {
  const { data } = useFetchNotification();

  return (
    <>
      <div className='p-normal-padding flex h-full flex-col gap-6 pt-4'>
        <div className='flex flex-col gap-3'>
          {data &&
            data.map((n, i) => {
              const { title } = n;
              const icon = title.includes('먹이')
                ? SpoonIcon
                : title.includes('기침')
                  ? HazardIcon
                  : TemperatureIcon;

              return (
                <NotificationItem
                  icon={icon}
                  key={n.id}
                  {...n}
                  className={cn(i === data.length - 1 && 'mb-6')}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
