import React from "react";

const UnreadCount = ({ className, unread, isMe }) => {
  const countOverflow = (unread) => {
    return unread > 9 ? "9+" : unread;
  };

  return !isMe & (unread > 0) ? (
    <div className={className}>
      <b>{countOverflow(unread)}</b>
    </div>
  ) : null;
};

export default UnreadCount;
