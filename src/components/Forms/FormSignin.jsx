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
        <div className="content-wrapper">
              <div className="columns is-left">  
              <div className="column is-6">
       
        <label htmlFor="email">Email</label>
        <input className="input my-2" type="email" id="email" name="email" />
        <label htmlFor="password">Mot de passe</label>
        <input
          className="input my-2"
          type="password"
          id="password"
          name="password"
        />
        <button className="button is-link my-2">Connexion</button>
        <p>Vous n’avez pas de compte ? <a className="has-text-link" href="/signup"> S’inscrire ici</a></p>
        </div>
        </div>
        </div>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignin));
