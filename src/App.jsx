import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/header";
import { UserContext, ThemeContext } from "./contexts";
import OPTIONS from "./constants";
const { THEMES } = OPTIONS;

function App() {
  const [currentUser, setCurrentUser] = useState({
    login: "admin",
    email: "admin@gmail.com",
  });
  const [currentTheme, setCurrentTheme] = useState(THEMES.DARK);
  const setTheme = (theme) => setCurrentTheme(theme);


  return (
    <ThemeContext.Provider value={{currentTheme, setTheme}}>
      <UserContext.Provider value={currentUser}>
        <div className="container">
          <Header />
          <Outlet />
          <footer>copyright</footer>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
