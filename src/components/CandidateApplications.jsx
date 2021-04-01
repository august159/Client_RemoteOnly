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
                <h1 className="title is-6">Ma candidature</h1>
                <h2 className="title is-6">
                  {firstName} {lastName}
                </h2>
                <h4 className="title is-6">Portfolio:</h4>
                <ul>
                  {linkedIn && <li>LinkedIn: {linkedIn}</li>}
                  {gitHub && <li>GitHub: {gitHub}</li>}
                  {otherWebsite && <li>Other website: {otherWebsite}</li>}
                </ul>
                <h4 className="title is-6">C.V.: </h4>
                <embed
                  src={resume}
                  width={800}
                  height={500}
                  type="application/pdf"
                />
                <h4 className="title is-5">Informations supplémentaires:</h4>
                <p>{additionalInfo}</p>
                <hr />
                <h1>{offer.title}</h1>
                <p>{offer.fieldWork}</p>
                <p>{offer.contractType}</p>
                <p>Rémunération: {offer.salary} €/an</p>
                <p>Date de début: {offer.startingDate}</p>
                <h4>Description de l'offre</h4>
                <p>{offer.jobDescription}</p>
              </div>
              {/* <button className="button is-info">Modifier ma candidature</button> */}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CandidateApplications;
