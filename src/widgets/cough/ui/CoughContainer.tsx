import { HazardIcon } from '@/asset/icons';
import { NotificationItem } from '@/shared/ui';

import { useFetchNotification } from '@/widgets/notification/api';
import React from 'react';
import ReactFrappeChart from 'react-frappe-charts';

export default function CoughContainer() {
  const { data } = useFetchNotification();
  const cough = data?.filter(d => d.title.includes('기침')) || [];

  return (
    <>
      <div className='p-normal-padding flex w-screen flex-col gap-3 bg-white pt-4'>
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
          {cough && cough.length === 0 ? (
            <p className='text-light text-center'>기침 기록이 없어요!</p>
          ) : (
            cough.map(c => (
              <NotificationItem key={c.id} {...c} icon={HazardIcon} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
