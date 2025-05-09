import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { TitleAppBar } from '@/shared/ui';
import { ReportContainer } from '@/widgets/report/ui';

export default function ReportScreen() {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <AppScreen appBar={TitleAppBar('AI 농장 리포트')} backgroundColor='#fff'>
        <div className='scrollbar-hide p-normal-padding container-mobile gap-y-normal-padding flex h-full flex-col overflow-y-scroll pt-0'>
          <ReportContainer />
        </div>
      </AppScreen>
    </div>
  );
}
