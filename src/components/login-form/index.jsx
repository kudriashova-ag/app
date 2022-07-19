import React, { useReducer, useState } from "react";
import Chat from "../chat";
import { reducer } from "./reducer";


const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    birthday: "",
  });
  
  const changeHandler = ({ target: { name, value } }) => {
    dispatch({name, value});
  }

  return (
    <div>
      <h1>{state.firstName}</h1>
      <input
        type="text"
        value={state.firstName}
        onChange={changeHandler}
        name="firstName"
      />

      <input
        type="text"
        value={state.lastName}
        onChange={changeHandler}
        name="lastName"
      />

      <input
        type="text"
        value={state.birthday}
        onChange={changeHandler}
        name="birthday"
      />

      <Chat />
    </div>
  );
};

export default LoginForm;
