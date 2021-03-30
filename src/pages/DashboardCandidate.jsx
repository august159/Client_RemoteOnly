import React from "react";
import CandidateApplications from "./../components/CandidateApplications";
import { withUser } from "../components/Auth/withUser";

const DashboardCandidate = (props) => {
  const { context } = props;

  const user = context.user;

  return <div>{user.firstName}</div>;
};

export default withUser(DashboardCandidate);

// function Dashboard(props) {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div>
//         <h2>Jobs postulés</h2>
//         <CandidateApplications userId={props.match.params.id} />
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default Dashboard;
