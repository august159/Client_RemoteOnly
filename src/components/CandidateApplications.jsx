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
    } = this.state.appInfo ? this.state.appInfo : {};
    console.log(`this.state.appInfo`, this.state.appInfo);
    console.log(`offer`, offer);
    return (

      

      <div>
      
        {this.state.appInfo && (
          <>
            {/* <div className="box offerDetails">
              <h1>{offer.title}</h1>
              <p>{offer.fieldWork}</p>
              <p>{offer.contractType}</p>
              <p>Rémunération: {offer.salary} €/an</p>
              <p>Date de début: {offer.startingDate}</p>
              <h4>Description de l'offre</h4>
              <p>{offer.jobDescription}</p>
              <h4>Profil recherché</h4>
              <p>{offer.profileDescription}</p>
              <h4>Processus de recrutement</h4>
              <p>{offer.recruitmentProcess}</p>
            </div> */}
            <div className=" applicationDetails">
              <h1 className="title is-4">Ma candidature</h1>

              <h2 className="title is-5">
                {firstName} {lastName}
              </h2>
              <h4 className="title is-5">Portfolio:</h4>
              <ul>
                {linkedIn && <li>LinkedIn: {linkedIn}</li>}
                {gitHub && <li>GitHub: {gitHub}</li>}
                {otherWebsite && <li>Other website: {otherWebsite}</li>}
              </ul>
              <h4 className="title is-5">C.V.: </h4>
              <embed
                src={resume}
                width={800}
                height={500}
                type="application/pdf"
              />
              <h4 className="title is-5">Informations supplémentaires:</h4>
              <p>{additionalInfo}</p>
            </div>
            {/* <button className="button is-info">Modifier ma candidature</button> */}
          </>
        )}
      </div>
    );
  }
}

export default CandidateApplications;
