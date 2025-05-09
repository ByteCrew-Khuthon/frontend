import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { HomeContainer } from '@/widgets/home/ui';
import { AppBar } from '@/shared/ui';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';

export default function HomeScreen() {
  const { push } = useFlow();

  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={AppBar(() => push(PATH.NOTICE, {}))}>
        <div className='from-sub to-point absolute -z-1 h-[40%] w-full bg-gradient-to-b' />
        <div className='scrollbar-hide container-mobile gap-y-normal-padding p-normal-padding relative flex size-full flex-col overflow-y-scroll pt-4'>
          <HomeContainer />
        </div>
      </AppScreen>
    </div>
  );
}
