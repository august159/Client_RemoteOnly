import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class Offer extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    apiHandler
      .getOffers(this.state)
      .then((offers) => {
        this.setState({ offers });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Offers</h1>
        {this.state.offers.map((offer) => (
          <div key={offer._id}>
            <p>{offer.title}</p>
            <p>{offer.contractType}</p>
            <p>Il y a {offer.createdAt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Offer;
