import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class OneApplication extends Component {
  state = {
    application: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    apiHandler
      .getApplication(id)
      .then((application) => {
        this.setState({ application });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.application.email}</p>
        <p>{this.state.application.linkedIn}</p>
        <p>{this.state.application.otherWebsite}</p>
      </div>
    );
  }
}

export default OneApplication;
