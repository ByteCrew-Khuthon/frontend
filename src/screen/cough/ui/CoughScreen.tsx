import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { CoughContainer } from '@/widgets/cough/ui';

export default function CoughScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={TitleAppBar('기침 상태')}>
        <div className='scrollbar-hide container-mobile gap-y-normal-padding flex size-fit h-screen flex-col overflow-scroll overflow-y-scroll'>
          <CoughContainer />
        </div>
      </AppScreen>
    </div>
  );
}
