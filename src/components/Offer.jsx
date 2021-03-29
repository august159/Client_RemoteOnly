import React, { Component } from "react";
import axios from "axios";

export class Offer extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/offer")
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
            <p>{offer.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Offer;
