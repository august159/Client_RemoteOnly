import React, { Component } from "react";
import { withUser } from "./../components/Auth/withUser";
import apiHandler from "./../api/apiHandler";
import { Link } from "react-router-dom";

class CompanyOffers extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    apiHandler
      .getOffersFromLoggedInRecruiter()
      .then((apiResponse) => {
        this.setState({ offers: apiResponse.offers });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(`this.state`, this.state);
    const { handleSelection } = this.props;
    return (
      <div>
        {this.state.offers.length > 0 ? (
          <div className="media">
            <div className="box">
              <div className="column  is-three-quarter">
                {this.state.offers.map((offer) => (
                  <div
                    key={offer._id}
                    className="clicked mb-2"
                    onClick={() => {
                      handleSelection(offer._id);
                    }}
                  >
                    <div className="box $link-active-border">
                      <div class="media-left">
                        <figure class="image is-64x64 mb-4">
                          <img
                            src={offer.company.logo}
                            alt={offer.company.name}
                          />
                        </figure>
                      </div>

                      <div class="media-content">
                        <div class="content">
                          <p>
                            <strong>Poste</strong> {offer.title}
                          </p>
                          <p>
                            <strong>Type de contrat: </strong>
                            {offer.contractType}
                          </p>
                          <p>{!offer.isActive && `Offre pourvue`}</p>
                        </div>
                      </div>
                    </div>
                    {/* <hr className="solid"></hr> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="applications column  is-three-quarter">
            <div className="applications box">
              <h1 className="mb-2">
                Votre dashboard est bien vide... Déposez une annonce et revenez
                ;-)
              </h1>
              <Link to="/offer">
                <button className="button  is-info is-primary mt-4">
                  Déposer une annonce
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withUser(CompanyOffers);
