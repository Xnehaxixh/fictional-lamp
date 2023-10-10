import React from "react";
import { IFlowData, IMidAreaElements } from "../../Home.types";
import { DroppableArea } from "../DndComponents/DroppableArea";

export const MidArea = ({
  elements,
  flowData,
  setFlowData,
}: {
  elements: IMidAreaElements[];
  flowData: Array<IFlowData>;
  setFlowData: React.Dispatch<React.SetStateAction<IFlowData[]>>;
}) => {
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

  const renderElement = () => {
    return elements.map((element, index) => {
      const { Component } = element;

      return (
        <div key={element.id}>
          {Component && (
            <Component
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
          {renderElement()}
        </div>
      </DroppableArea>
    </div>
  );
};
