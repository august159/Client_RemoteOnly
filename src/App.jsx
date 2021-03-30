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
import Offers from "./components/Offers";
import OneOffer from "./components/OneOffer";
import OfferCreation from "./pages/OfferCreation";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/application" component={Application} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/offer" component={Offers} />
        <Route exact path="/offer/:id" component={OneOffer} />
        <Route exact path="/offerCreation/" component={OfferCreation} />
      </Switch>
    </div>
  );
}

export default App;
