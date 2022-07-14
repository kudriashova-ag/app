import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import classNames from "classnames";


function App() {
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <div className="container">
      <header>
        <h1>My App</h1>
        <nav>
          <NavLink to="/"> Home </NavLink>|<NavLink to="users"> Users </NavLink>
          |<NavLink to="tasks"> Tasks </NavLink>
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

      <Outlet />

      <footer>copyright</footer>
    </div>
  );
}

export default App;

