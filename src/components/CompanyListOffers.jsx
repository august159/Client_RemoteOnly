import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class CompanyListOffers extends Component {
  state = {
    company: [],
  };

  componentDidMount() {
    apiHandler
      .getCompany(this.props.companyId)
      .then((company) => {
        this.setState({ company });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("++++++++++", this.state.company);
    return <div>{/* <p>{this.state.company.offers}</p> */}</div>;
  }
}

export default CompanyListOffers;
