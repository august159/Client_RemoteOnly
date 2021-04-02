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
      
        <section className="hero has-background-white-ter pt-0">
          <div className="hero-body mb-10">
            <div className="container ">
              <h2 className="title is-4">Dashboard</h2>
              <div className="columns box-full ">
                <CandidateOffers handleSelection={this.handleSelection} />
                {this.state.selectedOfferAppId && (
                  <>
                  <CandidateApplications applicationId={selectedOfferAppId} />
                  </>
                )}
                
              </div>
            </div>
          </div>
        </section>
      
    );
  }
}

export default DashboardCandidate;
