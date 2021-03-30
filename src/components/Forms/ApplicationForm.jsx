import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { withUser } from "../Auth/withUser";

export class ApplicationForm extends Component {
  state = {
    // Import candidate date if logged in
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    gitHub: "",
    otherWebsite: "",
    resume: "",
    additionalInfo: "",
  };

  componentDidUpdate(prevProps) {
    const { user } = this.props.context;
    if (this.props.context.isLoading !== prevProps.context.isLoading) {
      this.setState({
        // Import candidate date if logged in
        firstName: user.role === "candidate" ? user.firstName : "",
        lastName: user.role === "candidate" ? user.lastName : "",
        email: user.role === "candidate" ? user.email : "",
        phone: user.role === "candidate" ? user.phone : "",
        linkedIn: user.role === "candidate" ? user.linkedIn : "",
        gitHub: user.role === "candidate" ? user.gitHub : "",
        otherWebsite: user.role === "candidate" ? user.otherWebsite : "",
        additionalInfo: user.role === "candidate" ? user.additionalInfo : "",
      });
    }
  }

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
    this.props.context.user &&
      formData.append("user", this.props.context.user._id);

    service
      .createApplication(formData)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("appconfirmation");
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedIn: "",
      gitHub: "",
      otherWebsite: "",
      resume: "",
      additionalInfo: "",
    });
  };

  render() {
    console.log(`this.props.context`, this.props.context);
    if (this.props.context.isLoading) {
      return <div>...Loading...</div>;
    }
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <label htmlFor="firstName">Prénom*</label>
        <input
          id="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
          name="firstName"
          type="text"
        />
        <label htmlFor="lastName">NOM*</label>
        <input
          value={this.state.lastName}
          onChange={this.handleChange}
          name="lastName"
          id="lastName"
          type="text"
        />
        <label htmlFor="email">Email*</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
          id="email"
          type="text"
        />
        <label htmlFor="phone">Téléphone*</label>
        <input
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
          id="phone"
          type="text"
        />
        <label htmlFor="linkedIn">Lnkedin</label>
        <input
          onChange={this.handleChange}
          value={this.state.linkedIn}
          name="linkedIn"
          id="linkedIn"
          type="text"
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
        />
        <button>Postuler</button>
      </form>
    );
  }
}

export default withRouter(withUser(ApplicationForm));
