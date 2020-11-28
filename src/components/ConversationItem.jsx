import React, { useContext } from "react";

import MailboxContext from "../contexts/MailboxContext";

const ConversationItem = (props) => {
  const { currentConversation } = useContext(MailboxContext);

  return (
    <div
      onClick={() => props.onClick(props.conversation)}
      className={`w-full p-2 cursor-pointer ${
        currentConversation === props.conversation ? "bg-gray-100" : ""
      }`}
    >
      <h3 className="font-semibold text-gray-800">
        {props.author
          ? `${props.author.first_name} ${props.author.last_name}`
          : ""}
      </h3>
      <div className="flex flex-wrap items-center">
        <div className="w-3/4">
          <p className="truncate mr-2">{props.message}</p>
        </div>
        <div className="text-xs text-gray-500">
          {new Date(props.updatedAt).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
