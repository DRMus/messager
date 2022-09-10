import React from "react";

import { Message, Dialogs } from "components";
import "./Home.scss";

function Home() {
  return (
    <section className="home">
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
      <Message
        avatar="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
        text="Привет, видел тебя сегодня. Классно выглядишь!"
        date={new Date(2022, 6, 17)}
        attachments = {[
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=1"
          },
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=2"
          },
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=3"
          },
          {
            filename: "image",
            url: "https://source.unsplash.com/500x500/?random=4"
          },
        ]}
        isMe = {false}
      />
      <Message
        avatar="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
        // text="Привет, где ты находишься?"
        date={new Date(2022, 8, 5)}
        audio={"https://notificationsounds.com/storage/sounds/file-sounds-1187-if-you-dont-pick.mp3"}
      />
      <Message
        avatar="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
        text="П"
        date={new Date(2022, 8, 5)}
      />
      <Message
        avatar="https://sun7-13.userapi.com/s/v1/ig2/9F5rI2MEEezcIK4zW9D-NZru_yWpuc8lmWmsX96egNo27yoKFldLWRAw31wSKOyfxX2URz5xFpgLC0_alKD-fzoI.jpg?size=50x50&quality=95&crop=192,61,850,850&ava=1"
        isTyping={true}
      /> 
    </section>
  );
}

export default Home;
