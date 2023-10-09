import React from "react";
import { AsUnDraggable } from "../../../hocs/AsUnDraggable";
import { IConfigBlockProps } from "../CodeBlocks.types";

const TextInputBase = ({
  fieldName,
  data,
  onFieldValueChange,
  size = "small",
}: IConfigBlockProps & {
  fieldName: string;
  size?: "small" | "medium" | "large";
}) => {
  let twWidth = "w-10";

  if (size === "medium") {
    twWidth = "w-20";
  } else if (size === "large") {
    twWidth = "w-40";
  }

  return (
    <input
      style={{ color: "#000", textAlign: "center" }}
      onChange={(e) => onFieldValueChange(fieldName, e.target.value)}
      value={data[fieldName] as string}
      name={fieldName}
      className={`${twWidth} mx-2 rounded-full`}
    />
  );
};

export const TextInput = AsUnDraggable(TextInputBase);
