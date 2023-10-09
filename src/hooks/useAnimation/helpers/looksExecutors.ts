import { FIELD_CONFIG } from "../../../constants/codeBlocks.constants";
import { IFlowData } from "../../../pages/Home/Home.types";
import { IAnimationStates } from "../useAnimation.types";


export const looksExecutor = (flowData: IFlowData, animationStates: IAnimationStates) => {
  let localAnimationStates = animationStates;
  let resetStates = {};

  switch (flowData.type) {
    case FIELD_CONFIG.looks.sayFor.name: {
      const message = flowData.data[FIELD_CONFIG.looks.sayFor.fields.message.name];
      const duration = flowData.data[FIELD_CONFIG.looks.sayFor.fields.duration.name];

      localAnimationStates = {
        ...localAnimationStates,
        message: String(message) || "",
        messageType: "say",
        animationDuration: Number(duration),
      }

      resetStates = {
        message: "",
        messageType: "",
      }

      break;
    }

    case FIELD_CONFIG.looks.say.name: {
      const message = flowData.data[FIELD_CONFIG.looks.say.fields.message.name];

      localAnimationStates = {
        ...localAnimationStates,
        message: String(message) || "",
        messageType: "say",
      }

      break;
    }

    case FIELD_CONFIG.looks.thinkFor.name: {
      const message = flowData.data[FIELD_CONFIG.looks.thinkFor.fields.message.name];
      const duration = flowData.data[FIELD_CONFIG.looks.thinkFor.fields.duration.name];

      localAnimationStates = {
        ...localAnimationStates,
        message: String(message) || "",
        messageType: "think",
        animationDuration: Number(duration),
      }

      resetStates = {
        message: "",
        messageType: "",
      }

      break;
    }

    case FIELD_CONFIG.looks.think.name: {
      const message = flowData.data[FIELD_CONFIG.looks.think.fields.message.name];

      localAnimationStates = {
        ...localAnimationStates,
        message: String(message) || "",
        messageType: "think",
      }

      break;
    }

    case FIELD_CONFIG.looks.changeSize.name: {
      const size = flowData.data[FIELD_CONFIG.looks.changeSize.fields.size.name];

      localAnimationStates = {
        ...localAnimationStates,
        size: localAnimationStates.size + Number(size)/100,
      }

      break;
    }

    case FIELD_CONFIG.looks.setSize.name: {
      const size = flowData.data[FIELD_CONFIG.looks.setSize.fields.size.name];

      localAnimationStates = {
        ...localAnimationStates,
        size: Number(size)/100,
      }

      break;
    }
  }
    
  return {
    localAnimationStates,
    resetStates,
  };
}
