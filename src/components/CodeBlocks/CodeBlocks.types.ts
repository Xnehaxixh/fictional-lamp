import { NAV_CONFIG } from "../../pages/Home/components/Sidebar/Sidebar.constants";

export interface IConfigBlockProps {
  data: Record<string, unknown>;
  onFieldValueChange: (fieldName: string, value: string) => void;
}

export interface IBlockConfig {
  key: string;
  category: keyof typeof NAV_CONFIG;
  Component: React.FC<IConfigBlockProps> | React.FC;
  defaultData?: Record<string, unknown>;
  disabled?: boolean;
}
