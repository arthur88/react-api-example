import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        REST API
      </NavLink>
      <div className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-item nav-link active">
            Home <span className="sr-only">(*current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <strong>API's</strong>:
        </li>
        <li className="nav-item">
          <NavLink to="/typecode" className="nav-item nav-link">
            typicode
          </NavLink>
        </li>
        <li className="nav-item">{" | "}</li>
        <li className="nav-item">
          <NavLink to="/reqres" className="nav-item nav-link">
            ReqRes
          </NavLink>
        </li>
        <li className="nav-item">{" | "}</li>
        <li className="nav-item">
          <NavLink to="/traffic" className="nav-item nav-link">
            Traffic in Vilnius
          </NavLink>
        </li>
      </div>
    </nav>
  </header>
);

export default Header;
