import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import classNames from "classnames";
import userEvent from "@testing-library/user-event";
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header />

      <Outlet />

      <footer>copyright</footer>
    </div>
  );
}

export default App;
