import React from "react";

import { Dialogs, Messages } from "containers";
import "./Home.scss";


function Home() {
  return (
    <section className="home">
      <div className="chat">
        {/* <div className="chat--toolbar"></div> */}
        <Dialogs />
        <Messages />
      </div>
    </section>
  );
}

export default Home;
