import React from "react";
import { getUsers, getUser } from "../../data";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const Users = () => {
  let users = getUsers();
  const mapUser = (user) => (
    <NavLink key={user.id} to={`/users/${user.id}`}>
      {user.name}
    </NavLink>
  );
  const searchHandle = (e) => {
    let s = e.target.value;
  };

  return (
    <div>
      <h1>Users</h1>

      <div className="users">
        <div className="user-list">
          <input onChange={searchHandle} />
          {users.map(mapUser)}
        </div>
        <div className="user-info">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Users;
