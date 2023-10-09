import { IConfigBlockProps } from "../../components/CodeBlocks/CodeBlocks.types";

export interface IFlowData {
  id: string;
  type: string;
  data: Record<string, unknown>;
  category: string;
}

export interface IMidAreaElements {
  id: string;
  category: string;
  type: string;
  Component: React.FC<IConfigBlockProps>;
  data: Record<string, unknown>;
}
