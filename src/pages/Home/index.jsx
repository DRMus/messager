import React from "react";
import { Input } from "antd";
import { SearchOutlined, SendOutlined } from "@ant-design/icons";

import { Message, Dialogs } from "components";
import "./Home.scss";

const prefix = <SearchOutlined className="search--input--prefix" />;
const suffixMessage = <SendOutlined className="message--input--send"/>;

function Home() {
  return (
    <section className="home">
      <div className="chat">
        {/* <div className="chat--toolbar"></div> */}
        <div className="chat--sidebar">
          <div className="sidebar--header">
            <div className="sidebar--header--icon">
              <p>Сообщения</p>
            </div>
            <div className="sidebar--header--search">
              <Input
                placeholder="Поиск..."
                className="search--input"
                prefix={prefix}
              />
            </div>
          </div>
          <div className="chat--sidebar--dialogs">
            <Dialogs
              items={[
                {
                  user: {
                    _id: "53443rrvfffe",
                    fullname: "Чеченец Алан",
                    isOnline: true,
                    unreaded: 8,
                    avatar:
                      "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
                  },
                  lastMessage: {
                    text: "Привет, ты где находишься",
                    isChecked: false,
                    isMe: false,
                    created_at: new Date(),
                  },
                },
                {
                  user: {
                    _id: "53443rrvfffe",
                    avatar: "",
                    fullname: "Чеченец Алан",
                    isOnline: true,
                    unreaded: 8,
                  },
                  lastMessage: {
                    text: "Привет, ты где находишься",
                    isChecked: false,
                    isMe: false,
                    created_at: new Date(2022, 10, 11),
                  },
                },
                {
                  user: {
                    _id: "53443rrvfffe",
                    avatar: "",
                    fullname: "Чеченец Алан",
                    isOnline: true,
                    unreaded: 8,
                  },
                  lastMessage: {
                    text: "Привет, ты где находишься",
                    isChecked: false,
                    isMe: false,
                    created_at: new Date(2022, 10, 11),
                  },
                },
                {
                  user: {
                    _id: "53443rrvfffe",
                    avatar: "",
                    fullname: "Чеченец Алан",
                    isOnline: true,
                    unreaded: 8,
                  },
                  lastMessage: {
                    text: "Привет, ты где находишься",
                    isChecked: false,
                    isMe: false,
                    created_at: new Date(2022, 10, 11),
                  },
                },
              ]}
            />
          </div>
        </div>
        <div className="chat--current">
          <div className="chat--current--header">
            <div className="chat--current--header--fullname">
              <b>{"Чеченец Алан"}</b>
            </div>
            <div className="chat--current--header--online">online</div>
          </div>
          <div className="chat--current--messages">
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar:
                  "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
              }}
              text="Привет, видел тебя сегодня. Классно выглядишь!"
              date={new Date(2022, 6, 17)}
              attachments={[
                {
                  filename: "image",
                  url: "https://source.unsplash.com/500x500/?random=1",
                },
                {
                  filename: "image",
                  url: "https://source.unsplash.com/500x500/?random=2",
                },
                {
                  filename: "image",
                  url: "https://source.unsplash.com/500x500/?random=3",
                },
                {
                  filename: "image",
                  url: "https://source.unsplash.com/500x500/?random=4",
                },
              ]}
              isMe={false}
            />
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar:
                  "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
              }}
              avatar="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
              date={new Date(2022, 8, 5)}
              audio={
                "https://notificationsounds.com/storage/sounds/file-sounds-1187-if-you-dont-pick.mp3"
              }
            />
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar: "",
              }}
              text="Привет, где ты находишься?"
              date={new Date(2022, 8, 5)}
            />
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar: "",
              }}
              text="Привет, где ты находишься?"
              date={new Date(2022, 8, 5)}
              isMe
            />
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar: "",
              }}
              text="Привет, где ты находишься?"
              date={new Date(2022, 8, 5)}
            />
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar: "",
              }}
              text="Привет, где ты находишься?"
              date={new Date(2022, 8, 5)}
            />
            
            <Message
              user={{
                _id: "69a329523ce1ec88bf63061863d9cb14",
                fullname: "Алан Чеченец",
                avatar:
                  "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
              }}
              isTyping={true}
            />
          </div>
          <div className="chat--current--input">
            <Input
              placeholder="Введите сообщение"
              className="message--input"
              suffix={suffixMessage}
            />
          </div>
        </div>
      </div>
      {/* <Dialogs
        items={[
          {
            user: {
              fullname: "Чеченец Алан",
              isOnline: true,
              unreaded: 8
            },
            lastMessage: {
              text: "Привет, ты где находишься",
              isChecked: false,
              isMe: false,
              created_at: new Date()
            },
          },
          {
            user: {
              fullname: "Чеченец Алан",
              isOnline: true,
              unreaded: 8
            },
            lastMessage: {
              text: "Привет, ты где находишься",
              isChecked: false,
              isMe: false,
              created_at: new Date(2022, 10, 11)
            },
          },
        ]}
      /> */}
      {/* <Message
        user={{
          _id: "69a329523ce1ec88bf63061863d9cb14",
          fullname: "Алан Чеченец",
          avatar:
            "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
        }}
        text="Привет, видел тебя сегодня. Классно выглядишь!"
        date={new Date(2022, 6, 17)}
        attachments={[
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=1",
          },
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=2",
          },
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=3",
          },
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=4",
          },
        ]}
        isMe={false}
      />
      <Message
        user={{
          _id: "69a329523ce1ec88bf63061863d9cb14",
          fullname: "Алан Чеченец",
          avatar:
            "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
        }}
        avatar="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
        // text="Привет, где ты находишься?"
        date={new Date(2022, 8, 5)}
        audio={
          "https://notificationsounds.com/storage/sounds/file-sounds-1187-if-you-dont-pick.mp3"
        }
      />
      <Message
        user={{
          _id: "69a329523ce1ec88bf63061863d9cb14",
          fullname: "Алан Чеченец",
          avatar: "",
        }}
        text="Привет, где ты находишься?"
        date={new Date(2022, 8, 5)}
      />
      <Message
        user={{
          _id: "69a329523ce1ec88bf63061863d9cb14",
          fullname: "Алан Чеченец",
          avatar:
            "https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1",
        }}
        isTyping={true}
      /> */}
    </section>
  );
}

export default Home;
