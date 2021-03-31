import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import { Link } from "react-router-dom";
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
    formData.append("offer", this.props.match.params.id);
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
    console.log(`this.props.match.params`, this.props.match.params);
    if (this.props.context.isLoading) {
      return <div>...Loading...</div>;
    }
    return (
      <div className="content-wrapper">
        <div className="columns is-centered">
          <div className="column is-6">
            <h2 className="is-size-3 mb-6">Postulez pour ce job</h2>
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <label className="label" htmlFor="firstName">
                Prénom*
              </label>
              <input
                id="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
                name="firstName"
                type="text"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="lastName" className="label">
                NOM*
              </label>
              <input
                value={this.state.lastName}
                onChange={this.handleChange}
                name="lastName"
                id="lastName"
                type="text"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="email" className="label">
                Email*
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                id="email"
                type="text"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="phone" className="label">
                Téléphone*
              </label>
              <input
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                id="phone"
                type="text"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="linkedIn" className="label">
                Lnkedin
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.linkedIn}
                name="linkedIn"
                id="linkedIn"
                type="text"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="gitHub" className="label">
                Github
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.gitHub}
                name="gitHub"
                id="gitHub"
                type="text"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="otherWebsite" className="label">
                Autre website
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.otherWebsite}
                name="otherWebsite"
                id="otherWebsite"
                type="text"
                className="input"
              />
              <br />
              <br />
              <div className="file">
                <label className="file-label">
                  <input
                    className="file-input"
                    onChange={this.handleUpload}
                    name="resume"
                    id="resume"
                    type="file"
                    id="resume"
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">... Ajoutez votre CV</span>
                  </span>
                </label>
              </div>
              <br />
              <label htmlFor="additionalInfo" className="label">
                Ajouter un message
              </label>
              <textarea
                onChange={this.handleChange}
                value={this.state.additionalInfo}
                name="additionalInfo"
                id="additionalInfo"
                className="textarea"
              />
              <br />
              <Link to={`/appconfirmation`}>
                <button className="button is-primary">Postuler</button>
              </Link>
              <Link to={`/signup`}>
              <button className="button is-danger has-text-centered ">
                Créer votre compte
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(withUser(ApplicationForm));