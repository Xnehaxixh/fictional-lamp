import React from 'react';

export const AsUnDraggable = <T,>(Component: React.FC<T>) => (
  props: T
) => {
  return <Component {...props}
    onClick={(e: React.MouseEvent) => e.stopPropagation()}
    onDrag={(e: React.DragEvent) => e.stopPropagation()}
  />;
}
