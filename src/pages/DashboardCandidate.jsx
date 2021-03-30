import React, { Component } from "react";

import CandidateApplications from "./../components/CandidateApplications";

export class DashboardCandidate extends Component {
  render() {
    return (
      <div>
        <h2>dashboard</h2>
        <CandidateApplications />
      </div>
    );
  }
}

export default DashboardCandidate;
