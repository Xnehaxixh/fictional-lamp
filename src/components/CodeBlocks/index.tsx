import { IBlockConfig } from "./CodeBlocks.types";
import { controlCodeBlocksConfig } from "./Control";
import { eventsCodeBlocksConfig } from "./Events";
import { looksCodeBlocksConfig } from "./Looks";
import { motionCodeBlocksConfig } from "./Motion";

export const codeBlocksConfig: IBlockConfig[] = [
  ...motionCodeBlocksConfig,
  ...looksCodeBlocksConfig,
  ...controlCodeBlocksConfig,
  ...eventsCodeBlocksConfig,
];

export {
  controlCodeBlocksConfig,
  looksCodeBlocksConfig,
  motionCodeBlocksConfig,
  eventsCodeBlocksConfig
};
