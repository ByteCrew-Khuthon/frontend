import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { TitleAppBar } from '@/shared/ui';
import { MapContainer } from '@/widgets/map/ui';

export default function MapScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={TitleAppBar('질병 분포')}>
        <div className='scrollbar-hide container-mobile gap-y-normal-padding flex size-fit h-screen flex-col overflow-scroll overflow-y-scroll'>
          <MapContainer />
        </div>
      </AppScreen>
    </div>
  );
}
