import { notifications } from '@/mock';
import { CardItem } from '@/shared/ui';
import { cn, getDate } from '@/shared/utils';
import type { Notification } from '@/widgets/farm/types';
import React from 'react';
import ReactFrappeChart from 'react-frappe-charts';

export default function CoughContainer() {
  return (
    <>
      <div className='p-normal-padding flex flex-col gap-6 bg-white pt-4'>
        <span className='text-xl font-bold'>최근 1주 기침 상황</span>
        <div className='border-border overflow-hidden rounded-lg border'>
          <ReactFrappeChart
            type='line'
            colors={['#FF939F']}
            axisOptions={{ xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 }}
            height={250}
            data={{
              labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
            }}
          />
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
