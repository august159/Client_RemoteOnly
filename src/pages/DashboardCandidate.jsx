import React, { Component } from "react";
import CandidateOffers from "./../components/CandidateOffers";
// import CandidateApplications from "./../components/CandidateApplications";

export class DashboardCandidate extends Component {
  state = {
    selectedOffer: "",
  };

  handleSelection = (event) => {
    console.log(`event.target`, event.target);
    this.setState({ selectedOffer: event.target.value });
  };

  render() {
    const { selectedOffer } = this.state;

    return (
      <div>
        <h2>dashboard</h2>
        <CandidateOffers
          value={selectedOffer}
          handleSelection={this.handleSelection}
        />
        <p>Selected offer_id: {selectedOffer}</p>
        {/* <CandidateApplications /> */}
      </div>
    );
  }
}

export default DashboardCandidate;
