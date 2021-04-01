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
          <>
            {this.state.offers.map((offer) => (
              <div key={offer._id}>
                <div
                  onClick={() => {
                    handleSelection(offer._id);
                  }}
                >
                  <img src={offer.company.logo} alt={offer.company.name} />
                  <p>Name: {offer.company.name}</p>
                  <p>Intitulé du poste: {offer.title}</p>
                  <p>Type de contrat: {offer.contractType}</p>
                  <p>{!offer.isActive && `Offre pourvue`}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default withUser(CompanyOffers);
