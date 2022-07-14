import React from "react";
import { getUsers } from "../../data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import styles from "./Users.module.scss";
import { UserContext } from "../../contexts";
import { WithTheme } from "../../HOCs";
import classNames from "classnames";

const Users = ({ currentTheme }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  let users = getUsers();

  const mapUser = (user) => (
    <NavLink key={user.id} to={`/users/${user.id}`}>
      {user.name}
    </NavLink>
  );

  const filterUsers = (user) => {
    const q = searchParams.get("q");
    if (!q) return true;
    //return user.name.toLowerCase().startsWith(q.toLowerCase());
    const reg = new RegExp(q, "i");
    return reg.test(user.name);
  };

  const searchHandle = (e) => {
    let q = e.target.value;
    setSearchParams(q ? { q } : {});
  };

  return (
    <UserContext.Consumer>
      {(currentUser) => {

        const usersClass = classNames(styles.container, {
          [styles.lightTheme]: currentTheme === "LIGHT",
          [styles.darkTheme]: currentTheme === "DARK",
        });

        return (
          <div className={usersClass}>
            <h1>Users</h1>
            <h3>Hello, {currentUser.login}</h3>
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
      }}
    </UserContext.Consumer>
  );
};

const UsersWithTheme = WithTheme(Users);

export default UsersWithTheme;
