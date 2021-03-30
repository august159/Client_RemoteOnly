import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
// import DashboardCandidate from "./../pages/DashboardCandidate";
// import UserContext from "./../components/Auth/UserContext";

export class CandidateApplications extends Component {
  state = {
    userInfo: [],
  };

  componentDidMount() {
    console.log(this.props, "++++++++++++++++++++++++");
    const id = this.props.userId;
    apiHandler
      .getUser(id)
      .then((userInfo) => {
        this.setState({ userInfo });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div>{this.state.userInfo.companies}</div>
      </div>
    );
  }
}

export default CandidateApplications;
