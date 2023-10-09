import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { IFlowData, IMidAreaElements } from "./Home.types";
import { MidArea } from "./components/MidArea";
import { PreviewArea } from "./components/PreviewArea";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";

export const Home = (): JSX.Element => {
  const [elements, setElements] = useState<IMidAreaElements[]>([]);
  const [flowData, setFlowData] = useState<Array<IFlowData>>([]);

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
      type: element.type,
      data: element.data,
    };

    setFlowData([...flowData, ...[currentFlowData]]);
  }

  const removeElementAndFlowData = (id: string) => {
    const tempElements = elements.filter((element) => element.id !== id);
    const tempFlowData = flowData.filter((item) => item.id !== id);

    setElements(tempElements);
    setFlowData(tempFlowData);
  }

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
    <div className="flex flex-col">
      <TopBar />
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Sidebar />
            <MidArea
              elements={elements}
              flowData={flowData}
              setFlowData={setFlowData}
              removeElementAndFlowData={removeElementAndFlowData}
            />
          </DndContext>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
};
