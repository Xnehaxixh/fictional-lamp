import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import { ChangeSpriteButton } from "../../components/ChangeSpriteButton";
import { pointerSensorConfig } from "../../components/DndComponents/config";
import { IContainerFlowData, IElementsContainer, IFlowData, IMidAreaElement } from "./Home.types";
import { MidArea } from "./components/MidArea";
import { PreviewArea } from "./components/PreviewArea";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";

export const Home = (): JSX.Element => {
  const baseContainer = {
    id: nanoid(),
    elements: [],
  };
  const [containers, setContainers] = useState<IElementsContainer[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sprite, setSprite] = useState('cat');

  // Refs
  const containerFlowData = useRef<IContainerFlowData[]>([]);

  // Sprite Helpers
  const handleSpriteChange = (sprite: string) => {
    setSprite(sprite);
  };

  // Element & FLow Data Helpers
  const addElementAndFlowData = (containerId: string, element: IMidAreaElement) => {
    const containerIndex = containers.findIndex((container) => container.id === containerId);
    const newFlowId = nanoid();
    let elementsCopy = [...containers[containerIndex].elements];
    let containerFlowDataCopy = [...containerFlowData.current];

    elementsCopy = [
      ...elementsCopy,
      ...[
        {
          ...element,
          id: newFlowId,
        },
      ],
    ];

    setContainers([
      ...containers.slice(0, containerIndex),
      {
        ...containers[containerIndex],
        elements: elementsCopy,
      },
      ...containers.slice(containerIndex + 1),
    ]);

    const currentFlowData = {
      id: newFlowId,
      category: element.category,
      type: element.type,
      data: element.data,
    };

    containerFlowDataCopy = [
      ...containerFlowDataCopy.slice(0, containerIndex),
      {
        ...containerFlowDataCopy[containerIndex],
        data: [
          ...containerFlowDataCopy[containerIndex].data,
          currentFlowData,
        ],
      },
      ...containerFlowDataCopy.slice(containerIndex + 1),
    ];

    containerFlowData.current = containerFlowDataCopy;
  }

  const removeElementAndFlowData = (containerId: string, id: string) => {
    const containerIndex = containers.findIndex((container) => container.id === containerId);
    let elementsCopy = [...containers[containerIndex].elements];
    let containerFlowDataCopy = [...containerFlowData.current];
    let flowDataCopy = [...containerFlowDataCopy[containerIndex].data];

    elementsCopy = elementsCopy.filter((element) => element.id !== id);
    flowDataCopy = flowDataCopy.filter((item) => item.id !== id);

    setContainers([
      ...containers.slice(0, containerIndex),
      {
        ...containers[containerIndex],
        elements: elementsCopy,
      },
      ...containers.slice(containerIndex + 1),
    ]);

    containerFlowDataCopy = [
      ...containerFlowDataCopy.slice(0, containerIndex),
      {
        ...containerFlowDataCopy[containerIndex],
        data: flowDataCopy,
      },
      ...containerFlowDataCopy.slice(containerIndex + 1),
    ];

    containerFlowData.current = containerFlowDataCopy;
  }

  const updateElementsAndFlowData = (containerId: string, newElements: IMidAreaElement[], newFlowData: IFlowData[]) => {
    const containerIndex = containers.findIndex((container) => container.id === containerId);

    setContainers([
      ...containers.slice(0, containerIndex),
      {
        ...containers[containerIndex],
        elements: newElements,
      },
      ...containers.slice(containerIndex + 1),
    ]);

    containerFlowData.current = [
      ...containerFlowData.current.slice(0, containerIndex),
      {
        ...containerFlowData.current[containerIndex],
        data: newFlowData,
      },
      ...containerFlowData.current.slice(containerIndex + 1),
    ];
  };

  const addContainer = () => {
    setContainers([...containers, baseContainer]);
    containerFlowData.current = [...containerFlowData.current, { id: baseContainer.id, data: [] }];
  }

  const deleteContainer = (id: string) => {
    let containersCopy = [...containers];
    let containerFlowDataCopy = [...containerFlowData.current];

    containersCopy = containersCopy.filter((container) => container.id !== id);
    containerFlowDataCopy = containerFlowDataCopy.filter((item) => item.id !== id);

    setContainers(containersCopy);
    containerFlowData.current = containerFlowDataCopy;
  }

  // Dnd Helpers
  const handleDragEnd = (event: DragEndEvent) => {
    const currentElement = event.active.data.current as IMidAreaElement;
    const overContainerId = event.over?.id as string;

    if (overContainerId && currentElement) {
      addElementAndFlowData(overContainerId, currentElement);
    };
  };

  const sensors = useSensors(
    useSensor(PointerSensor, pointerSensorConfig),
  );

  return (
    <div className="h-full flex flex-col">
      <TopBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <div className="h-full overflow-hidden flex flex-row">
        <div className="flex-1 h-full overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Sidebar />
            <MidArea
              containers={containers}
              flowData={containerFlowData}
              removeElementAndFlowData={removeElementAndFlowData}
              updateElementsAndFlowData={updateElementsAndFlowData}
              addContainer={addContainer}
              deleteContainer={deleteContainer}
            />
          </DndContext>
        </div>
        <div className="w-1/3 h-full overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea flowData={containerFlowData} isPlaying={isPlaying} setIsPlaying={setIsPlaying} sprite={sprite} />
        </div>
        <ChangeSpriteButton handleSpriteChange={handleSpriteChange} />
      </div>
    </div>
  );
};
