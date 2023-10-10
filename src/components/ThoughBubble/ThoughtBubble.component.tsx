import React from "react";

import "./ThoughtBubble.styles.css";

export const ThoughtBubble = ({
  text,
}: {
  text: string;
}) => {
  return (<p className={"thought bubble"}>{text}</p>)
}
