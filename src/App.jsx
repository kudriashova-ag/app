import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">

      <header>
        <h1>My App</h1>
        <nav>
          <NavLink to="/"> Home </NavLink>|
          <NavLink to="users"> Users </NavLink>|
          <NavLink to="tasks"> Tasks </NavLink>
        </nav>
      </header>

      <Outlet />


      <footer>
        copyright
      </footer>
      
    </div>
  );
}


export default App;
