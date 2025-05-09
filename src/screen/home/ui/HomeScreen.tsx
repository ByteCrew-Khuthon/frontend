import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { HomeContainer } from '@/widgets/home/ui';
import { AppBar } from '@/shared/ui';

export default function HomeScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen>
        <AppBar />
        <div className='from-sub to-point absolute -z-1 h-[45%] w-full bg-gradient-to-b' />
        <div className='scrollbar-hide container-mobile gap-y-normal-padding p-normal-padding relative flex size-full flex-col overflow-scroll overflow-y-scroll'>
          <HomeContainer />
        </div>
      </AppScreen>
    </div>
  );
}
