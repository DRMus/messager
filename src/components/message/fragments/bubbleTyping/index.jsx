import React from "react";

const BubbleTyping = ({ isTyping }) =>
  isTyping ? (
    <div className="message--points">
      <span></span> <span></span> <span></span>
    </div>
  ) : null;

export default BubbleTyping;
