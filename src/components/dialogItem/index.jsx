import React, { useContext, useState } from "react";
import classNames from "classnames";
import isToday from "date-fns/isToday";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

import { IconReaded, UnreadCount } from "components";
import { Avatar } from "components";
import { Context } from "context";

import "./DialogItem.scss";

function createDate(created_at) {
  if (isToday(parseISO(created_at))) {
    return format(parseISO(created_at), "HH:mm");
  } else {
    return format(parseISO(created_at), "dd.MM.yy");
  }
}

function DialogItem({ user, message }) {
  const { setCurrentDialog, currentDialogId } = useContext(Context);

  return (
    <div
      className={classNames("dialogs--item", {
        active: currentDialogId === user._id,
      })}
      onClick={setCurrentDialog.bind(this, user._id)}
    >
      <div
        className={classNames("dialogs--item--avatar", {
          "dialogs--item--avatar--online": user.isOnline,
        })}
      >
        <Avatar user={user} />
      </div>
      <div className="dialogs--item--info">
        <div className="dialogs--item--info--top">
          <b>{user.fullname}</b>
          <span>{createDate(message.created_at)}</span>
        </div>
        <div className="dialogs--item--info--bottom">
          <div className="dialogs--item--info--bottom--text">
            <p>{message.text}</p>
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
