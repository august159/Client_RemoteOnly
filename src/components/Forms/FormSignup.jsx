import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import service from "../../api/apiHandler";

class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "candidate",
  };

  handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`this.state`, this.state);
    service
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data); //? Defines the values in currentUser ?
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // this doesn't let the navbar to work I uncommented it

    // if (this.props.context.user) {
    //   return <Redirect exact to="/" />;
    // }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="content-wrapper">
          <div className="columns is-left">
            <div className="column is-6">
              <label htmlFor="role">Vous êtes :</label>
              <div class="control">
                <label className="radio">
                  <input
                    type="radio"
                    value="candidate"
                    checked={this.state.role === "candidate"}
                    className="mr-1"
                    name="role"
                    onChange={this.handleChange}
                  />
                  Candidat
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    className="mr-1"
                    value="recruiter"
                    name="role"
                    checked={this.state.role === "recruiter"}
                    onChange={this.handleChange}
                  />
                  Recruteur
                </label>
              </div>
              <label htmlFor="firstName">Prénom</label>
              <input
                className="input my-2"
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <label htmlFor="lastName">Nom de famille</label>
              <input
                className="input my-2"
                onChange={this.handleChange}
                value={this.state.lastName}
                type="text"
                id="lastName"
                name="lastName"
              />
              <label htmlFor="email">Email</label>
              <input
                className="input my-2"
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                id="email"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <input
                className="input my-2"
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                id="password"
                name="password"
              />
              <button className="button is-link">Suivant</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormSignup;
