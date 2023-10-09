import { useDroppable } from "@dnd-kit/core";
import React from "react";

export const DroppableArea = ({ id, children }: {
  id: string;
  children: React.ReactNode;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className="block h-full w-full" ref={setNodeRef}>
      {children}
      {isOver && <div className="w-80 bg-gray-500 text-white px-2 py-1 my-2 text-sm opacity-50">Drop Here</div>}
    </div>
  );
};
