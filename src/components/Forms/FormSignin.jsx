import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";

class FormSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input className="input py-4" type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input
          className="input pb-4"
          type="password"
          id="password"
          name="password"
        />
        <button className="button is-link">Submit</button>
        <p>Vous n’avez pas de compte ? <a className="has-text-link" href="/signup"> S’inscrire ici</a></p>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignin));
