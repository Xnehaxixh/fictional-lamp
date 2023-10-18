import { FIELD_CONFIG } from "../../../constants/codeBlocks.constants";
import { IFlowData } from "../../../pages/Home/Home.types";
import { MAX_LIMIT } from "../useAnimation.constants";
import { IAnimationStates } from "../useAnimation.types";

const boundaryCheck = (value: number, maxValue: number) => {
  if (value < 0) {
    return 0;
  }

  return value > maxValue ? maxValue : value;
}

export const motionExecutor = (flowData: IFlowData, animationStates: IAnimationStates) => {
  let localAnimationStates = animationStates;

  switch (flowData.type) {
    case FIELD_CONFIG.motion.moveSteps.name: {
      const steps = flowData.data[FIELD_CONFIG.motion.moveSteps.fields.steps.name];

      const xIncrement = Math.round(Number(steps) * Math.cos(localAnimationStates.angleInDeg * (Math.PI / 180)));
      const yIncrement = Math.round(Number(steps) * Math.sin(localAnimationStates.angleInDeg * (Math.PI / 180)));

      const finalXPos = localAnimationStates.xPos + xIncrement;
      const finalYPos = localAnimationStates.yPos + yIncrement;
      localAnimationStates = {
        ...localAnimationStates,
        xPos: boundaryCheck(finalXPos, MAX_LIMIT.X),
        yPos: boundaryCheck(finalYPos, MAX_LIMIT.Y),
      }

      break;
    }

    case FIELD_CONFIG.motion.turnRight.name: {
      const angle = flowData.data[FIELD_CONFIG.motion.turnRight.fields.steps.name];

      localAnimationStates = {
        ...localAnimationStates,
        angleInDeg: localAnimationStates.angleInDeg + Number(angle),
      }
      break;
    }
    case FIELD_CONFIG.motion.turnLeft.name: {
      const angle = flowData.data[FIELD_CONFIG.motion.turnLeft.fields.steps.name];

      localAnimationStates = {
        ...localAnimationStates,
        angleInDeg: localAnimationStates.angleInDeg - Number(angle),
      }
      break;
    }

    case FIELD_CONFIG.motion.goToAutomaticPosition.name: {
      const position = flowData.data[FIELD_CONFIG.motion.goToAutomaticPosition.fields.position.name];

      if (position === "random") {
        localAnimationStates = {
          ...localAnimationStates,
          xPos: Math.floor(Math.random() * MAX_LIMIT.X),
          yPos: Math.floor(Math.random() * MAX_LIMIT.Y),
        }
      } else if (position === "mouse") {
        // TODO: Not implemented yet
        localAnimationStates = {
          ...localAnimationStates,
          xPos: 0,
          yPos: 0,
        }
      }

      break;
    }

    case FIELD_CONFIG.motion.goToManualPosition.name: {
      const x = flowData.data[FIELD_CONFIG.motion.goToManualPosition.fields.x.name];
      const y = flowData.data[FIELD_CONFIG.motion.goToManualPosition.fields.y.name];

      localAnimationStates = {
        ...localAnimationStates,
        xPos: boundaryCheck(Number(x), MAX_LIMIT.X),
        yPos: boundaryCheck(Number(y), MAX_LIMIT.Y),
      }
    }

    break;

    case FIELD_CONFIG.motion.glideToAutomaticPosition.name: {
      const position = flowData.data[FIELD_CONFIG.motion.glideToAutomaticPosition.fields.position.name];
      const duration = flowData.data[FIELD_CONFIG.motion.glideToAutomaticPosition.fields.secs.name];

      if (position === "random") {
        localAnimationStates = {
          ...localAnimationStates,
          animationDuration: Number(duration),
          xPos: Math.floor(Math.random() * MAX_LIMIT.X),
          yPos: Math.floor(Math.random() * MAX_LIMIT.Y),
        }
      } else if (position === "mouse") {
        // TODO: Not implemented yet
        localAnimationStates = {
          ...localAnimationStates,
          animationDuration: Number(duration),
          xPos: 0,
          yPos: 0,
        }
      }

      break;
    }

    case FIELD_CONFIG.motion.glideToManualPosition.name: {
      const x = flowData.data[FIELD_CONFIG.motion.glideToManualPosition.fields.x.name];
      const y = flowData.data[FIELD_CONFIG.motion.glideToManualPosition.fields.y.name];
      const duration = flowData.data[FIELD_CONFIG.motion.glideToManualPosition.fields.secs.name];

      localAnimationStates = {
        ...localAnimationStates,
        animationDuration: Number(duration),
        xPos: boundaryCheck(Number(x), MAX_LIMIT.X),
        yPos: boundaryCheck(Number(y), MAX_LIMIT.Y),
      }

      break;
    }

    case FIELD_CONFIG.motion.pointInManualDirection.name: {
      const angle = flowData.data[FIELD_CONFIG.motion.pointInManualDirection.fields.direction.name];

      localAnimationStates = {
        ...localAnimationStates,
        angleInDeg: Number(angle) - 90,
      }
      break;
    }

    case FIELD_CONFIG.motion.pointInAutomaticDirection.name: {
      const position = flowData.data[FIELD_CONFIG.motion.pointInAutomaticDirection.fields.position.name];

      if (position === "random") {
        localAnimationStates = {
          ...localAnimationStates,
          angleInDeg: Math.floor(Math.random() * 360),
        }
      } else if (position === "mouse") {
        // TODO: Not implemented
        localAnimationStates = {
          ...localAnimationStates,
          angleInDeg: Math.floor(Math.random() * 360),
        }
      }

      break;
    }

    case FIELD_CONFIG.motion.changeX.name: {
      const x = flowData.data[FIELD_CONFIG.motion.setX.fields.x.name];

      const finalXPos = localAnimationStates.xPos + Number(x);

      localAnimationStates = {
        ...localAnimationStates,
        xPos: boundaryCheck(finalXPos, MAX_LIMIT.X),
      }

      break;
    }

    case FIELD_CONFIG.motion.setX.name: {
      const x = flowData.data[FIELD_CONFIG.motion.setX.fields.x.name];

      localAnimationStates = {
        ...localAnimationStates,
        xPos: boundaryCheck(Number(x), MAX_LIMIT.X),
      }

      break;
    }

    case FIELD_CONFIG.motion.changeY.name: {
      const y = flowData.data[FIELD_CONFIG.motion.setY.fields.y.name];

      const finalYPos = localAnimationStates.yPos + Number(y);

      localAnimationStates = {
        ...localAnimationStates,
        yPos: boundaryCheck(finalYPos, MAX_LIMIT.X),
      }

      break;
    }

    case FIELD_CONFIG.motion.setY.name: {
      const y = flowData.data[FIELD_CONFIG.motion.setY.fields.y.name];

      localAnimationStates = {
        ...localAnimationStates,
        yPos: boundaryCheck(Number(y), MAX_LIMIT.Y),
      }

      break;
    }
  };

  return localAnimationStates;
}
