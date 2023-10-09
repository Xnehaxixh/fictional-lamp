import React from "react";
import {
  controlCodeBlocksConfig,
  eventsCodeBlocksConfig,
  looksCodeBlocksConfig,
  motionCodeBlocksConfig
} from "../../../../components/CodeBlocks";
import { DraggableItemWithData } from "../../../../components/DndComponents/DraggableItemWithData";
import { withColorWrapper } from "../../../../hocs/WrapBlockWithColor";
import { NAV_CONFIG } from "./Sidebar.constants";

export const BlocksContainer = ({
  selectedTab,
}: {
  selectedTab: string;
}) => {
  const blocksContainerConfig = {
    [NAV_CONFIG.motion.name]: motionCodeBlocksConfig,
    [NAV_CONFIG.looks.name]: looksCodeBlocksConfig,
    [NAV_CONFIG.control.name]: controlCodeBlocksConfig,
    [NAV_CONFIG.event.name]: eventsCodeBlocksConfig,
  };

  return (
    <div className="w-80 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {Object.entries(blocksContainerConfig).map(([tab, codeBlockConfig]) => {
        if (selectedTab === tab) {
          return (
            <React.Fragment key={tab}>
              <div className="font-bold"> {tab} </div>
              <div>
                {codeBlockConfig.map((block) => (
                  <DraggableItemWithData
                    key={block.key}
                    id={block.key}
                    type={block.type}
                    Component={withColorWrapper(block.Component, block.type)}
                    defaultData={block.defaultData}
                  />
                ))}
              </div>
            </React.Fragment>
          );
        }

        return null;
      })}
    </div>
  );
};
