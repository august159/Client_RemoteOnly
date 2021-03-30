import React from "react";
import CandidateApplications from "./../components/CandidateApplications";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Jobs postulés</h2>
        <CandidateApplications />
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
