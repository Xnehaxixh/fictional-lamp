import { useDraggable } from "@dnd-kit/core";
import React, { CSSProperties, useState } from "react";
import { IConfigBlockProps } from "../CodeBlocks/CodeBlocks.types";

export const DraggableItemWithData = ({
  id,
  type,
  Component,
  defaultData = {},
}: {
  id: string;
  type: string;
  Component: React.FC<IConfigBlockProps> | React.FC;
  defaultData?: Record<string, unknown>;
}) => {
  const [data, setData] = useState<Record<string, unknown>>(defaultData);
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: {
        id,
        type,
        Component,
        data,
      },
    });

  const style: CSSProperties | undefined = isDragging
    ? {
      position: "absolute",
      transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
      cursor: "move",
    }
    : {
      cursor: "grab",
    };

  const renderedNode = (
    <Component
      data={data}
      onFieldValueChange={(fieldName: string, value: string) => {
        setData({ ...data, [fieldName]: value });
      }}
    />
  );

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {renderedNode}
      </div>
      {isDragging && (
        <div style={{ display: "none !important" }}>{renderedNode}</div>
      )}
    </>
  );
};
