import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/application/${application._id}`} key={application._id}>
            <div>
              <p>
                {application.firstName} {application.lastName}
              </p>
              <p>Il y a {application.createdAt}</p>
            </div>
          </Link>
        ))}
        <ApplicationForm />
      </div>
    );
  }
}

export default Applications;
