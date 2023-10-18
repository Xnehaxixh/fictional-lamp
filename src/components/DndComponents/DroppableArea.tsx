import { useDroppable } from "@dnd-kit/core";
import React from "react";

export const DroppableArea = ({ id, children, className }: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className={className}>
      {children}
      {isOver && <div className="rounded w-full bg-gray-500 text-white px-2 py-1 my-2 text-sm opacity-50">Drop Here</div>}
    </div>
  );
};
