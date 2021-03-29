import axios from "axios";
import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";

class ApplicationForm extends Component {
  state = {
    title: "",
    salary: 0,
    fieldWork: "",
    startingDate: "",
    contractType: "",
    jobDescription: "",
    profileDescription: "",
    recruitmentProcess: "",
  };

  handleChange = (event) => {
    const key = event.target.firstName;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");

    apiHandler
      .postApplication({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        linkedIn: this.state.linkedIn,
        gitHub: this.state.gitHub,
        otherWebsite: this.state.otherWebsite,
        resume: this.state.resume,
        additionalInfo: this.state.additionalInfo,
      })
      .then((response) => {
        this.props.history.push("/application");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom</label>
          <input
            id="title"
            onChange={this.handleChange}
            value={this.state.firstName}
            name="firstName"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Nom de Famille</label>
          <input
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Téléphone</label>
          <input
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Lnkedin</label>
          <input
            onChange={this.handleChange}
            value={this.state.linkedIn}
            name="linkedIn"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Github</label>
          <input
            onChange={this.handleChange}
            value={this.state.gitHub}
            name="gitHub"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Autre website</label>
          <input
            onChange={this.handleChange}
            value={this.state.otherWebsite}
            name="otherWebsite"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">CV</label>
          <input
            onChange={this.handleChange}
            value={this.state.resume}
            name="resume"
            type="file"
          />
        </div>
        <div>
          <label htmlFor="">Ajouter un message</label>
          <input
            onChange={this.handleChange}
            value={this.state.additionalInfo}
            name="additionalInfo"
            type="text"
          />
        </div>
        <button>Postuler</button>
      </form>
    );
  }
}

export default ApplicationForm;
