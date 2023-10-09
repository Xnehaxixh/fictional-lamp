import React from "react";
import { BlockTypeNav } from "./BlockTypeNav";
import { BlocksContainer } from "./BlocksContainer";
import { NAV_CONFIG } from "./Sidebar.constants";

export const Sidebar = () => {
  const [selectedTab, setSelectedTab] = React.useState(NAV_CONFIG.motion.name);

  return (
    <div
      className="flex flex-row"
    >
      <BlockTypeNav selectedTab={selectedTab} setSelectedTab={(tab) => {
        setSelectedTab(tab);
      }} />
      <BlocksContainer selectedTab={selectedTab} />
    </div>
  )
};
