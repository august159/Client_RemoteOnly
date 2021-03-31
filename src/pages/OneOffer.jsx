import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

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
    const {
      title,
      fieldWork,
      contractType,
      salary,
      startingDate,
      jobDescription,
      profileDescription,
      recruitmentProcess,
    } = this.state.offer.searchedOffer ? this.state.offer.searchedOffer : {};
    return (
      <>
        {this.state.offer.searchedOffer && (
          <div className="container">
            <div className="box">
              <h2 className="title is-6 mt-2">Description du poste</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif">
                {jobDescription}
              </p>
              <h2 className="title is-6 mt-2">Profil recherché</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {profileDescription}
              </p>
              <div className="box offerDetails">
                <h1>{title}</h1>
                <p>{fieldWork}</p>
                <p>{contractType}</p>
                <p>Rémunération: {salary} €/an</p>
                <p>Date de début: {startingDate}</p>
                <h4>Description de l'offre</h4>
                <p>{jobDescription}</p>
                <h4>Profil recherché</h4>
                <p>{profileDescription}</p>
                <h4>Processus de recrutement</h4>
                <p>{recruitmentProcess}</p>
              </div>
              <Link to={`/application/${this.props.match.params.id}`}>
                <button className="button is-info mt-2">Postuler</button>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default OneOffer;
