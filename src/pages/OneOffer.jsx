import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

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
    console.log(
      `this.state.offer.searchedOffer`,
      this.state.offer.searchedOffer
    );
    const {
      title,
      fieldWork,
      contractType,
      salary,
      startingDate,
      jobDescription,
      profileDescription,
      recruitmentProcess,
      company,
    } = this.state.offer.searchedOffer ? this.state.offer.searchedOffer : {};
    // console.log(`company.title`, company.title)

    return (
      <>
        {this.state.offer.searchedOffer && (
          <div className="container">
            <div className="box my-6">
              {/* <div className=" my-2"> */}

              <img
                className="center_element my-2"
                src={company.logo}
                alt="company-logo"
                id="img"
              />
              <h2 className=" has-text-centered  title is-4">
                {" "}
                Postuler au poste de <strong>{title}</strong> chez{" "}
                <strong>{company.name}</strong>
              </h2>

              <h2 className="title is-6 my-2">Domaine d'activité</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {fieldWork}
              </p>

              <h2 className="title is-6 my-2">Description du poste</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif">
                {jobDescription}
              </p>

              <h2 className="title is-6 my-2">Profil recherché</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {profileDescription}
              </p>

              <h2 className="title is-6 my-2">Rémunération</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {salary} €/an
              </p>

              <h2 className="title is-6 my-2">Type de contrat</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {contractType}
              </p>

              <h2 className="title is-6 my-2">Date de début</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {dateFormat(startingDate, "dd/mm/yyyy")}
              </p>

              <h2 className="title is-6 my-2">Description de l'offre</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {jobDescription}
              </p>

              <h2 className="title is-6 my-2">Processus de recrutement</h2>
              <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                {recruitmentProcess}
              </p>
              <div className="center_element pt-4 mr-6">
                <Link to={`/application/${this.props.match.params.id}`}>
                  <button className="button is-link has-text-centered">
                    Postuler
                  </button>
                </Link>
              </div>
            </div>
          </div>
          // </div>
        )}
      </>
    );
  }
}

export default OneOffer;
