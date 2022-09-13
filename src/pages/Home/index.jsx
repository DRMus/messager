import React from "react";

import { Messages } from "components";
import { Dialogs } from "containers";
import dialogJSON from "testingJSON/dialogs.json";
import "./Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="chat">
        {/* <div className="chat--toolbar"></div> */}
        <Dialogs items={dialogJSON} />
        <Messages items={"hello"}/>
      </div>
    </section>
  );
}

export default Home;
