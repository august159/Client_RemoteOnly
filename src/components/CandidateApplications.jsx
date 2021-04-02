import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class CandidateApplications extends Component {
  state = {
    appInfo: null,
  };

  componentDidMount() {
    const id = this.props.applicationId;

    apiHandler
      .getApplication(id)
      .then((appInfo) => {
        this.setState({ appInfo });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.applicationId !== prevProps.applicationId) {
      const id = this.props.applicationId;

      apiHandler
        .getApplication(id)
        .then((appInfo) => {
          this.setState({ appInfo });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const {
      firstName,
      lastName,
      linkedIn,
      gitHub,
      otherWebsite,
      resume,
      additionalInfo,
      offer,
      company,
    } = this.state.appInfo ? this.state.appInfo : {};
    return (
      <div>
        {this.state.appInfo && (
          <>
            <div className="column  is-three-quarter">
              <div className="box">
                <h1 className=" has-text-centered  title is-3">
                  Ma candidature
                </h1>
                <h2 className="title is-6">
                  {firstName} {lastName}
                </h2>
                <h4 className="title is-6">Portfolio:</h4>
                <ul>
                  {linkedIn && <li>LinkedIn: {linkedIn}</li>}
                  {gitHub && <li>GitHub: {gitHub}</li>}
                  {otherWebsite && <li>Other website: {otherWebsite}</li>}
                </ul>
                <h4 className="title is-6 mt-5">C.V.: </h4>
                <div className="has-text-centered">
                  <embed
                    src={resume}
                    width={800}
                    height={500}
                    type="application/pdf"
                  />
                </div>
                <h4 className="title is-6 mt-5">
                  Informations supplémentaires:
                </h4>
                <p>{additionalInfo}</p>
                <div className="has-text-centered">
                  <button className="button is-link has-text-centered">
                    Modifier ma candidature
                  </button>
                </div>
                <hr />
                <h1 className=" has-text-centered  title is-3">
                  Récapitulatif de l'offre candidatée
                </h1>
                <h2 className=" has-text-centered  title is-4">
                  {" "}
                  <strong>{offer.title}</strong> chez{" "}
                  <strong>{offer.company.name}</strong>
                </h2>

                <h2 className="title is-6 my-2">Domaine d'activité</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                  {offer.fieldWork}
                </p>

                <h2 className="title is-6 my-2">Description du poste</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif">
                  {offer.jobDescription}
                </p>

                <h2 className="title is-6 my-2">Profil recherché</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                  {offer.profileDescription}
                </p>

                <h2 className="title is-6 my-2">Rémunération</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                  {offer.salary} €/an
                </p>

                <h2 className="title is-6 my-2">Type de contrat</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                  {offer.contractType}
                </p>

                {/* <h2 className="title is-6 my-2">Date de début</h2>
<p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
{dateFormat(startingDate, "dd/mm/yyyy")}
</p> */}

                <h2 className="title is-6 my-2">Description de l'offre</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                  {offer.jobDescription}
                </p>

                <h2 className="title is-6 my-2">Processus de recrutement</h2>
                <p className="is-size-7 has-text-justified has-text-weight-normal is-family-sans-serif ">
                  {offer.recruitmentProcess}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CandidateApplications;
