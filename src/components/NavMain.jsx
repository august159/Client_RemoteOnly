import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
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
          <NavLink className="navbar-item" exact to="/signin">
            <h4>Connexion</h4>
          </NavLink>
          <NavLink className="navbar-item" exact to="/signup">
            <h4>S'inscrire</h4>
          </NavLink>
          <NavLink
            className="navbar-item has-background-link-dark has-text-white"
            exact
            to="/offer"
          >
            <h4>Poster un job</h4>
          </NavLink>
          {/* <ul className="nav-list">
            {context.isLoggedIn && (
              <React.Fragment>
                <li>
                  <NavLink to="/profile">
                    {context.user && context.user.email}
                  </NavLink>
                </li>
                <li>
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </React.Fragment>
            )}
            {!context.isLoggedIn && (
              <React.Fragment>
                <li>
                  <NavLink to="/signin">Log in</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Create account</NavLink>
                </li>
              </React.Fragment>
            )} */}
          {/* </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default withUser(NavMain);
