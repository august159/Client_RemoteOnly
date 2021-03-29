import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export class OneOffer extends Component {
  state = {
    offer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    apiHandler
      .getOffer(id)
      .then((offer) => {
        this.setState({ offer });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div></div>;
    // <div>{this.state.offer.title}</div>;
  }
}

export default OneOffer;
