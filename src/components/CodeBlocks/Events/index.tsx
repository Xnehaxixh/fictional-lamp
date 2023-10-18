import React from "react";
import { FIELD_CONFIG } from "../../../constants/codeBlocks.constants";
import { Icon } from "../../Icon";
import { IBlockConfig, IConfigBlockProps } from "../CodeBlocks.types";
import { SelectInput } from "../SelectInput/SelectInput";
import { TextInput } from "../TextInput";

export const WhenGreenFlagBlock = () => (
  <>
    {"when "}
    <Icon name="flag" size={15} className="text-green-600 mx-2" />
    {"clicked"}
  </>
);

export const WhenKeyPressedBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"when "}
    <SelectInput
      fieldName={FIELD_CONFIG.events.whenKeyPressed.fields.key.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "space", label: "space" },
        { value: "up arrow", label: "up arrow" },
        { value: "down arrow", label: "down arrow" },
        { value: "right arrow", label: "right arrow" },
        { value: "left arrow", label: "left arrow" },
        { value: "any", label: "any" },
      ]}
    />
    {"key pressed"}
  </>
);

export const WhenSpriteClickedBlock = () => <>{"when this sprite clicked"}</>;

export const WhenBackdropSwitchesBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"when backdrop switches to "}
    <TextInput
      fieldName={FIELD_CONFIG.events.whenBackdropSwitches.fields.backdrop.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const WhenCriteriaGreaterThanBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"when "}
    <SelectInput
      fieldName={FIELD_CONFIG.events.whenCriteriaGreaterThan.fields.criteria.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "timer", label: "timer" },
        { value: "loudness", label: "loudness" },
      ]}
    />
    {" > "}
    <TextInput
      fieldName={FIELD_CONFIG.events.whenCriteriaGreaterThan.fields.value.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const WhenIReceiveBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"when I receive "}
    <SelectInput
      fieldName={FIELD_CONFIG.events.whenIReceive.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "message", label: "message" },
      ]}
    />
  </>
);

export const BroadcastBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"broadcast "}
    <SelectInput
      fieldName={FIELD_CONFIG.events.broadcast.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "message", label: "message" },
      ]}
    />
  </>
);

export const BroadcastAndWaitBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"broadcast "}
    <SelectInput
      fieldName={FIELD_CONFIG.events.broadcastAndWait.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "message", label: "message" },
      ]}
    />
    {" and wait"}
  </>
);

export const eventsCodeBlocksConfig: IBlockConfig[] = [
  {
    key: FIELD_CONFIG.events.whenGreenFlag.name,
    category: "event",
    Component: WhenGreenFlagBlock,
  },
  {
    key: FIELD_CONFIG.events.whenKeyPressed.name,
    category: "event",
    Component: WhenKeyPressedBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.events.whenSpriteClicked.name,
    category: "event",
    Component: WhenSpriteClickedBlock,
  },
  {
    key: FIELD_CONFIG.events.whenBackdropSwitches.name,
    category: "event",
    Component: WhenBackdropSwitchesBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.events.whenCriteriaGreaterThan.name,
    category: "event",
    Component: WhenCriteriaGreaterThanBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.events.whenIReceive.name,
    category: "event",
    Component: WhenIReceiveBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.events.broadcast.name,
    category: "event",
    Component: BroadcastBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.events.broadcastAndWait.name,
    category: "event",
    Component: BroadcastAndWaitBlock,
    disabled: true,
  },
];
