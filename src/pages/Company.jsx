import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class Company extends Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    apiHandler
      .getCompany(this.state)
      .then((response) => {
        this.state({ companies: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Company</h1>
        {this.state.companies.map((company) => (
          <div key={company.id}>
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Company;
