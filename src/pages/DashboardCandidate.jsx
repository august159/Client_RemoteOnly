import React from "react";
import CandidateApplications from "./../components/CandidateApplications";

function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Jobs postulés</h2>
        <CandidateApplications userId={props.match.params.id} />
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
