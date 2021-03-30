import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import ApplicationForm from "./Forms/ApplicationForm";

export class Applications extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    apiHandler
      .getApplications(this.state)
      .then((applications) => {
        this.setState({ applications });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Applications</h1>
        {this.state.applications.map((application) => (
          <div key={application._id}>
            <p>
              {application.firstName} {application.lastName}
            </p>
            <p>Il y a {application.createdAt}</p>
          </div>
        ))}
        <ApplicationForm />
      </div>
    );
  }
}

export default Applications;
