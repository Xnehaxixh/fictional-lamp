import React, { ButtonHTMLAttributes } from "react";
import { Icon } from "../Icon";

interface IButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"],
  twButtonColor?: string,
  twButtonHoverColor?: string,
  twTextColor?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  children?: React.ReactNode,
  disabled?: boolean,
  faIcon?: string,
}

export const Button = ({
  type,
  twButtonColor,
  twButtonHoverColor,
  twTextColor,
  onClick,
  children,
  disabled,
  faIcon,
}: IButtonProps) => {
  let twClass = "rounded p-1 mx-1";
  let faIconClass = "";

  if (disabled) {
    twClass = `${twClass} bg-gray-200 text-gray-400 cursor-not-allowed`;
    faIconClass = 'text-gray-400';
  } else {
    if (twButtonColor) {
      twClass = `${twClass} bg-${twButtonColor}`;
    }

    if (twTextColor) {
      twClass = `${twClass} text-${twTextColor}`;
      faIconClass = `text-${twTextColor}`;
    }

    if (twButtonHoverColor) {
      twClass = `${twClass} hover:bg-${twButtonHoverColor}`;
    }
  }

  return (
    <button type={type}
      className={twClass}
      disabled={disabled}
      onClick={(event) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      }
      }
    >
      {faIcon && (
        <Icon name={faIcon} size={20} className={faIconClass} />
      )}
      {children}
    </button>
  )
}
