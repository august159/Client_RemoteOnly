import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { withUser } from "../Auth/withUser";

export class ApplicationForm extends Component {
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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUpload = (event) => {
    this.setState({ logo: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      email,
      phone,
      linkedIn,
      gitHub,
      otherWebsite,
      resume,
      additionalInfo,
    } = this.state;

    console.log(`this.state`, this.state);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("linkedIn", linkedIn);
    formData.append("gitHub", gitHub);
    formData.append("otherWebsite", otherWebsite);
    formData.append("resume", resume);
    formData.append("additionalInfo", additionalInfo);
    formData.append("isSelected", false);
    formData.append("isReviewed", false);
    //TODO: Retrieve and add the id of the offer

    service
      .createApplication(formData)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/offer");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
        <label htmlFor="firstName">Prénom*</label>
        <input
          id="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
          name="firstName"
          type="text"
          // defaultValue="Richmond"
        />
        <label htmlFor="lastName">NOM*</label>
        <input
          value={this.state.lastName}
          onChange={this.handleChange}
          name="lastName"
          id="lastName"
          type="text"
          // defaultValue="AVENAL"
        />
        <label htmlFor="email">Email*</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
          id="email"
          type="text"
          // defaultValue="candidat4@gmail.com"
        />
        <label htmlFor="phone">Téléphone*</label>
        <input
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
          id="phone"
          type="text"
          // defaultValue="0623344556"
        />
        <label htmlFor="linkedIn">Lnkedin</label>
        <input
          onChange={this.handleChange}
          value={this.state.linkedIn}
          name="linkedIn"
          id="linkedIn"
          type="text"
          // defaultValue="www.linkedin.com/in/richmond"
        />
        <label htmlFor="gitHub">Github</label>
        <input
          onChange={this.handleChange}
          value={this.state.gitHub}
          name="gitHub"
          id="gitHub"
          type="text"
        />
        <label htmlFor="otherWebsite">Autre website</label>
        <input
          onChange={this.handleChange}
          value={this.state.otherWebsite}
          name="otherWebsite"
          id="otherWebsite"
          type="text"
        />
        <label htmlFor="resume">CV</label>
        <input
          onChange={this.handleUpload}
          name="resume"
          id="resume"
          type="file"
          id="resume"
        />
        <label htmlFor="additionalInfo">Ajouter un message</label>
        <textarea
          onChange={this.handleChange}
          value={this.state.additionalInfo}
          name="additionalInfo"
          id="additionalInfo"
          // defaultValue="I am a dicreet person that once was CEO until he discovered his true passion: hard rock. And to be fair, I am hard and I rock."
        />
        <button>Postuler</button>
      </form>
    );
  }
}

export default withRouter(withUser(ApplicationForm));
