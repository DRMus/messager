import React from "react";

const BubbleText = ({ text }) =>
  text ? <p className="message--text">{text}</p> : null;

export default BubbleText;
