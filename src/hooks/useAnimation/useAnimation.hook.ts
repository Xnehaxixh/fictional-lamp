import React, { useState } from "react";
import { FIELD_CONFIG } from "../../constants/codeBlocks.constants";
import { IFlowData } from "../../pages/Home/Home.types";
import { looksExecutor } from "./helpers/looksExecutors";
import { motionExecutor } from "./helpers/motionExecutors";
import { IAnimationStates } from "./useAnimation.types";

export const useAnimation = () => {
  const [animationStates, setAnimationStates] = useState<IAnimationStates>({
    xPos: 0,
    yPos: 0,
    angleInDeg: 0,
    animationDuration: 0,
    message: "",
    messageType: "",
    size: 1,
  });

  const executeFlowData = async (flowData: IFlowData) => {
    // Create a copy of latest animationStates
    let localAnimationStates = animationStates;
    setAnimationStates(animationStates => {
      localAnimationStates = animationStates;
      return animationStates;
    });

    let resetStates = {};

    switch (flowData.category) {
      case FIELD_CONFIG.motion.name: {
        localAnimationStates = motionExecutor(flowData, localAnimationStates);
        break;
      }

      case FIELD_CONFIG.looks.name: {
        const result = looksExecutor(flowData, localAnimationStates);
        localAnimationStates = result.localAnimationStates;
        resetStates = result.resetStates;

        break;
      }

      default: {
        break;
      }
    }

    setAnimationStates(localAnimationStates);

    await new Promise(resolve => {
      setTimeout(resolve, localAnimationStates.animationDuration * 1000 || 50)
    });
  
    // Reset required animation states
    setAnimationStates(animationStates => ({
      ...animationStates,
      ...resetStates,
      animationDuration: 0,
    }));
  }

  return {
    executeFlowData,
    xPos: animationStates.xPos,
    yPos: animationStates.yPos,
    angleInDeg: animationStates.angleInDeg,
    animationDuration: animationStates.animationDuration,
    message: animationStates.message,
    messageType: animationStates.messageType,
    size: animationStates.size,
  };
}
