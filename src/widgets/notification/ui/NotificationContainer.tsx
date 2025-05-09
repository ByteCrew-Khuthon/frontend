import React from 'react';

import { NotificationItem, NotificationSkeleton } from '@/shared/ui';
import { cn } from '@/shared/utils';

import { useFetchNotification } from '../api';
import { HazardIcon, SpoonIcon, TemperatureIcon } from '@/asset/icons';

export default function NotificationContainer() {
  const { data, isPending } = useFetchNotification();
  const notification = data || [];

  return (
    <>
      <div className='p-normal-padding flex h-full flex-col gap-6 pt-4'>
        <div className='flex flex-col gap-3'>
          {!data && isPending && <NotificationSkeleton />}
          {notification.length === 0 ? (
            <p className='text-light text-center'>알림이 없어요!</p>
          ) : (
            notification.map((n, i) => {
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
                  className={cn(i === notification.length - 1 && 'mb-6')}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
