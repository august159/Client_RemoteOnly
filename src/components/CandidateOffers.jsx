import React, { Component } from "react";
import { withUser } from "./../components/Auth/withUser";
import apiHandler from "./../api/apiHandler";
export class CandidateOffers extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    apiHandler
      .getAppsFromLoggedInCandidate()
      .then((userInfo) => {
        console.log(`userInfo.applications`, userInfo);
        this.setState({ applications: userInfo.applications });
        console.log(`userInfo.applications`, userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { handleSelection } = this.props;
    return (
      <div>
        {this.state.applications && (
          <div className="media">
            <div className="box">
              <div className="column is-three-quarter">
                {this.state.applications.map((application) => (
                  <div key={application._id}>
                    <div
                      className="clicked"
                      onClick={() => {
                        handleSelection(application._id);
                      }}
                    >
                      <div class="media-left">
                        <figure class="image is-64x64 mb-2">
                          <img
                            src={application.offer.company.logo}
                            alt={application.offer.company.name}
                          />
                        </figure>
                      </div>

                      <div class="media-content">
                        <div class="content">
                          <p><strong>Name</strong>{application.offer.company.name}</p>
                          <p><strong>Intitulé du poste</strong>{application.offer.title}</p>
                          <p>
                            <strong>Type de contrat</strong> {application.offer.contractType}
                          </p>
                          <p>
                            {!application.offer.isActive && `Offre pourvue`}
                          </p>
                          <hr />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withUser(CandidateOffers);
