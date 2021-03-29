import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class OneOffer extends Component {
  state = {
    offer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    apiHandler
      .getOffer(id)
      .then((offer) => {
        console.log("offer :>> ", offer);
        this.setState({ offer });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.offer.jobDescription}</p>
        <p>{this.state.offer.profileDescription}</p>
      </div>
    );
  }
}

export default OneOffer;
