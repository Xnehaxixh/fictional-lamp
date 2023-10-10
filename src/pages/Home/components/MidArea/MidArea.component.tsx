import React from "react";
import { blockContextMenuOptions, contextMenuClassConfig } from "../../../../constants/contextMenu.constants";
import { WithContextMenu } from "../../../../hocs/WithContextMenu";
import { IFlowData, IMidAreaElements } from "../../Home.types";
import { DroppableArea } from "../DndComponents/DroppableArea";

export const MidArea = ({
  elements,
  flowData,
  setFlowData,
  removeElementAndFlowData,
}: {
  elements: IMidAreaElements[];
  flowData: Array<IFlowData>;
  setFlowData: React.Dispatch<React.SetStateAction<IFlowData[]>>;
  removeElementAndFlowData: (id: string) => void;
}) => {
  // FLow Data Helpers
  const updateFlowDataById = (id: string, fieldName: string, value: string) => {
    const tempFlowData = flowData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          data: {
            ...(item?.data || {}),
            [fieldName]: value,
          },
        };
      }
      return item;
    });

    setFlowData(tempFlowData);
  };

  // Render Helpers
  const renderElements = () => {
    return elements.map((element, index) => {
      const { Component: Block } = element;
      const BlockWithContextMenu = WithContextMenu(
        Block,
        element.id,
        blockContextMenuOptions,
        (_event, _data) => {
          removeElementAndFlowData(element.id);
        },
        contextMenuClassConfig,
      );

      return (
        <div key={element.id}>
          {BlockWithContextMenu && (
            <BlockWithContextMenu
              data={flowData[index].data}
              onFieldValueChange={(fieldName, value) => {
                updateFlowDataById(element.id, fieldName, value);
              }}
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex-1 h-full overflow-auto">
      <DroppableArea id="droppable-1">
        <div className="max-w-xs">
          {renderElements()}
        </div>
      </DroppableArea>
    </div>
  );
};
