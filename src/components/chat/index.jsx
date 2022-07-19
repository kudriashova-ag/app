import React, { useEffect, useReducer } from "react";
import reducer from "./reducer";

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, { messages: [], users: [] });

  useEffect(() => {
    fetch("/chat.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DATA_RESPONSE_SUCCESS", data }));
  });

  return<ol>
    {state.messages.map((m) => (
      <li key={m.id}>{JSON.stringify(m)}</li>
    ))}
  </ol>;
};

export default Chat;
