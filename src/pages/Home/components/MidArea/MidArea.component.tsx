import { DndContext, DragEndEvent, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React from "react";
import { DroppableArea } from "../../../../components/DndComponents/DroppableArea";
import { SortableItem } from "../../../../components/DndComponents/SortableItem";
import { pointerSensorConfig } from "../../../../components/DndComponents/config";
import { Icon } from "../../../../components/Icon";
import { blockContextMenuOptions, contextMenuConfig } from "../../../../constants/contextMenu.constants";
import { WithContextMenu } from "../../../../hocs/WithContextMenu";
import { IContainerFlowData, IElementsContainer, IFlowData, IMidAreaElement } from "../../Home.types";

export const MidArea = ({
  containers,
  flowData,
  removeElementAndFlowData,
  updateElementsAndFlowData,
  addContainer,
  deleteContainer,
}: {
  containers: IElementsContainer[];
  flowData: React.MutableRefObject<IContainerFlowData[]>;
  removeElementAndFlowData: (containerId: string, id: string) => void;
  updateElementsAndFlowData: (containerId: string, elements: IMidAreaElement[], flowData: Array<IFlowData>) => void;
  addContainer: () => void;
  deleteContainer: (id: string) => void;
}) => {
  // Flow Data Helpers
  const updateFlowDataById = (flowDataContainerId: string, id: string, fieldName: string, value: string) => {
    const containerIndex = containers.findIndex((container) => container.id === flowDataContainerId);
    const containerFlowData = flowData.current[containerIndex].data;

    const tempFlowData = containerFlowData.map((item) => {
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

    flowData.current[containerIndex].data = tempFlowData;
  };

  // Render Helpers
  const renderElements = (container: IElementsContainer, flowData: IContainerFlowData['data']) => {
    return container.elements.map((element, index) => {
      const { Component: Block } = element;
      const BlockWithContextMenu = WithContextMenu(
        Block,
        element.id,
        blockContextMenuOptions,
        (_event, _data) => {
          removeElementAndFlowData(container.id, element.id);
        },
        contextMenuConfig,
      );

      return (
        <SortableItem key={element.id} id={element.id}>
          {BlockWithContextMenu && (
            <BlockWithContextMenu
              data={flowData[index].data}
              onFieldValueChange={(fieldName, value) => {
                updateFlowDataById(container.id, element.id, fieldName, value);
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

  const handleDragEnd = (containerId: string, event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const containerIndex = containers.findIndex((container) => container.id === containerId);
      let containerElements = containers[containerIndex].elements;
      let containerFlowData = flowData.current[containerIndex].data;

      const oldIndex = containerElements.map((element) => element.id).indexOf(active.id as string);
      const newIndex = containerElements.map((element) => element.id).indexOf(over.id as string);

      containerElements = arrayMove(containerElements, oldIndex, newIndex);
      containerFlowData = arrayMove(containerFlowData, oldIndex, newIndex);

      updateElementsAndFlowData(containerId, containerElements, containerFlowData);
    }
  }

  const renderContainer = (container: IElementsContainer, flowData: IContainerFlowData) => {
    return (
      <DroppableArea key={container.id} id={container.id} className="rounded bg-blue-100 w-full p-2 border-4 border-blue-200 col-span-1 row-span-1">
        <div className="rounded bg-blue-200 flex flex-row-reverse p-1 w-min ml-auto">
          <button type="button" onClick={() => deleteContainer(container.id)}>
            <Icon name="window-close" size={15} className="text-blue-300 hover:text-red-400" />
          </button>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => {
            handleDragEnd(container.id, event);
          }}
        >
          <SortableContext
            items={container.elements}
            strategy={verticalListSortingStrategy}
          >
            {renderElements(container, flowData.data)}
          </SortableContext>
        </DndContext>
      </DroppableArea>
    );
  };

  const AddNewElementsContainer = () => {
    return (
      <div className="rounded flex justify-center align-middle bg-blue-50 w-full border-4 border-dashed border-blue-200 ">
        <button className="text-blue-400 font-semibold h-full w-full" type="button" onClick={addContainer}>+ Container</button>
      </div>
    );
  };

  return (
    <div className="flex-1 h-full overflow-auto grid grid-cols-2 gap-2 p-2">
      {containers.map((container, index) => renderContainer(container, flowData.current[index]))}
      <AddNewElementsContainer />
    </div>
  );
};
