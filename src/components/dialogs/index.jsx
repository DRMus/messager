import React from "react";
import orderBy from "lodash/orderBy";

import { DialogItem } from "components";
import "./Dialogs.scss";

function Dialogs({ items }) {
  return (
    <div className="dialogs">
      {orderBy(items, ["lastMessage.created_at"], ["desc"]).map((item, index) => (
        <DialogItem key={index} user={item.user} message={item.lastMessage} />
      ))}
    </div>
  );
}

export default Dialogs;
