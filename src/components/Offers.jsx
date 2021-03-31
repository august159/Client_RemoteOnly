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
        <div className="column is-12 ">
          {this.state.offers.map((offer) => (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <div className="card my-4">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <div>
                        <figure className="image is-48x48">
                          <img src={offer.company.logo} alt="comp-logo" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{offer.title}</p>
                        <div className="subtitle is-6">
                          <p>{offer.company.name} • {offer.contractType} 
                            {/* Il y a {offer.createdAt} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Offers;
