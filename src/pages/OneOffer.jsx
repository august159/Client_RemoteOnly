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
      <div className="container">
        <div className="box">
          <h2 className="title is-6 mt-2">Description du poste</h2>

          <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif">{this.state.offer.jobDescription}</p>
          <h2 className="title is-6 mt-2">Profil recherché</h2>
          <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">{this.state.offer.profileDescription}</p>
          <button className="button is-info mt-2">Postuler</button>
        </div>
      </div>
    );
  }
}

export default OneOffer;
