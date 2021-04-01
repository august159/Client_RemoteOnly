import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class CompanyApplications extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    const id = this.props.offerId;
    console.log(`id`, id);

    apiHandler
      .getOffer(id)
      .then((offerInfo) => {
        console.log(`offerInfo`, offerInfo);
        this.setState({ applications: offerInfo.applications });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(`this.state.applications`, this.state.applications);
    return (
      <div>
        {this.state.applications.length > 0 ? (
          <>
            {this.state.applications.map((application) => (
              <div key={application._id}>
                <h2 className="title is-4">
                  {application.firstName} {application.lastName}
                </h2>
                <h4 className="title is-4">Portfolio:</h4>
                <ul>
                  {application.linkedIn && (
                    <li>LinkedIn: {application.linkedIn}</li>
                  )}
                  {application.gitHub && <li>GitHub: {application.gitHub}</li>}
                  {application.otherWebsite && (
                    <li>Other website: {application.otherWebsite}</li>
                  )}
                </ul>
                <h4 className="title is-4">C.V.: </h4>
                <embed
                  src={application.resume}
                  width={800}
                  height={500}
                  type="application/pdf"
                />
                <h4 className="title is-4">Informations supplémentaires:</h4>
                <p>{application.additionalInfo}</p>
              </div>
            ))}
          </>
        ) : (
          <h1>
            Aucune candidature à ce stade ! Revenez plus tard ou pensez à
            modifier votre annonce pour la rendre plus attractive
          </h1>
        )}
      </div>
    );
  }
}

export default CompanyApplications;
