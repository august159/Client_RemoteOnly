import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

export class Offers extends Component {
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
          <Link to={`/offer/${offer._id}`} key={offer._id}>
            <div>
              <img src={offer.company.logo} alt="comp-logo" />
              <p>{offer.company.name}</p>
              <p>{offer.title}</p>
              <p>{offer.contractType}</p>
              <p>Il y a {offer.createdAt}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Offers;
