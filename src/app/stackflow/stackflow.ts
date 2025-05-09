import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import { FarmScreen } from '@/screen/farm/ui';
import { HomeScreen } from '@/screen/home/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeScreen,
    FarmScreen,
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
