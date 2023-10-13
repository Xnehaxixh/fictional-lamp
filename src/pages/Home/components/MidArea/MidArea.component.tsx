import React from "react";
import { DroppableArea } from "../../../../components/DndComponents/DroppableArea";
import { blockContextMenuOptions, contextMenuConfig } from "../../../../constants/contextMenu.constants";
import { WithContextMenu } from "../../../../hocs/WithContextMenu";
import { IFlowData, IMidAreaElements } from "../../Home.types";

export const MidArea = ({
  elements,
  flowData,
  removeElementAndFlowData,
}: {
  elements: IMidAreaElements[];
  flowData: React.MutableRefObject<Array<IFlowData>>;
  removeElementAndFlowData: (id: string) => void;
}) => {
  // FLow Data Helpers
  const updateFlowDataById = (id: string, fieldName: string, value: string) => {
    const tempFlowData = flowData.current.map((item) => {
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

    flowData.current = tempFlowData;
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
        contextMenuConfig,
      );

      return (
        <div key={element.id}>
          {BlockWithContextMenu && (
            <BlockWithContextMenu
              data={flowData.current[index].data}
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
