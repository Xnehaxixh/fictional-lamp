import { DndContext, DragEndEvent, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React from "react";
import { DroppableArea } from "../../../../components/DndComponents/DroppableArea";
import { SortableItem } from "../../../../components/DndComponents/SortableItem";
import { pointerSensorConfig } from "../../../../components/DndComponents/config";
import { blockContextMenuOptions, contextMenuConfig } from "../../../../constants/contextMenu.constants";
import { WithContextMenu } from "../../../../hocs/WithContextMenu";
import { IFlowData, IMidAreaElements } from "../../Home.types";

export const MidArea = ({
  elements,
  flowData,
  removeElementAndFlowData,
  updateElementsAndFlowData,
}: {
  elements: IMidAreaElements[];
  flowData: React.MutableRefObject<Array<IFlowData>>;
  removeElementAndFlowData: (id: string) => void;
  updateElementsAndFlowData: (elements: IMidAreaElements[], flowData: Array<IFlowData>) => void;
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
        <SortableItem key={element.id} id={element.id}>
          {BlockWithContextMenu && (
            <BlockWithContextMenu
              data={flowData.current[index].data}
              onFieldValueChange={(fieldName, value) => {
                updateFlowDataById(element.id, fieldName, value);
              }}
            />
          )}
        </SortableItem>
      );
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, pointerSensorConfig),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      let elementsCopy = [...elements];
      let flowDataCopy = [...flowData.current];

      const oldIndex = elementsCopy.map((element) => element.id).indexOf(active.id as string);
      const newIndex = elementsCopy.map((element) => element.id).indexOf(over.id as string);

      elementsCopy = arrayMove(elementsCopy, oldIndex, newIndex);
      flowDataCopy = arrayMove(flowDataCopy, oldIndex, newIndex);

      updateElementsAndFlowData(elementsCopy, flowDataCopy);
    }
  }

  return (
    <div className="flex-1 h-full overflow-auto">
      <DroppableArea id="droppable-1">
        <div className="max-w-xs">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={elements}
              strategy={verticalListSortingStrategy}
            >
              {renderElements()}
            </SortableContext>
          </DndContext>
        </div>
      </DroppableArea>
    </div>
  );
};
