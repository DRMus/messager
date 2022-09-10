import React from "react";

import checkedIcon from "img/svg/Checked.svg";

const IconReaded = ({ isMe, isChecked, className }) => (
    isMe & isChecked ? (
      <img src={checkedIcon} alt="Check icon" className={className} />
    ) : null
);

export default IconReaded;
