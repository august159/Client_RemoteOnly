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
        
        <section className="hero has-background-white-ter pt-0">
        
          <div className="is-fullheight ">
          
            <div className="hero-body ">
            
              <div className="container">
              <h2 className="title is-4">Dashboard</h2>
                <div className="columns box-full ">
                  <div className="column is-one-quarter">
                    <div className="box">
                    
                      <CandidateOffers
                        value={selectedOfferAppId}
                        handleSelection={this.handleSelection}
                      />
                    </div>
                  </div>

                  <div className="column  is-three-quarter">
                    <div className="box">
                      {this.state.selectedOfferAppId && (
                        <CandidateApplications
                          applicationId={selectedOfferAppId}
                        />
                      )}
                    </div>
                  </div>

                  {/* <CandidateApplications applicationId={"606304e3f64f3733d7e849e4"} /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DashboardCandidate;
