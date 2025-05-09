import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { FarmContainer } from '@/widgets/farm/ui';
import { TitleAppBar } from '@/shared/ui';

export default function FarmScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={TitleAppBar('농장 정보')}>
        <div className='scrollbar-hide container-mobile gap-y-normal-padding p-normal-padding flex size-full flex-col overflow-scroll overflow-y-scroll'>
          <FarmContainer />
        </div>
      </AppScreen>
    </div>
  );
}
