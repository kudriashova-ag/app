import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../../data";

const User = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  let user = getUser(+id);

  return (
    <div>
      <h1>{user.name}</h1>
      <div>${user.salary}</div>
      <div>{user.birthday}</div>

      <button
        onClick={() => {
          deleteUser(user.id);
          navigate("../");
        }}
      >
        Delete user
      </button>
    </div>
  );
};

export default User;
