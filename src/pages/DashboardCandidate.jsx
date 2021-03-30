import React, { Component } from "react";
import CandidateOffers from "./../components/CandidateOffers";
// import CandidateApplications from "./../components/CandidateApplications";

export class DashboardCandidate extends Component {
  state = {
    selectedOffer: "",
  };

  render() {
    const { selectedOffer } = this.state;

    return (
      <div>
        <h2>dashboard</h2>
        <CandidateOffers
          selectedOffer={selectedOffer}
          handleSelection={(clickedOffer) =>
            this.setState({ selectedOffer: clickedOffer })
          }
        />
        {/* <CandidateApplications /> */}
      </div>
    );
  }
}

export default DashboardCandidate;
