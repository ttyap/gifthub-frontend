import React from "react";

import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => (
  <div className="w-full mb-4 overflow-auto overscroll-contain">
    {messages
      ? messages.map((message) => (
          <MessageItem key={message._id} message={message} />
        ))
      : ""}
  </div>
);

export default MessageList;
