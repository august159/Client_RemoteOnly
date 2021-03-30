import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class OneOffer extends Component {
  state = {
    offer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    apiHandler
      .getOffer(id)
      .then((offer) => {
        this.setState({ offer });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="box">
          <h2 className="title is-4">Description du poste</h2>

          <p>{this.state.offer.jobDescription}</p>
        </div>
        <div className="box">
          <h2 className="title is-4">Profil recherché</h2>
          <p>{this.state.offer.profileDescription}</p>
        </div>
        <div className=" has-text-centered">
          <button className="button is-info">Postuler</button>
        </div>
      </div>
    );
  }
}

export default OneOffer;
