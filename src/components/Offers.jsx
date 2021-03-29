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
      //   <h1>Offers</h1>
        {/* {this.state.offers.map((offer) => (
          <div key={offer._id}>
            <p>{offer.title}</p>
            <p>{offer.contractType}</p>
            <p>Il y a {offer.createdAt}</p>
          </div>
        ))} */}
      {/* <div className="pb-3">
      <div className="card column is-8">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2020/03/17104851/BLOG%20THUMBNAIL-768x768.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Product Manager</p>
              <p className="subtitle is-6">BlaBlaCar <br/>CDI - €70K</p>
            </div>
          </div>
        </div> */}
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
    // </div> 
    // </div>
    );
  }
}

export default Offers;
