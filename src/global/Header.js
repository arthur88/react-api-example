import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        REST API
      </NavLink>
      <div className="navbar-nav">
        <NavLink to="/" className="nav-item nav-link active">
          Home <span className="sr-only">(*current)</span>
        </NavLink>
        <NavLink to="/api" className="nav-item nav-link">
          Fetch form API
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
