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
<<<<<<< HEAD
import Offer from "./components/Offer";
// import './App.sass';
=======
import Offers from "./components/Offers";
>>>>>>> c73523420f53187e3160a09f33246a295be8af4d

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
        <ProtectedRoute exact path="/offer" component={Offers} />
      </Switch>
    </div>
  );
}

export default App;
