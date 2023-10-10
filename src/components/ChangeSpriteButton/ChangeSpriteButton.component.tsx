import React from "react";
import { contextMenuLargeConfig } from "../../constants/contextMenu.constants";
import { WithContextMenu } from "../../hocs/WithContextMenu";
import { Icon } from "../Icon";
import { changeSpriteContextMenuOptions } from "./ChangeSpriteButton.constants";

const ChangeSpriteButtonBase = () => {
  return (
    <button
      type="button"
      className="w-12	h-12 flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-600 absolute right-5 bottom-5 rounded-full"
      onClick={() => {
        console.log("clicked");
      }}
    >
      <Icon name="cat" className="text-white" />
    </button>
  );
}

export const ChangeSpriteButton = ({
  handleSpriteChange,
}: {
  handleSpriteChange: (spriteName: string) => void;
}) => {
  const ChangeSpriteButtonWIthContextMenu = WithContextMenu(
    ChangeSpriteButtonBase,
    "change-sprite",
    changeSpriteContextMenuOptions,
    (_event, data) => {
      handleSpriteChange(data.key);
    },
    {
      ...contextMenuLargeConfig,
      activationClick: "left",
    },
  );

  return (
    <ChangeSpriteButtonWIthContextMenu />
  );
};
