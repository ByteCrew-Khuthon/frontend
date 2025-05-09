import React from "react";

import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function HomeScreen() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <AppScreen>
        <div className="scrollbar-hide container-mobile gap-y-normal-spacing p-normal-padding pb-dock-height flex size-full flex-col overflow-scroll overflow-y-scroll"></div>
      </AppScreen>
    </div>
  );
}
