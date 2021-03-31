import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import "./../styles/custom.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
        console.log(`context after logout`, context);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(`context`, context);

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
              <NavLink
                className="navbar-item"
                exact
                to={
                  context.user.role === "candidate"
                    ? "/candidate"
                    : "/recruiter"
                }
              >
                <h4>Dashboard</h4>
              </NavLink>
              {/* <div className="navbar-item has-dropdown is-hoverable">
                <NavLink className="navbar-link">
                Profile
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink className="navbar-item"  exact to="/profile">
                  Manage Your Account
                  </NavLink>
                  <div className="navbar-item">
                    <NavLink className="navbar-link">
                      <h4 onClick={handleLogout}>Logout</h4>
                    </NavLink>
                  </div>
                </div> */}
              <NavLink className="navbar-item" to="/profile">
                {/* {context.user && `Bonjour ${context.user.firstName}`} */}
                {context.user && `Mon compte`}
              </NavLink>
              <NavLink className="navbar-item has-text-white" exact to="/">
                <h4
                  className="button is-rounded is-outlined"
                  onClick={handleLogout}
                >
                  Logout
                </h4>
              </NavLink>
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
                className="navbar-item has-text-white"
                exact
                to="/application"
              >
                <h4 className="button is-rounded is-outlined">Poster un job</h4>
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};
export default withUser(NavMain);
