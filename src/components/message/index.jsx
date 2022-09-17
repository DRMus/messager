import React from "react";
import PropTypes from "prop-types";
import formatDistance from "date-fns/formatDistance";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import "./Message.scss";
import { IconReaded, Avatar } from "components";
import { Attachments, Bubble } from "./fragments";

function Message({
  user,
  text,
  date,
  audio,
  attachments,
  isMe,
  isChecked,
  isTyping,
}) {
  
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--attached": attachments,
        "message--audio-message": audio,
      })}
    >
      <div className="message--content">
        <div className="message--avatar">
          {!isTyping && <Avatar user={user} />}
        </div>
        <div className="message--info">
          <div
            className="message--message"
            style={{ flexDirection: attachments ? "column" : "row" }}
          >
            <Attachments attachments={attachments} text={text} />
            <Bubble isTyping={isTyping} audio={audio} text={text} />
          </div>
          <IconReaded
            isMe={isMe}
            isChecked={isChecked}
            className="message--check"
          />
          {date && (
            <span className="message--date">
              {formatDistance(date, new Date(), {
                addSuffix: true,
                locale: ruLocale,
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  // date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
};

export default Message;
