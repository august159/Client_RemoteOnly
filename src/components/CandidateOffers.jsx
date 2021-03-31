import React, { Component } from "react";
import { withUser } from "./../components/Auth/withUser";
import apiHandler from "./../api/apiHandler";
import { Link } from "react-router-dom";

export class CandidateOffers extends Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    apiHandler
      .getConnectedUserInfo()
      .then((userInfo) => {
        //   const applications = userInfo.applications;
        this.setState({ applications: userInfo.applications });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { value, handleSelection } = this.props;
    return (
      <div>
        {this.state.applications && (
          <>
            {this.state.applications.map((application) => (
              <div>
                <div>
                  <img src={application.offer.company.logo} alt="" />
                  <p>Name: {application.offer.company.name}</p>
                  <p>Intitulé du poste: {application.offer.title}</p>
                  <p>Type de contrat: {application.offer.contractType}</p>
                  <p>{!application.offer.isActive && `Offre pourvue`}</p>
                </div>
                <button
                  onClick={() => {
                    handleSelection(application._id);
                  }}
                >
                  Select
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default withUser(CandidateOffers);
