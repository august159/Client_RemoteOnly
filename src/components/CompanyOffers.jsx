import React, { Component } from "react";
import { withUser } from "./../components/Auth/withUser";
import apiHandler from "./../api/apiHandler";

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
    const { handleSelection } = this.props;
    return (
      <div>
        {this.state.offers && (
          <div className="media">
            {this.state.offers.map((offer) => (
              <div key={offer._id}>
                <div className="clicked"
                  onClick={() => {
                    handleSelection(offer._id);
                  }}
                >
                  <div class="media-left">
                    <figure class="image is-64x64 mb-2">
                      <img src={offer.company.logo} alt={offer.company.name} />
                    </figure>
                  </div>
                

                <div class="media-content">
                  <div class="content">
                    <p><strong>Poste</strong> {offer.title}</p>
                    <p><strong>Type de contrat: </strong>{offer.contractType}</p>
                    <p>{!offer.isActive && `Offre pourvue`}</p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withUser(CompanyOffers);
