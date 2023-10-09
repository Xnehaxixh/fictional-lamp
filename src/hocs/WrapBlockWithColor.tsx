import React from 'react';
import { NAV_CONFIG } from '../pages/Home/components/Sidebar/Sidebar.constants';

interface IWrapWithColorProps {
  type: keyof typeof NAV_CONFIG;
  children: React.ReactNode;
}

const WrapWithColor = ({ type, children }: IWrapWithColorProps) => {
  const color = NAV_CONFIG[type]?.color || "gray";

  return (
    <div className={"flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-grab"} style={{
      backgroundColor: color,
    }}>
      {children}
    </div>
  );
};

export const withColorWrapper = (WrappedComponent: React.ComponentType, type: keyof typeof NAV_CONFIG) => {
  return (props: React.ComponentProps<typeof WrappedComponent>) => (
    <WrapWithColor type={type}>
      <WrappedComponent {...props} />
    </WrapWithColor>
  );
};
