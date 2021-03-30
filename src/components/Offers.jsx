import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
// import OneOffers from "./OneOffer";

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
        <div className="mb-3">
          <div className="card column is-8">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <h1>Offers</h1>
                  {this.state.offers.map((offer) => (
                    <Link to={`/offer/${offer._id}`} key={offer._id}>
                      <div>
                        <p></p>
                        <p></p>

                        <figure className="image is-48x48">
                          <img src={offer.company.logo} alt="comp-logo" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{offer.title}</p>
                        <p className="subtitle is-6">
                          {offer.company.name} <br />
                          <p>
                            {offer.contractType} <br />
                            Il y a {offer.createdAt}
                          </p>
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offers;
