import React, { Component } from "react";
import axios from "axios";

export class Company extends Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/company")
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
