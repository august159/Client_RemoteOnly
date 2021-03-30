import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "./Auth/withUser";
import apiHandler from "../api/apiHandler";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain pr-4">
      <div className="navbar is-transparent">
        <div className="navbar-brand">
          <NavLink exact to="/">
            <img
              src="https://res.cloudinary.com/adgranmous/image/upload/v1617009957/ro_logo_k3ewl3.svg"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className="navbar-menu navbar-end">
          <NavLink
            className="navbar-item has-background-link-dark has-text-white"
            exact
            to="/profile"
          >
            <img
              src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ironhack/original.jpg?1568082165"
              alt="Account image"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default withUser(NavMain);
