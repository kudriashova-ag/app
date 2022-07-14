import React from "react";
import { getUsers, getUser } from "../../data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import styles from "./Users.module.scss";

const Users = () => {

  let [searchParams, setSearchParams] = useSearchParams();

  let users = getUsers();
  const mapUser = (user) => (
    <NavLink key={user.id} to={`/users/${user.id}`}>
      {user.name}
    </NavLink>
  );
  
  const filterUsers = user => { 
    const q = searchParams.get("q");
    if (!q) return true;
    //return user.name.toLowerCase().startsWith(q.toLowerCase());
    const reg = new RegExp(q, 'i');
    return reg.test(user.name);
  }


  const searchHandle = (e) => {
    let q = e.target.value;
    setSearchParams(q ? { q } : {});
  };

  return (
    <div className={styles.container}>
      <h1>Users</h1>

      <div className={styles.users}>
        <div className={styles["user-list"]}>
          <input onChange={searchHandle} value={searchParams.get("q")} />
          {users.filter(filterUsers).map(mapUser)}
        </div>

        <div className={styles["user-info"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Users;
