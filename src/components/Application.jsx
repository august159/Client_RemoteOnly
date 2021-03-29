import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class Application extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    apiHandler
      .getApplications(this.state)
      .then((response) => {
        this.state({ applications: response.data });
        console.log(response.data);
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
          <div key={application.id}>
            <p>{application.firstName}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Application;
