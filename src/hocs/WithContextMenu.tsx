import React from "react";
import { ContextMenu as ReactContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";

interface IWrapWithContextMenuProps {
  id: string;
  options: {
    name: string;
    key: string;
  }[];
  children: React.ReactNode;
  handleOptionClick: (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    data: {
      key: string;
    }
  ) => void;
  config?: {
    wrapperClassName?: string;
    itemClassName?: string;
    activationClick?: "right" | "left";
  };
}

export const WrapWithContextMenu = ({
  id,
  options,
  children,
  handleOptionClick,
  config,
}: IWrapWithContextMenuProps) => {
  const contextMenuId = `${id}-context-menu`;
  const mouseButton = config?.activationClick === "left" ? 0 : 2;

  return (
    <>
      {
        /* `react-contextmenu` has older types of ClassComponent, hence 
            support for `children` props is not there and TS shows warning
            messages. This can be safely ignored.
        */
      }
      {/* @ts-ignore */}
      <ContextMenuTrigger id={contextMenuId} mouseButton={mouseButton}>
        {children}
      </ContextMenuTrigger>

      {/* @ts-ignore */}
      <ReactContextMenu id={contextMenuId} className={config?.wrapperClassName}>
        {options.map((option) => {
          return (
            // @ts-ignore
            <MenuItem
              key={option.key}
              data={{ key: option.key }}
              onClick={handleOptionClick}
              className={config?.itemClassName}
            >
              {option.name}
            </MenuItem>
          )
        })}
      </ReactContextMenu>
    </>
  )
};

export const WithContextMenu = <P extends {}>(
  WrappedComponent: React.FC<P>,
  id: IWrapWithContextMenuProps["id"],
  options: IWrapWithContextMenuProps["options"],
  handleOptionClick: IWrapWithContextMenuProps["handleOptionClick"],
  config?: IWrapWithContextMenuProps["config"],
): React.FC<P> => {
  return (props) => (
    <WrapWithContextMenu id={id} options={options} handleOptionClick={handleOptionClick} config={config}>
      <WrappedComponent {...props} />
    </WrapWithContextMenu>
  );
};
