import React from "react";
import { FIELD_CONFIG } from "../../../constants/codeBlocks.constants";
import { IBlockConfig, IConfigBlockProps } from "../CodeBlocks.types";
import { SelectInput } from "../SelectInput/SelectInput";
import { TextInput } from "../TextInput";

export const WaitBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"wait "}
    <TextInput
      fieldName={FIELD_CONFIG.control.wait.fields.secs.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" secs"}
  </>
);

export const RepeatBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"repeat "}
    <TextInput
      fieldName={FIELD_CONFIG.control.repeat.fields.times.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const ForeverBlock = () => <>{"forever"}</>;

export const IfBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"if "}
    <TextInput
      fieldName={FIELD_CONFIG.control.if.fields.condition.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" then"}
  </>
);

export const IfElseBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"if "}
    <TextInput
      fieldName={FIELD_CONFIG.control.ifElse.fields.condition.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" then"}
  </>
);

export const WaitUntilBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"wait until "}
    <TextInput
      fieldName={FIELD_CONFIG.control.waitUntil.fields.condition.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const RepeatUntilBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"repeat until "}
    <TextInput
      fieldName={FIELD_CONFIG.control.repeatUntil.fields.condition.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const StopBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"stop "}
    <SelectInput
      fieldName={FIELD_CONFIG.control.stopAll.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "all", label: "all" },
        { value: "this script", label: "this script" },
        { value: "other scripts in sprite", label: "other scripts in sprite" },
      ]}
    />
  </>
);

export const WhenIStartAsACloneBlock = () => (
  <>{"when I start as a clone"}</>
);

export const CreateCloneOfBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"create clone of "}
    <TextInput
      fieldName={FIELD_CONFIG.control.createCloneOf.fields.sprite.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const DeleteThisCloneBlock = () => <>{"delete this clone"}</>;

export const controlCodeBlocksConfig: IBlockConfig[] = [
  {
    key: FIELD_CONFIG.control.wait.name,
    type: "control",
    Component: WaitBlock,
  },
  {
    key: FIELD_CONFIG.control.repeat.name,
    type: "control",
    Component: RepeatBlock,
  },
  {
    key: FIELD_CONFIG.control.forever.name,
    type: "control",
    Component: ForeverBlock,
  },
  {
    key: FIELD_CONFIG.control.if.name,
    type: "control",
    Component: IfBlock,
  },
  {
    key: FIELD_CONFIG.control.ifElse.name,
    type: "control",
    Component: IfElseBlock,
  },
  {
    key: FIELD_CONFIG.control.waitUntil.name,
    type: "control",
    Component: WaitUntilBlock,
  },
  {
    key: FIELD_CONFIG.control.repeatUntil.name,
    type: "control",
    Component: RepeatUntilBlock,
  },
  {
    key: FIELD_CONFIG.control.stopAll.name,
    type: "control",
    Component: StopBlock,
  },
  {
    key: FIELD_CONFIG.control.whenIStartAsAClone.name,
    type: "control",
    Component: WhenIStartAsACloneBlock,
  },
  {
    key: FIELD_CONFIG.control.createCloneOf.name,
    type: "control",
    Component: CreateCloneOfBlock,
  },
  {
    key: FIELD_CONFIG.control.deleteThisClone.name,
    type: "control",
    Component: DeleteThisCloneBlock,
  },
];

