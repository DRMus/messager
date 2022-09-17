import React, { useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";
import { useEffect } from "react";

function Messages({ fetchMessages, currentDialogId, messages, isLoading }) {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, 999999);
    }
  }, [messages]);

  return (
    <BaseMessages
      isLoading={isLoading}
      messagesRef={messagesRef}
      items={messages}
      currentDialogId={currentDialogId}
    />
  );
}

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    messages: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Messages);
