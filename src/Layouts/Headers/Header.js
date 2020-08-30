import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          E-Learning
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "blue" }}
                to="/"
                exact
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "blue" }}
                to="/signup"
                exact
                className="nav-link"
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "blue" }}
                to="/signin"
                exact
                className="nav-link"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
