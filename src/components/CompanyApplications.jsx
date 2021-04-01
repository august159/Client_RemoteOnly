import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

export class CompanyApplications extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    const id = this.props.offerId;

    apiHandler
      .getOffer(id)
      .then((offerInfo) => {
        this.setState({ applications: offerInfo.applications });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.offerId !== prevProps.offerId) {
      const id = this.props.offerId;

      apiHandler
        .getOffer(id)
        .then((offerInfo) => {
          // console.log(`this.props`, this.props);
          // console.log(`prevProps`, prevProps);
          this.setState({ applications: offerInfo.applications });
          console.log(`this.state.applications`, this.state.applications);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    console.log(`this.state.applications`, this.state.applications);
    return (
      <div>
        {this.state.applications.length > 0 ? (
          <>
            {this.state.applications.map((application) => (
              <div key={application._id}>
                <div className="column  is-three-quarter">
                  <div className="box">
                    <h2 className="title is-4">
                      {application.firstName} {application.lastName}
                    </h2>
                    {application.linkedIn && (
                      <a
                        href={application.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linkedin
                      </a>
                    )}
                    {application.gitHub && (
                      <a
                        href={application.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {application.otherWebsite && (
                      <a
                        href={application.otherWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Other website
                      </a>
                    )}
                    <h4 className="title is-4">C.V.: </h4>
                    <embed
                      src={application.resume}
                      width={800}
                      height={500}
                      type="application/pdf"
                    />
                    <h4 className="title is-4">
                      Informations supplémentaires:
                    </h4>
                    <p>{application.additionalInfo}</p>
                  </div>
                </div>
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
