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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`this.state`, this.state);
    service
      .signup(this.state)
      .then((data) => {
        // this.props.context.setUser(data);
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
        <select value={this.state.role} onChange={this.handleChange}>
          <option value="candidate">candidat</option>
          <option value="recruiter">recruteur</option>
        </select>
        <label htmlFor="firstName">Prénom</label>
        <input
          className="input"
          type="text"
          id="firstName"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <label htmlFor="lastName">Nom de famille</label>
        <input
          className="input"
          onChange={this.handleChange}
          value={this.state.lastName}
          type="text"
          id="lastName"
          name="lastName"
        />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="input"
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        <button>Inscription</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));
