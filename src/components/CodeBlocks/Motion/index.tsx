import React from "react";
import { FIELD_CONFIG, automaticValueOptions } from "../../../constants/codeBlocks.constants";
import { Icon } from "../../Icon";
import { IBlockConfig, IConfigBlockProps } from "../CodeBlocks.types";
import { SelectInput } from "../SelectInput/SelectInput";
import { TextInput } from "../TextInput";

export const MoveStepsBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"Move "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.moveSteps.fields.steps.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" steps"}
  </>
);

export const TurnRightBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"Turn "}
    <Icon name="redo" size={15} className="text-white-600 mx-2" />
    <TextInput
      fieldName={FIELD_CONFIG.motion.turnRight.fields.steps.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" degrees"}
  </>
);

export const TurnLeftBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"Turn "}
    <Icon name="undo" size={15} className="text-white-600 mx-2" />
    <TextInput
      fieldName={FIELD_CONFIG.motion.turnLeft.fields.steps.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" degrees"}
  </>
);

export const GoToAutomaticPositionBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"go to "}
    <SelectInput
      fieldName={FIELD_CONFIG.motion.goToAutomaticPosition.fields.position.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={automaticValueOptions}
    />
  </>
);

export const GoToManualPositionBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"go to x: "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.goToManualPosition.fields.x.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" y: "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.goToManualPosition.fields.y.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

//

export const GlideToAutomaticPositionBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"glide "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.glideToAutomaticPosition.fields.secs.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" secs to "}
    <SelectInput
      fieldName={FIELD_CONFIG.motion.glideToAutomaticPosition.fields.position.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={automaticValueOptions}
    />
  </>
);

export const GlideToManualPositionBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"glide "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.glideToManualPosition.fields.secs.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" secs to x: "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.glideToManualPosition.fields.x.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" y: "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.glideToManualPosition.fields.y.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const PointInManualDirectionBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"point in direction "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.pointInManualDirection.fields.direction.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const PointInAutomaticDirectionBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"point towards "}
    <SelectInput
      fieldName={FIELD_CONFIG.motion.pointInAutomaticDirection.fields.position.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={automaticValueOptions}
    />
  </>
);

export const ChangeXBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"change x by "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.changeX.fields.x.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const SetXBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"set x to "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.setX.fields.x.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const ChangeYBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"change y by "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.changeY.fields.y.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const SetYBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"set y to "}
    <TextInput
      fieldName={FIELD_CONFIG.motion.setY.fields.y.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const BounceOnEdgeBlock = () => <>{"if on edge, bounce"}</>;

export const SetRotationStyleBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"set rotation style "}
    <SelectInput
      fieldName={FIELD_CONFIG.motion.setRotationStyle.fields.style.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "left-right", label: "left-right" },
        { value: "don't rotate", label: "don't rotate" },
        { value: "all around", label: "all around" },
      ]}
    />
  </>
);

export const XPositionBlock = () => <>{"x position"}</>;

export const YPositionBlock = () => <>{"y position"}</>;

export const DirectionBlock = () => <>{"direction "}</>;

export const motionCodeBlocksConfig: IBlockConfig[] = [
  {
    key: FIELD_CONFIG.motion.moveSteps.name,
    type: "motion",
    Component: MoveStepsBlock,
    defaultData: {
      steps: 10,
    },
  },
  {
    key: FIELD_CONFIG.motion.turnRight.name,
    type: "motion",
    Component: TurnRightBlock,
    defaultData: {
      steps: 15,
    },
  },
  {
    key: FIELD_CONFIG.motion.turnLeft.name,
    type: "motion",
    Component: TurnLeftBlock,
    defaultData: {
      steps: 15,
    },
  },
  {
    key: FIELD_CONFIG.motion.goToAutomaticPosition.name,
    type: "motion",
    Component: GoToAutomaticPositionBlock,
    defaultData: {
      position: "mouse-pointer",
    },
  },
  {
    key: FIELD_CONFIG.motion.goToManualPosition.name,
    type: "motion",
    Component: GoToManualPositionBlock,
    defaultData: {
      x: 0,
      y: 0,
    },
  },
  {
    key: FIELD_CONFIG.motion.glideToAutomaticPosition.name,
    type: "motion",
    Component: GlideToAutomaticPositionBlock,
    defaultData: {
      secs: 1,
      position: "mouse-pointer",
    },
  },
  {
    key: FIELD_CONFIG.motion.glideToManualPosition.name,
    type: "motion",
    Component: GlideToManualPositionBlock,
    defaultData: {
      secs: 1,
      x: 0,
      y: 0,
    },
  },
  {
    key: FIELD_CONFIG.motion.pointInManualDirection.name,
    type: "motion",
    Component: PointInManualDirectionBlock,
    defaultData: {
      direction: 90,
    },
  },
  {
    key: FIELD_CONFIG.motion.pointInAutomaticDirection.name,
    type: "motion",
    Component: PointInAutomaticDirectionBlock,
    defaultData: {
      position: "mouse-pointer",
    },
  },
  {
    key: FIELD_CONFIG.motion.changeX.name,
    type: "motion",
    Component: ChangeXBlock,
    defaultData: {
      x: 10,
    },
  },
  {
    key: FIELD_CONFIG.motion.setX.name,
    type: "motion",
    Component: SetXBlock,
    defaultData: {
      x: 0,
    },
  },
  {
    key: FIELD_CONFIG.motion.changeY.name,
    type: "motion",
    Component: ChangeYBlock,
    defaultData: {
      y: 10,
    },
  },
  {
    key: FIELD_CONFIG.motion.setY.name,
    type: "motion",
    Component: SetYBlock,
    defaultData: {
      y: 0,
    },
  },
  {
    key: FIELD_CONFIG.motion.bounceOnEdge.name,
    type: "motion",
    Component: BounceOnEdgeBlock,
  },
  {
    key: FIELD_CONFIG.motion.setRotationStyle.name,
    type: "motion",
    Component: SetRotationStyleBlock,
    defaultData: {
      style: "left-right",
    },
  },
  {
    key: FIELD_CONFIG.motion.xPosition.name,
    type: "motion",
    Component: XPositionBlock,
  },
  {
    key: FIELD_CONFIG.motion.yPosition.name,
    type: "motion",
    Component: YPositionBlock,
  },
  {
    key: FIELD_CONFIG.motion.direction.name,
    type: "motion",
    Component: DirectionBlock,
  },
];
