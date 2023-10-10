import React from 'react'
import { CatSprite } from '../../../../components/CatSprite'
import { ChatBubble } from '../../../../components/ChatBubble';
import { ThoughtBubble } from '../../../../components/ThoughBubble';
import { useAnimation } from '../../../../hooks/useAnimation';
import { IFlowData } from '../../Home.types'

export const PreviewArea = ({
  flowData,
  isPlaying,
  setIsPlaying,
}: {
  flowData: Array<IFlowData>,
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const { xPos, yPos, angleInDeg, animationDuration, message, messageType, size, executeFlowData } = useAnimation();
  const [count, setCount] = React.useState(0);

  const processFlowDataQueue = async () => {
    for (const item of flowData) {
      if (!isPlaying) {
        break;
      };

      await executeFlowData(item);

    }

    setIsPlaying(false);
  }

  // If the isPlaying state changes, we process the flow data queue
  React.useEffect(() => {
    processFlowDataQueue();
  }, [isPlaying])

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div className='flex' style={{
        position: "relative",
        top: yPos,
        left: xPos,
        transition: `all ${animationDuration}s linear`,
      }}>
        <div className='inline-block' style={{
          rotate: `${angleInDeg}deg`,
          scale: `${size}`,
        }}>
          <CatSprite />
        </div>

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
