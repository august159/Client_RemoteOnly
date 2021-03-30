import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
// import DashboardCandidate from "./../pages/DashboardCandidate";

export class CandidateApplications extends Component {
  state = {
    userInfo: [],
  };

  componentDidMount() {
    console.log("+++++++++++++++++++");
    //     const id = this.props.match.params.id;
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
