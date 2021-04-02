import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import "./../styles/custom.css";

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
      <div className="applications wrapper">
        {this.state.applications.length > 0 ? (
          <>
            {this.state.applications.map((application) => (
              <div key={application._id}>
                <div className="applications column  is-three-quarter">
                  <div className="applications box p-0">
                    <div class="card-content">
                      <h2 className="applications title is-3">
                        {application.firstName} {application.lastName}
                      </h2>
                      <div className="applications icons is-flex is-justify-content-flex-end">
                        {application.linkedIn && (
                          <a
                            className="mr-2 clicked"
                            href={application.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-linkedin"></i>
                          </a>
                        )}
                        {application.gitHub && (
                          <a
                            className="mr-2 clicked"
                            href={application.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-github"></i>
                          </a>
                        )}
                        {application.otherWebsite && (
                          <a
                            className="clicked"
                            href={application.otherWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fas fa-link"></i>
                          </a>
                        )}
                      </div>
                      <p>
                        <strong>
                          <i class="fas fa-phone-alt"></i>
                        </strong>
                        {"  "}
                        {application.phone}
                      </p>
                      <p>
                        <i class="fas fa-at"></i>
                        {"  "}
                        {application.email}
                      </p>
                      <br></br>
                      <h4 className="applications title is-6 mb-2">
                        Informations supplémentaires:
                      </h4>
                      <p>{application.additionalInfo}</p>
                    </div>
                    <footer class="card-footer">
                      {application.resume && (
                        <a
                          href={application.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="card-footer-item"
                        >
                          C.V.
                        </a>
                      )}
                      <a
                        href="mailto:{application.email}"
                        class="card-footer-item"
                      >
                        Email
                      </a>
                      <a
                        href="tel:{application.phone}"
                        class="card-footer-item"
                      >
                        Appel
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="applications column  is-three-quarter">
            <div className="applications box">
              <h1>
                Aucune candidature à ce stade ! Revenez plus tard ou pensez à
                modifier votre annonce pour la rendre plus attractive
              </h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CompanyApplications;
