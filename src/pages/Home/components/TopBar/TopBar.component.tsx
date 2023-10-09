import React from "react";
import { Button } from "../../../../components/Button/Button.component";

export const TopBar = ({
  isPlaying,
  setIsPlaying
}: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-blue-100 pb-3">
      <div className="flex flex-row">
        <div className="flex-1">
          {/* SideBar & Mid Area Items */}
        </div>
        <div className="w-1/3">
          {/* Preview Area Items */}
          <div className="flex flex-row">
            <Button type="button"
              twTextColor="green-600"
              twButtonHoverColor="blue-300"
              disabled={isPlaying}
              onClick={() => {
                setIsPlaying(true);
              }}
              faIcon="flag"
            />
            <Button type="button"
              twTextColor="red-600"
              twButtonHoverColor="blue-300"
              disabled={!isPlaying}
              onClick={() => {
                setIsPlaying(false);
              }}
              faIcon="stop"
            />
          </div>
        </div>
      </div>
    </div>
  )
};
