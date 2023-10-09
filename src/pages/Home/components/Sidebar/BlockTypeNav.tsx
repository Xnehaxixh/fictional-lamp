import React from "react";
import { RoundIcon } from "../../../../components/RoundIcon";
import { HIGHLIGHTED_TAB_COLOR, NAV_CONFIG } from "./Sidebar.constants";

export const BlockTypeNav = ({
  selectedTab,
  setSelectedTab
}: {
  selectedTab: string,
  setSelectedTab: (tab: string) => void
}) => {
  return (
    <div className="w-16 bg-slate-800 flex flex-col border border-slate-300 h-full">
      <div className="w-16 bg-slate-800 flex flex-col justify-between items-center h-1/4 min-h-28">
        {(Object.keys(NAV_CONFIG)).map((key: keyof typeof NAV_CONFIG) => {
          const tab = NAV_CONFIG[key];
          return (
            <button
              key={key}
              type="button"
              className="flex flex-col items-center mb-3 cursor-pointer w-full py-2"
              onClick={() => {
                setSelectedTab(tab.name);
              }}
              style={{
                backgroundColor: selectedTab === tab.name ? HIGHLIGHTED_TAB_COLOR : "transparent",
              }}
            >
              <RoundIcon color={tab.color} />
              <p className="text-xs text-center">{tab.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
