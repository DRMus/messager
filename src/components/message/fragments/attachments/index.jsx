import React from "react";
import classNames from "classnames";

const Attachments = ({ attachments, text }) =>
  attachments ? (
    <div
      className={classNames("message--attachments", {
        "message--attachments--text-none": !text,
      })}
    >
      {attachments.map((a, index) => (
        <div key={index} className="message--attachments-item">
          <img src={a.url} alt={a.fullname} />
        </div>
      ))}
    </div>
  ) : null;

export default Attachments;
