import { useDraggable } from "@dnd-kit/core";
import React, { CSSProperties } from "react";

export const DraggableItem = ({ id, type, title }: {
  id: string;
  type: string;
  title: string;
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: {
        id,
        type,
        title,
      },
    });

  const style: CSSProperties | undefined = isDragging
    ? {
      position: "absolute",
      transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
      cursor: "move",
    }
    : {
      cursor: "pointer",
    };

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {title}
      </div>
      {isDragging && <div className="!hidden">{title}</div>}
    </>
  );
};
