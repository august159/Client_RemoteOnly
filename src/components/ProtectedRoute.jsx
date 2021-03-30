import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";

const ProtectedRoute = ({ component: Component, context, role, ...rest }) => {
  if (context.isLoading) {
    return null;
  } else if (context.isLoggedIn) {
    if (role === context.user.role) {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    } else {
      return <Redirect to="/" />; // Redirection vers la Home
    }
  } else {
    return <Redirect to="/" />;
  }
};

export default withUser(ProtectedRoute);
