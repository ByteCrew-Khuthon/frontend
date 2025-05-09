import React from 'react';

import { cn } from '@/shared/utils';

import { PIG_TABLE } from '@/widgets/farm/constants';
import type { Pig } from '@/widgets/farm/types';

import { pigs } from '@/mock';
import { NotificationItem } from '@/shared/ui';
import { useFetchNotification } from '@/widgets/notification/api';
import { SpoonIcon } from '@/asset/icons';

export default function FarmContainer() {
  const { data } = useFetchNotification();
  const feed = data?.filter(d => d.title.includes('먹이'));

  return (
    <>
      <div className='p-normal-padding flex flex-col gap-6 bg-white pt-4'>
        <span className='text-xl font-bold'>우리 농장 돼지 관리</span>
        <div className='border-border overflow-hidden rounded-lg border'>
          <table className='divide-border min-w-full table-auto divide-y'>
            <PigHeader />
            <tbody className='divide-border divide-y bg-white'>
              {pigs.map(pig => (
                <PigItem key={pig.id} pig={pig} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='p-normal-padding flex flex-1 flex-col gap-6 bg-transparent pt-0'>
        <span className='text-xl font-bold'>우리 농장 배급 기록</span>
        <div className='flex flex-col gap-3'>
          {feed &&
            feed.map(n => (
              <NotificationItem key={n.id} {...n} icon={SpoonIcon} />
            ))}
        </div>
      </div>
    </>
  );
}

const PigHeader = () => (
  <thead className='bg-sub/20'>
    <tr>
      {PIG_TABLE.map(({ key, width, label }) => (
        <th
          key={key}
          scope='col'
          className={cn(width, 'text-light py-2 text-center font-medium')}
        >
          {label}
        </th>
      ))}
    </tr>
  </thead>
);

const PigItem = ({ pig }: { pig: Pig }) => {
  return (
    <tr className='hover:bg-sub cursor-pointer'>
      {PIG_TABLE.map(({ key, width }, i) => (
        <td
          key={key}
          className={cn(
            width,
            'p-2 text-center whitespace-nowrap',
            i === PIG_TABLE.length - 1 ? '' : 'border-border border-r-[1px]',
          )}
        >
          {pig[key as keyof Pig]}
        </td>
      ))}
    </tr>
  );
};
