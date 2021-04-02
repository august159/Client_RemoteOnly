import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import ProfileUpdate from "./pages/ProfileUpdate";
import CompanyProfile from "./pages/CompanyProfile";
import Application from "./pages/Application";
import Offer from "./pages/Offer";
import DashboardCandidate from "./pages/DashboardCandidate";
import DashboardRecruiter from "./pages/DashboardRecruiter";
import ApplicationConfirmation from "./pages/ApplicationConfirmation";
import OneOffer from "./pages/OneOffer";
import OneApplication from "./pages/OneApplication";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/application/:id" component={Application} />
        <Route
          exact
          path="/appconfirmation"
          component={ApplicationConfirmation}
        />
        <Route exact path="/candidate" component={DashboardCandidate} />
        <Route exact path="/recruiter" component={DashboardRecruiter} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/profile/:id/" component={ProfileUpdate} />
        <Route exact path="/company" component={CompanyProfile} />
        <Route exact path="/offer" component={Offer} />
        <Route exact path="/offer/:id" component={OneOffer} />
        <Route exact path="/application/:id" component={OneApplication} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
