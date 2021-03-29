import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withRouter } from "react-router-dom";

export class CompanyForm extends Component {
  state = {
    name: "",
    logo: null,
    city: "",
    size: "",
    industry: "",
    website: "",
    description: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFile = (event) => {
    this.setState({ logo: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      logo,
      city,
      size,
      industry,
      website,
      description,
    } = this.state;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("logo", logo);
    formData.append("city", city);
    formData.append("size", size);
    formData.append("industry", industry);
    formData.append("website", website);
    formData.append("description", description);

    service
      .postCompany(formData)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/company"); // Redirection to company dashboard
      })
      .catch((error) => {
        console.dir(error);
      });
  };

  render() {
    return (
      <form>
        <label htmlFor="company">Nom de l'entreprise*</label>
        <input
          className="input"
          type="text"
          id="company"
          name="company"
          value={this.state.company}
          onChange={this.handleChange}
        />
        <label htmlFor="logo">Logo</label>
        <input
          className="input"
          type="file"
          id="logo"
          name="logo"
          value={this.state.logo}
          onChange={this.handleFile}
        />
        <label htmlFor="city">Ville</label>
        <input
          className="input"
          type="text"
          id="city"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <label htmlFor="size">Taille de l'entreprise</label>
        <input
          className="input"
          type="number"
          id="size"
          name="size"
          value={this.state.size}
          onChange={this.handleChange}
        />
        <label htmlFor="industry">Domaine d'activité</label>
        <input
          className="input"
          type="text"
          id="industry"
          name="industry"
          value={this.state.industry}
          onChange={this.handleChange}
        />
        <label htmlFor="website">Site website</label>
        <input
          className="input"
          type="text"
          id="website"
          name="website"
          value={this.state.website}
          onChange={this.handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>S'inscrire</button>
      </form>
    );
  }
}

export default withRouter(CompanyForm);
