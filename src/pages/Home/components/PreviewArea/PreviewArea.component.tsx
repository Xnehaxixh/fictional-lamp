import React from 'react'
import { AbbySprite } from '../../../../components/AbbySprite';
import { CatSprite } from '../../../../components/CatSprite'
import { ChatBubble } from '../../../../components/ChatBubble';
import { ThoughtBubble } from '../../../../components/ThoughBubble';
import { useAnimation } from '../../../../hooks/useAnimation';
import { IContainerFlowData, IFlowData } from '../../Home.types'

export const PreviewArea = ({
  flowData,
  isPlaying,
  setIsPlaying,
  sprite,
}: {
  flowData: React.MutableRefObject<IContainerFlowData[]>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  sprite: string;
}): JSX.Element => {
  const { xPos, yPos, angleInDeg, animationDuration, message, messageType, size, executeFlowData } = useAnimation();

  const processFlowDataQueue = async (containerFlowData: IFlowData[], startFrom: number) => {
    for (let i = startFrom; i < containerFlowData.length; i++) {
      await executeFlowData(containerFlowData[i]);
    }
  }

  const handleStart = async (triggedFromType: string) => {
    let flowDataIndex = -1;
    let blockIndex = -1;

    for (let index = 0; index < flowData.current.length; index++) {
      blockIndex = flowData.current[index].data.findIndex((item) => item.type === triggedFromType);

      if (blockIndex !== -1) {
        flowDataIndex = index;

        await processFlowDataQueue(flowData.current[index].data, blockIndex);
      }
    }

    if (triggedFromType === 'whenGreenFlag') {
      setIsPlaying(false);
    }
  }

  // If the isPlaying state changes, we process the flow data queue
  React.useEffect(() => {
    if (!isPlaying) {
      return;
    }

    handleStart('whenGreenFlag');
  }, [isPlaying])

  return (
    <div className="flex-none h-full overflow-hidden p-2">
      <div className='flex' style={{
        position: "relative",
        top: yPos,
        left: xPos,
        transition: `all ${animationDuration}s linear`,
      }}>
        <button
          className='inline-block'
          type='button'
          onClick={() => handleStart('whenSpriteClicked')}
          style={{
            rotate: `${angleInDeg}deg`,
            scale: `${size}`,
          }}>
          {sprite === 'cat' && (<CatSprite />)}
          {sprite === 'abby' && (<AbbySprite />)}
        </button>

        {message && (
          messageType === 'say' ? (
            <div className='inline-block'>
              <ChatBubble text={message} />
            </div>
          ) : (
            <div className='inline-block'>
              <ThoughtBubble text={message} />
            </div>
          )
        )}
      </div>
    </div>
  )
}
