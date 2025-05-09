import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { TitleAppBar } from '@/shared/ui';
import { NotificaionContainer } from '@/widgets/notification/ui';

export default function NotificationScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={TitleAppBar('알림')}>
        <div className='scrollbar-hide container-mobile gap-y-normal-padding flex size-fit h-screen flex-col overflow-scroll overflow-y-scroll'>
          <NotificaionContainer />
        </div>
      </AppScreen>
    </div>
  );
}
