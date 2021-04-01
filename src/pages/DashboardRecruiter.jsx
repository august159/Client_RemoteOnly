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
    console.log(`this.state`, this.state);
    return (
      <div className="bg">
        <section className="hero  has-background-white-ter pt-0">
          
            {/* <div className="hero-body mb-10">
              <div className="container">
                <h2 className="title is-4">Dashboard</h2>
                <div className="columns box-full ">
                  <div className="column is-one-quarter">
                    <div className="box">
                      <CompanyOffers handleSelection={this.handleSelection} />
                    </div>
                  </div>
                  <div className="column  is-three-quarter">
                    <div className="box">
                      {" "}
                      {this.state.selectedOfferId && (
                        <>
                          <CompanyApplications offerId={selectedOfferId} />
                        </>
                      )}
                    </div>
                  </div>
                </div> */}
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
      </div>
    );
  }
}

export default DashboardRecruiter;
