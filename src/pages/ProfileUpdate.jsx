import React, { Component } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";

export class ProfileUpdate extends Component {
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

  componentDidMount() {
    service
      .getUser(this.props.context.user._id)
      .then((response) => {
        console.log(`response`, response);
        this.setState(response.searchedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // {
  //   avatar: this.props.context.user.avatar,
  //   firstName: this.props.context.user.firstName,
  //   lastName: this.props.context.user.lastName,
  //   email: this.props.context.user.email,
  //   phone: this.props.context.user.phone,
  //   linkedIn: this.props.context.user.linkedIn,
  //   gitHub: this.props.context.user.gitHub,
  //   otherWebsite: this.props.context.user.otherWebsite,
  //   resume: this.props.context.user.resume,
  //   additionalInfo: this.props.context.user.additionalInfo,
  // };

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
      avatar,
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
    formData.append("avatar", avatar);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("linkedIn", linkedIn);
    formData.append("gitHub", gitHub);
    formData.append("otherWebsite", otherWebsite);
    formData.append("resume", resume);
    formData.append("additionalInfo", additionalInfo);

    const id = this.props.match.params.id;

    service
      .updateUser(id, formData)
      .then((response) => {
        this.setState(response);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(`this.state`, this.state);
    return (
      <div className="content-wrapper">
        <div className="columns is-centered">
          <div className="column is-6 box m-6">
            <h2 className="is-size-3 mb-6">Modifier votre Profil</h2>

            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <div className="file">
                <label className="file-label">
                  <input
                    className="file-input"
                    onChange={this.handleUpload}
                    name="avatar"
                    id="avatar"
                    type="file"
                    id="avatar"
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">... Photo de profil</span>
                  </span>
                </label>
              </div>
              <br />
              <label className="label" htmlFor="firstName">
                Prénom
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
                NOM
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
                Email
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
                Téléphone
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
              <div>
                <button className="button is-primary mr-6">Modifier</button>
                <Link to={`/signup`}>
                  <button className="button is-danger has-text-centered ml-6">
                    Supprimer votre profil
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withUser(ProfileUpdate);
