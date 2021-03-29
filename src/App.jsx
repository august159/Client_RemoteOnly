import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Application from "./components/Application";
import Company from "./pages/Company";
import Offer from "./components/Offer";
// import './App.sass';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/application" component={Application} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/company" component={Company} />
        <ProtectedRoute exact path="/offer" component={Offer} />
      </Switch>
    </div>
  );
}

export default App;
