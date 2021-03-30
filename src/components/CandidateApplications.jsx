import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
// import DashboardCandidate from "./../pages/DashboardCandidate";
import { withUser } from "./../components/Auth/withUser";

export class CandidateApplications extends Component {
  state = {
    offerId: "",
  };

  componentDidMount() {
    const id = this.props.context.user._id;
    console.log("id :>> ", id);

    apiHandler
      .getUser(id)
      .then((userInfo) => {
        console.log("userInfo :>> ", userInfo);
        const applications = userInfo.applications;
        console.log("applications :>> ", applications);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.applications);
    return (
      <div>
        {/* {this.applications.map((application) => {
          <p>{application}</p>;
        })} */}
      </div>
    );
  }
}

export default withUser(CandidateApplications);
