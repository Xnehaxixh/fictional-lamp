import { IConfigBlockProps } from "../../components/CodeBlocks/CodeBlocks.types";

export interface IFlowData {
  id: string;
  type: string;
  data: Record<string, unknown>;
}

export interface IMidAreaElements {
  id: string;
  type: string;
  Component: React.FC<IConfigBlockProps>;
  data: Record<string, unknown>;
}
