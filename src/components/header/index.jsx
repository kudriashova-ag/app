import classNames from "classnames";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../contexts";
import { WithTheme } from "../../HOCs";

const Header = ({ currentTheme, setTheme }) => {
  const [activeBtn, setActiveBtn] = useState(true);

  return (
    <UserContext.Consumer>
      {(currentUser) => {
        const themeBtnHandler = () => {
          setActiveBtn(!activeBtn);
          setTheme(currentTheme === "DARK" ? "LIGHT" : "DARK");
        };

        const headerClass = classNames({
          [styles.lightTheme]: currentTheme === "LIGHT",
          [styles.darkTheme]: currentTheme === "DARK",
        });

        return (
          <header className={headerClass}>
            <Link to="/">My App</Link>
            <nav>
              <NavLink to="/"> Home </NavLink>|
              <NavLink to="users"> Users </NavLink>|
              <NavLink to="tasks"> Tasks </NavLink> |
              <NavLink to="login"> Login </NavLink> |
            </nav>

            <div>
              <button
                className={classNames(styles.btn, {
                  [styles.btn_active]: activeBtn,
                })}
                onClick={themeBtnHandler}
              >
                {currentTheme}
              </button>

              {currentUser.login}
            </div>
          </header>
        );
      }}
    </UserContext.Consumer>
  );
};

const HeaderWithTheme = WithTheme(Header);

export default HeaderWithTheme;
