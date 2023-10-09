import React from 'react';

import './ChatBubble.styles.css';

export const ChatBubble = ({
  text,
}: {
  text: string;
}) => {
  return (<p className={"speech-bubble"}>{text}</p>)
}
