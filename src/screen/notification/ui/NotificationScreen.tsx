import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { TitleAppBar } from '@/shared/ui';
import { NotificaionContainer } from '@/widgets/notification/ui';

export default function NotificationScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={TitleAppBar('알림')} backgroundColor='#fff'>
        <div className='scrollbar-hide container-mobile gap-y-normal-padding flex h-full flex-col overflow-y-scroll'>
          <NotificaionContainer />
        </div>
      </AppScreen>
    </div>
  );
}
