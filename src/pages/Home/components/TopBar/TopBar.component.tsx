import React from "react";
import { Icon } from "../../../../components/Icon";

export const TopBar = () => {
  return (
    <div className="bg-blue-100 pb-3">
      <div className="flex flex-row">
        <div className="flex-1">
          {/* SideBar & Mid Area Items */}
        </div>
        <div className="w-1/3">
          {/* Preview Area Items */}
          <div className="flex flex-row">
            <button type="button" className="hover:bg-blue-300 rounded p-1 mx-1">
              <Icon name="flag" size={20} className="text-green-600" />
            </button>
            <button type="button" className="hover:bg-blue-300 rounded p-1 mx-1">
              <Icon name="stop" size={20} className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
