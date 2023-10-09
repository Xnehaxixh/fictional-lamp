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

export const Home = (): JSX.Element => {
  const [elements, setElements] = useState<IMidAreaElements[]>([]);
  const [flowData, setFlowData] = useState<Array<IFlowData>>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const currentElement = event.active.data.current as IMidAreaElements;

    if (event.over && currentElement) {
      const newFlowId = nanoid();

      setElements([
        ...elements,
        ...[
          {
            ...currentElement,
            id: newFlowId,
          },
        ],
      ]);

      const currentFlowData = {
        id: newFlowId,
        type: currentElement.type,
        data: currentElement.data,
      };

      setFlowData([...flowData, ...[currentFlowData]]);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
        <Sidebar />
        <MidArea
          elements={elements}
          flowData={flowData}
          setFlowData={setFlowData}
        />
      </div>
      <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
        <PreviewArea />
      </div>
    </DndContext>
  );
};
