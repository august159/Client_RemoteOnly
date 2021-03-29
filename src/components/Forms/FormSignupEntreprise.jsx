import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="role">Vous êtes :</label>
        <div class="control">
          <label className="radio">
            <input
              type="radio"
              value={this.state.value}
              name="role"
              onChange={this.handleChange}
            />
            Candidat
          </label>
          <label className="radio">
            <input
              type="radio"
              value={this.state.value}
              name="role"
              onChange={this.handleChange}
              checked
            />
            Recruteur
          </label>
        </div>

        {/* <select
          // id="role"
          value={this.state.value}
          name="role"
          onChange={this.handleChange}
        >
          <option value="candidate">candidat</option>
          <option value="recruiter">recruteur</option>
        </select> */}
        <label htmlFor="city">Ville</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          className="input pb-4"
          type="text"
          id="city"
          name="city"
        />
        <label htmlFor="size">Taille de l'entreprise</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          className="input pb-4"
          type="text"
          id="size"
          name="size"
        />
        <label htmlFor="industry">Industrie</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          className="input pb-4"
          type="text"
          id="industry"
          name="industry"
        />

        <label htmlFor="website">Site web</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          className="input pb-4"
          type="text"
          id="website"
          name="website"
        />

        <label htmlFor="description">Description</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          className="input pb-4"
          type="text"
          id="description"
          name="description"
        />
        <button className="button is-link">Inscription</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));
