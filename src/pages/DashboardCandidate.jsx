import React, { Component } from "react";
import CandidateOffers from "./../components/CandidateOffers";
import CandidateApplications from "./../components/CandidateApplications";

export class DashboardCandidate extends Component {
  state = {
    selectedOfferAppId: null,
  };

  handleSelection = (appId) => {
    this.setState({ selectedOfferAppId: appId });
  };

  render() {
    const { selectedOfferAppId } = this.state;

    return (
      <div>
        <h2>dashboard</h2>
        <CandidateOffers handleSelection={this.handleSelection} />
        {this.state.selectedOfferAppId && (
          <CandidateApplications applicationId={selectedOfferAppId} />
        )}
        {/* <CandidateApplications applicationId={"606304e3f64f3733d7e849e4"} /> */}
      </div>
    );
  }
}

export default DashboardCandidate;
