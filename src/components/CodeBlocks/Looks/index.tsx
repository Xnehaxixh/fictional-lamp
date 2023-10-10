import React from "react";
import { FIELD_CONFIG } from "../../../constants/codeBlocks.constants";
import { IBlockConfig, IConfigBlockProps } from "../CodeBlocks.types";
import { SelectInput } from "../SelectInput/SelectInput";
import { TextInput } from "../TextInput";

export const SayBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"say "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.say.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      size="medium"
    />
  </>
);

export const SayForBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"say "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.sayFor.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      size="medium"
    />
    {" for"}
    <TextInput
      fieldName={FIELD_CONFIG.looks.sayFor.fields.duration.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" secs"}
  </>
);

export const ThinkBlock = ({ data, onFieldValueChange }: IConfigBlockProps) => (
  <>
    {"think "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.think.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      size="medium"
    />
  </>
);

export const ThinkForBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"think "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.thinkFor.fields.message.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      size="medium"
    />
    {" for"}
    <TextInput
      fieldName={FIELD_CONFIG.looks.thinkFor.fields.duration.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" secs"}
  </>
);

export const SwitchCostumeBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"switch costume to "}
    <SelectInput
      fieldName={FIELD_CONFIG.looks.switchCostume.fields.costume.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "costume1", label: "costume1" },
        { value: "costume2", label: "costume2" },
      ]}
    />
  </>
);

export const NextCostumeBlock = () => <>{"next costume"}</>;

export const SwitchBackdropBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"switch backdrop to "}
    <SelectInput
      fieldName={FIELD_CONFIG.looks.switchBackdrop.fields.backdrop.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "backdrop1", label: "backdrop1" },
        { value: "backdrop2", label: "backdrop2" },
      ]}
    />
  </>
);

export const NextBackdropBlock = () => <>{"next backdrop"}</>;

export const ChangeSizeBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"change size by "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.changeSize.fields.size.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {"%"}
  </>
);

export const SetSizeBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"set size to "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.setSize.fields.size.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {"%"}
  </>
);

export const ChangeColorEffectBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"change "}
    <SelectInput
      fieldName={FIELD_CONFIG.looks.changeColorEffect.fields.effect.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "color", label: "color" },
        { value: "fisheye", label: "fisheye" },
        { value: "whirl", label: "whirl" },
        { value: "pixelate", label: "pixelate" },
        { value: "mosaic", label: "mosaic" },
        { value: "brightness", label: "brightness" },
        { value: "ghost", label: "ghost" },
      ]}
    />
    {" effect by "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.changeColorEffect.fields.value.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const SetColorEffectBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"set "}
    <SelectInput
      fieldName={FIELD_CONFIG.looks.setColorEffect.fields.effect.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "color", label: "color" },
        { value: "fisheye", label: "fisheye" },
        { value: "whirl", label: "whirl" },
        { value: "pixelate", label: "pixelate" },
        { value: "mosaic", label: "mosaic" },
        { value: "brightness", label: "brightness" },
        { value: "ghost", label: "ghost" },
      ]}
    />
    {" effect to "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.setColorEffect.fields.value.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const ClearEffectsBlock = () => <>{"clear graphic effects"}</>;

export const ShowBlock = () => (
  <>{"show"}</>
);

export const HideBlock = () => (
  <>{"hide"}</>
);

export const GoToLayerBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"go to layer "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.goToLayer.fields.layer.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
  </>
);

export const GoForwardLayersBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => (
  <>
    {"go "}
    <TextInput
      fieldName={FIELD_CONFIG.looks.goForwardLayers.fields.layers.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
    />
    {" layers"}
  </>
);

export const CostumeNumberBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => <>
    {"costume "}
    <SelectInput
      fieldName={FIELD_CONFIG.looks.costumeNumber.fields.identifier.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "number", label: "number" },
        { value: "name", label: "name" },
      ]}
    />
  </>;

