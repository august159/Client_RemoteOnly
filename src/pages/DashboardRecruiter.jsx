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
          
            <div className="hero-body mb-10">
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
                </div>
              </div>
            </div>
          
        </section>
      </div>
    );
  }
}

export default DashboardRecruiter;

{
  /* <section className="hero has-background-white-ter pt-0">
  <div className="is-fullheight ">
    <div className="hero-body ">
      <div className="container">
        <div className="columns box-full ">
          <div className="column is-one-quarter">
            <div className="box">
              {this.state.offers.map((offer) => (
                <div className="dashboard_offer" key={offer._id}>
                  <Link to={`/offer/${offer._id}`} key={offer._id}></Link>
                  <p>{offer.title}</p>
                  <p>{offer.contractType}</p>
                  <p>{offer.createdAt}</p>
                  <hr style={{ width: "50%", textAlign: "left" }}></hr>
                </div>
              ))}
            </div>
          </div>
          <div className="column  is-three-quarter">
            <div className="box">
              <div className="level">
                <div className="level-right">
                  <p className="level-item">
                    <strong>Toutes</strong>
                  </p>
                  <p className="level-item">
                    <a>À revoir</a>
                  </p>
                  <p className="level-item">
                    <a>Selectionné</a>
                  </p>
                </div>
                <hr className="solid" />
              </div>
              <div>
              {this.state.offers.map((application) => (
                  <div to={`/application/${application._id}`} key={application._id}>
                  <p>{application.firstName}</p>
                  <p>{application.lastName}</p>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</section> */
}
