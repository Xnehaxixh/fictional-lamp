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
    category: "looks",
    Component: SayForBlock,
    defaultData: {
      message: "Hello!",
      duration: 2,
    },
  },
  {
    key: FIELD_CONFIG.looks.say.name,
    category: "looks",
    Component: SayBlock,
    defaultData: {
      message: "Hello!",
    },
  },
  {
    key: FIELD_CONFIG.looks.thinkFor.name,
    category: "looks",
    Component: ThinkForBlock,
    defaultData: {
      message: "Hmm...",
      duration: 2,
    },
  },
  {
    key: FIELD_CONFIG.looks.think.name,
    category: "looks",
    Component: ThinkBlock,
    defaultData: {
      message: "Hmm...",
    },
  },
  {
    key: FIELD_CONFIG.looks.switchCostume.name,
    category: "looks",
    Component: SwitchCostumeBlock,
    disabled: true,
    defaultData: {
      costume: "costume1",
    },
  },
  {
    key: FIELD_CONFIG.looks.nextCostume.name,
    category: "looks",
    Component: NextCostumeBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.looks.switchBackdrop.name,
    category: "looks",
    Component: SwitchBackdropBlock,
    disabled: true,
    defaultData: {
      backdrop: "backdrop1",
    },
  },
  {
    key: FIELD_CONFIG.looks.nextBackdrop.name,
    category: "looks",
    Component: NextBackdropBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.looks.changeSize.name,
    category: "looks",
    Component: ChangeSizeBlock,
    defaultData: {
      size: 10,
    },
  },
  {
    key: FIELD_CONFIG.looks.setSize.name,
    category: "looks",
    Component: SetSizeBlock,
    defaultData: {
      size: 100,
    },
  },
  {
    key: FIELD_CONFIG.looks.changeColorEffect.name,
    category: "looks",
    Component: ChangeColorEffectBlock,
    disabled: true,
    defaultData: {
      effect: "color",
      value: 25,
    },
  },
  {
    key: FIELD_CONFIG.looks.setColorEffect.name,
    category: "looks",
    Component: SetColorEffectBlock,
    disabled: true,
    defaultData: {
      effect: "color",
      value: 25,
    },
  },
  {
    key: FIELD_CONFIG.looks.clearEffects.name,
    category: "looks",
    Component: ClearEffectsBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.looks.show.name,
    category: "looks",
    Component: ShowBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.looks.hide.name,
    category: "looks",
    Component: HideBlock,
    disabled: true,
  },
  {
    key: FIELD_CONFIG.looks.goToLayer.name,
    category: "looks",
    Component: GoToLayerBlock,
    disabled: true,
    defaultData: {
      layer: 1,
    },
  },
  {
    key: FIELD_CONFIG.looks.goForwardLayers.name,
    category: "looks",
    Component: GoForwardLayersBlock,
    disabled: true,
    defaultData: {
      layers: 1,
    },
  },
  {
    key: FIELD_CONFIG.looks.costumeNumber.name,
    category: "looks",
    Component: CostumeNumberBlock,
    disabled: true,
    defaultData: {
      identifier: "number",
    },
  },
  {
    key: FIELD_CONFIG.looks.backdropNumber.name,
    category: "looks",
    Component: BackdropNumberBlock,
    disabled: true,
    defaultData: {
      identifier: "number",
    },
  },
  {
    key: FIELD_CONFIG.looks.size.name,
    category: "looks",
    Component: SizeBlock,
    disabled: true,
  },
];
