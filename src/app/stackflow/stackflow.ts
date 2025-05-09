import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import { FarmScreen } from '@/screen/farm/ui';
import { HomeScreen } from '@/screen/home/ui';
import { CoughScreen } from '@/screen/cough/ui';
import { MapScreen } from '@/screen/map/ui';
import { NotificationScreen } from '@/screen/notification/ui';
import { ReportScreen } from '@/screen/report/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeScreen,
    FarmScreen,
    CoughScreen,
    MapScreen,
    NotificationScreen,
    ReportScreen,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
      backgroundColor: '#f4f4f4',
    }),
  ],
  initialActivity: () => 'HomeScreen',
});
