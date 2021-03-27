import React, { Component } from "react";
import axios from "axios";

export class Application extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/application")
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
            <p>{application.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Application;
