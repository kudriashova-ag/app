import classNames from "classnames";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  return (
    <header>
      <Link to="/"> Home </Link>
      <nav>
        <NavLink to="/"> Home </NavLink>|
        <NavLink to="users"> Users </NavLink>|
        <NavLink to="tasks"> Tasks </NavLink>
      </nav>
      <button
        className={classNames(styles.btn, { [styles.btn_active]: activeBtn })}
        onClick={() => {
          setActiveBtn(!activeBtn);
        }}
      >
        Button
      </button>
    </header>
  );
};

export default Header;
