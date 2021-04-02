import React, { Component } from "react";
import CompanyOffers from "./../components/CompanyOffers";
import CompanyApplications from "./../components/CompanyApplications";
import "./../styles/custom.css";

export class DashboardRecruiter extends Component {
  state = {
    selectedOfferId: null,
  };

  handleSelection = (appsId) => {
    this.setState({ selectedOfferId: appsId });
  };

  render() {
    const { selectedOfferId } = this.state;
    return (
      <section className="hero has-background-white-ter pt-0">
        <div className="hero-body mb-10">
          <div className="container ">
            <h2 className="title is-4">Dashboard</h2>
            <div className="columns box-full ">
              <CompanyOffers handleSelection={this.handleSelection} />
              {this.state.selectedOfferId && (
                <>
                  <CompanyApplications offerId={selectedOfferId} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardRecruiter;
