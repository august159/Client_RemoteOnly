import React, { Component } from "react";
import { withUser } from "./../components/Auth/withUser";
import apiHandler from "./../api/apiHandler";

export class CandidateOffers extends Component {
  state = {
    applications: [],
  };

  componentDidUpdate(prevProps) {
    const { user } = this.props.context;
    if (this.props.context.isLoading !== prevProps.context.isLoading) {
      const id = user._id;
      console.log(`id`, id);
      apiHandler
        .getUser(id)
        .then((userInfo) => {
          //   const applications = userInfo.applications;
          this.setState({ applications: userInfo.applications });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { handleSelection, selectedOffer } = this.props;
    return (
      <div>
        {this.state.applications.map((application) => (
          <div
            key={application._id}
            onClick={(event) => handleSelection(event.target.value)}
            value={selectedOffer}
          >
            <img src={application.offer.company.logo} />
            <p>Name: {application.offer.company.name}</p>
            <p>Intitulé du poste: {application.offer.title}</p>
            <p>Type de contrat: {application.offer.contractType}</p>
            <p>{!application.offer.isActive && `Offre pourvue`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default withUser(CandidateOffers);
