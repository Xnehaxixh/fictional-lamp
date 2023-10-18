import React from 'react';
import { NAV_CONFIG } from '../pages/Home/components/Sidebar/Sidebar.constants';

interface IWrapWithColorProps {
  type: keyof typeof NAV_CONFIG;
  children: React.ReactNode;
  disabled?: boolean;
}

const WrapWithColor = ({ type, children, disabled }: IWrapWithColorProps) => {
  const color = NAV_CONFIG[type]?.color || "gray";
  const textColor = type === "event" && !disabled ? "black" : "white";

  return (
    <div className={"rounded flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-grab"} style={{
      backgroundColor: disabled ? "gray" : color,
      color: textColor,
    }}>
      {children}
    </div>
  );
};

export const withColorWrapper = (WrappedComponent: React.ComponentType, type: keyof typeof NAV_CONFIG, disabled?: boolean) => {
  return (props: React.ComponentProps<typeof WrappedComponent>) => (
    <WrapWithColor type={type} disabled={disabled} >
      <WrappedComponent {...props} />
    </WrapWithColor>
  );
};
