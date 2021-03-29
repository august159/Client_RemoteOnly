import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class Offer extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    apiHandler
      .getOffers(this.state)
      .then((response) => {
        this.state({ offers: response.data });
        console.log(response.data);
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
          <div key={offer.id}>
            <p>{offer.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Offer;
