import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { withUser } from "../Auth/withUser";
// import { Link } from "react-router-dom";
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

  componentDidMount() {
    if (this.props.context.isLoggedIn) {
      service
        .getUser(this.props.context.user._id)
        .then((response) => {
          this.setState(response.searchedUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // componentDidUpdate(prevProps) {
  //   const { user } = this.props.context;
  //   if (this.props.context.isLoading !== prevProps.context.isLoading) {
  //     this.setState({
  //       // Import candidate date if logged in
  //       firstName: user.role === "candidate" ? user.firstName : "",
  //       lastName: user.role === "candidate" ? user.lastName : "",
  //       email: user.role === "candidate" ? user.email : "",
  //       phone: user.role === "candidate" ? user.phone : "",
  //       linkedIn: user.role === "candidate" ? user.linkedIn : "",
  //       gitHub: user.role === "candidate" ? user.gitHub : "",
  //       otherWebsite: user.role === "candidate" ? user.otherWebsite : "",
  //       additionalInfo: user.role === "candidate" ? user.additionalInfo : "",
  //     });
  //   }
  // }

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
    formData.append("offer", this.props.match.params.id);

    // this.props.context.user &&
    //   formData.append("user", this.props.context.user._id);
    // ! user is added in the back in the end
    const form = [...formData];

    if (
      form[0][1] !== "" ||
      form[1][1] !== "" ||
      form[2][1] !== "" ||
      form[3][1] !== ""
    ) {
      service
        .createApplication(formData)
        .then((response) => {
          console.log(response);
          this.props.history.push("/appconfirmation");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    if (this.props.context.isLoading) {
      return <div>...Loading...</div>;
    }
    return (
      <div className="content-wrapper ">
        <div className="container ">
          <div className="box mt-6">
            <div className="columns is-centered m-6">
              <div className="column is-6">
                <h2 className="mb-6 has-text-centered  title is-4">
                  Postulez pour ce job
                </h2>
                <form
                  onSubmit={this.handleSubmit}
                  encType="multipart/form-data"
                >
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
                    Nom*
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
                  <div className="center_element">
                    <button className="button is-link ">Postuler</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(withUser(ApplicationForm));
