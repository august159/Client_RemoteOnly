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
          {context.isLoggedIn && (
            <React.Fragment>
              <NavLink className="navbar-item" exact to="/candidate">
                <h4>My Dashboard</h4>
              </NavLink>
              <NavLink className="navbar-item" to="/profile">
                {context.user && `Bonjour ${context.user.firstName}`}
              </NavLink>
              <div className="navbar-item has-background-link-dark has-text-white">
                <p onClick={handleLogout}>Logout</p>
              </div>
            </React.Fragment>
          )}
          {!context.isLoggedIn && (
            <React.Fragment>
              <NavLink className="navbar-item" exact to="/signin">
                <h4>Connexion</h4>
              </NavLink>
              <NavLink className="navbar-item" exact to="/signup">
                <h4>S'inscrire</h4>
              </NavLink>
              <NavLink
                className="navbar-item has-background-link-dark has-text-white"
                exact
                to="/application"
              >
                <h4>Poster un job</h4>
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};
export default withUser(NavMain);