export const BackdropNumberBlock = ({
  data,
  onFieldValueChange,
}: IConfigBlockProps) => <>
    {"backdrop"}
    <SelectInput
      fieldName={FIELD_CONFIG.looks.backdropNumber.fields.identifier.name}
      data={data}
      onFieldValueChange={onFieldValueChange}
      options={[
        { value: "number", label: "number" },
        { value: "name", label: "name" },
      ]}
    />
  </>;

export const SizeBlock = () => (
  <>{"size"}</>
);

export const looksCodeBlocksConfig: IBlockConfig[] = [
  {
    key: FIELD_CONFIG.looks.sayFor.name,
    type: "looks",
    Component: SayForBlock,
    defaultData: {
      message: "Hello!",
      duration: 2,
    },
  },
  {
    key: FIELD_CONFIG.looks.say.name,
    type: "looks",
    Component: SayBlock,
    defaultData: {
      message: "Hello!",
    },
  },
  {
    key: FIELD_CONFIG.looks.thinkFor.name,
    type: "looks",
    Component: ThinkForBlock,
    defaultData: {
      message: "Hmm...",
      duration: 2,
    },
  },
  {
    key: FIELD_CONFIG.looks.think.name,
    type: "looks",
    Component: ThinkBlock,
    defaultData: {
      message: "Hmm...",
    },
  },
  {
    key: FIELD_CONFIG.looks.switchCostume.name,
    type: "looks",
    Component: SwitchCostumeBlock,
    defaultData: {
      costume: "costume1",
    },
  },
  {
    key: FIELD_CONFIG.looks.nextCostume.name,
    type: "looks",
    Component: NextCostumeBlock,
  },
  {
    key: FIELD_CONFIG.looks.switchBackdrop.name,
    type: "looks",
    Component: SwitchBackdropBlock,
    defaultData: {
      backdrop: "backdrop1",
    },
  },
  {
    key: FIELD_CONFIG.looks.nextBackdrop.name,
    type: "looks",
    Component: NextBackdropBlock,
  },
  {
    key: FIELD_CONFIG.looks.changeSize.name,
    type: "looks",
    Component: ChangeSizeBlock,
    defaultData: {
      size: 10,
    },
  },
  {
    key: FIELD_CONFIG.looks.setSize.name,
    type: "looks",
    Component: SetSizeBlock,
    defaultData: {
      size: 100,
    },
  },
  {
    key: FIELD_CONFIG.looks.changeColorEffect.name,
    type: "looks",
    Component: ChangeColorEffectBlock,
    defaultData: {
      effect: "color",
      value: 25,
    },
  },
  {
    key: FIELD_CONFIG.looks.setColorEffect.name,
    type: "looks",
    Component: SetColorEffectBlock,
    defaultData: {
      effect: "color",
      value: 25,
    },
  },
  {
    key: FIELD_CONFIG.looks.clearEffects.name,
    type: "looks",
    Component: ClearEffectsBlock,
  },
  {
    key: FIELD_CONFIG.looks.show.name,
    type: "looks",
    Component: ShowBlock,
  },
  {
    key: FIELD_CONFIG.looks.hide.name,
    type: "looks",
    Component: HideBlock,
  },
  {
    key: FIELD_CONFIG.looks.goToLayer.name,
    type: "looks",
    Component: GoToLayerBlock,
    defaultData: {
      layer: 1,
    },
  },
  {
    key: FIELD_CONFIG.looks.goForwardLayers.name,
    type: "looks",
    Component: GoForwardLayersBlock,
    defaultData: {
      layers: 1,
    },
  },
  {
    key: FIELD_CONFIG.looks.costumeNumber.name,
    type: "looks",
    Component: CostumeNumberBlock,
    defaultData: {
      identifier: "number",
    },
  },
  {
    key: FIELD_CONFIG.looks.backdropNumber.name,
    type: "looks",
    Component: BackdropNumberBlock,
    defaultData: {
      identifier: "number",
    },
  },
  {
    key: FIELD_CONFIG.looks.size.name,
    type: "looks",
    Component: SizeBlock,
  },
];
