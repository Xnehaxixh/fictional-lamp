import React from "react";
import { AsUnDraggable } from "../../../hocs/AsUnDraggable";
import { IConfigBlockProps } from "../CodeBlocks.types";

export const SelectInputBase = ({
  fieldName,
  data,
  onFieldValueChange,
  options,
}: IConfigBlockProps & {
  fieldName: string;
  options: Array<{ value: string; label: string }>;
}) => {
  return (
    <select
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="border rounded-full text-white text-xs px-2 py-1 mx-1 cursor-pointer"
      name={fieldName}
      id={fieldName}
      onChange={(e) => onFieldValueChange(fieldName, e.target.value)}
      defaultValue={data[fieldName] as string}
    >
      {options.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};

export const SelectInput = AsUnDraggable(SelectInputBase);
