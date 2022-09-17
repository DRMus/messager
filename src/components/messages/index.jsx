import React, { useState, useRef } from "react";
import {
  SendOutlined,
  AudioOutlined,
  PaperClipOutlined,
  EllipsisOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Input, Spin } from "antd";
import { UploadField } from "@navjobs/upload";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { Message } from "components";
import "./Messages.scss";
import classNames from "classnames";

function Messages({ items, currentDialogId, messagesRef, isLoading }) {
  const [emojiIsOpen, setEmojiIsOpen] = useState(false);
  const inputRef = useRef(null)

  const suffixMessage = <SendOutlined className="message--input--send" />;

  const voiceMessage = <AudioOutlined className="message--input--send" />;

  const [sendType, setSendType] = useState(voiceMessage);

  const toggleEmojiTable = () => {
    setEmojiIsOpen(!emojiIsOpen);
  };

  const writeEmojiOnInput = (emoji) => {
    if (inputRef.current) {
      inputRef.current.input.value += `&#${emoji.unified}`;
    }
    
  }

  const textTyped = (e) => {
    if (e.target.value) {
      setSendType(suffixMessage);
    } else {
      setSendType(voiceMessage);
    }
  };

  return currentDialogId ? (
    <div className="chat--current">
      <div className="chat--current--header">
        <div className="chat--current--header--fullname">
          <b>{"Чеченец Алан"}</b>
        </div>
        <div className="chat--current--header--online">
          <div
            className={classNames("online--led", "online--led--offline")}
          ></div>
          <p>online</p>
        </div>
        <EllipsisOutlined className="chat--current--header--popup" />
      </div>
      <div className="chat--current--messages" ref={messagesRef}>
        {isLoading ? (
          <div className="chat--current--loading">
            <Spin tip="Загрузка сообщений..." className="loading--spin" />
          </div>
        ) : items && items.length > 0 ? (
          <div>
            {items.map((item) => (
              <Message key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <div className="chat--current--empty">
            <p>Чат куст</p>
          </div>
        )}
      </div>
      <div className="chat--current--input">
        <div className="message--input--file">
          <UploadField
            onFiles={(files) => console.log(files)}
            containerProps={{
              className: "photos",
            }}
            uploadProps={{
              accept: ".pdf,.doc,.docx,.txt,.rtf",
              multiple: "multiple",
            }}
          >
            <PaperClipOutlined className="message--input--send message--input--clip" />
          </UploadField>
        </div>
        <div className="message--input--emojibtn">
          {emojiIsOpen ? (
            <div className="message--input--emojitable">
              <Picker data={data} onEmojiSelect={(emoji) => writeEmojiOnInput(emoji)} />
            </div>
          ) : null}
          <SmileOutlined
            className="message--input--send"
            onClick={toggleEmojiTable}
          />
        </div>

        <Input
          onChange={(e) => textTyped(e)}
          ref={inputRef}
          placeholder="Введите сообщение"
          className="message--input"
          suffix={sendType}
        />
      </div>
    </div>
  ) : (
    <div className="chat--current--empty">
      <p>Чат не выбран</p>
    </div>
  );
}

export default Messages;
