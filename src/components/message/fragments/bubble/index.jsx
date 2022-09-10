import React from "react";
import classNames from "classnames";

import { BubbleTyping, BubbleText, BubbleAudio } from "../";

const Bubble = ({ isTyping, audio, text }) =>
  isTyping || audio || text ? (
    <div
      className={classNames("message--bubble", {
        "message--typing": isTyping,
      })}
    >
      <BubbleText text={text} />
      <BubbleTyping isTyping={isTyping} />
      <BubbleAudio audio={audio} />
    </div>
  ) : null;

export default Bubble;
