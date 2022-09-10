import React from "react";
import classNames from "classnames";
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'

import { IconReaded, UnreadCount } from "components";
import "./DialogItem.scss";

function createDate(created_at) {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm")
  } else {
    return format(created_at, "dd.MM.yy")
  }
}

function DialogItem({ user, message }) {
  return (
    <div className="dialogs--item">
      <div
        className={classNames("dialogs--item--avatar", {
          "dialogs--item--avatar--online": user.isOnline,
        })}
      >
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        <img
          src="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
          alt=""
        />
      </div>
      <div className="dialogs--item--info">
        <div className="dialogs--item--info--top">
          <b>{user.fullname}</b>
          <span>{createDate(message.created_at)}</span>
        </div>
        <div className="dialogs--item--info--bottom">
          <div className="dialogs--item--info--bottom--text">
            <p>
              {message.text}
            </p>
          </div>
          <IconReaded
            className="dialogs--item--info--bottom--readed"
            isMe={message.isMe}
            isChecked={message.isChecked}
          />
          <UnreadCount
            unread={user.unreaded}
            className={"dialogs--item--info--bottom--unreadcount"}
            isMe={message.isMe}
          />
        </div>
      </div>
    </div>
  );
}

export default DialogItem;
