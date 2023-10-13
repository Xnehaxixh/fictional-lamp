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
import { IFlowData, IMidAreaElements } from "./Home.types";
import { MidArea } from "./components/MidArea";
import { PreviewArea } from "./components/PreviewArea";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";

export const Home = (): JSX.Element => {
  const [elements, setElements] = useState<IMidAreaElements[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sprite, setSprite] = useState('cat');

  // Refs
  const flowData = useRef<Array<IFlowData>>([]);

  // Sprite Helpers
  const handleSpriteChange = (sprite: string) => {
    setSprite(sprite);
  }


  // Element & FLow Data Helpers
  const addElementAndFlowData = (element: IMidAreaElements) => {
    const newFlowId = nanoid();

    setElements([
      ...elements,
      ...[
        {
          ...element,
          id: newFlowId,
        },
      ],
    ]);

    const currentFlowData = {
      id: newFlowId,
      category: element.category,
      type: element.type,
      data: element.data,
    };

    flowData.current.push(currentFlowData);
  }

  const removeElementAndFlowData = (id: string) => {
    const tempElements = elements.filter((element) => element.id !== id);
    const tempFlowData = flowData.current.filter((item) => item.id !== id);

    setElements(tempElements);
    flowData.current = tempFlowData;
  }

  // Dnd Helpers
  const handleDragEnd = (event: DragEndEvent) => {
    const currentElement = event.active.data.current as IMidAreaElements;

    if (event.over && currentElement) {
      addElementAndFlowData(currentElement);
    };
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  return (
    <div className="h-full flex flex-col">
      <TopBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <div className="h-full overflow-hidden flex flex-row">
        <div className="flex-1 h-full overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Sidebar />
            <MidArea
              elements={elements}
              flowData={flowData}
              removeElementAndFlowData={removeElementAndFlowData}
            />
          </DndContext>
        </div>
        <div className="w-1/3 h-full overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea flowData={flowData} isPlaying={isPlaying} setIsPlaying={setIsPlaying} sprite={sprite} />
        </div>
        <ChangeSpriteButton handleSpriteChange={handleSpriteChange} />
      </div>
    </div>
  );
};
