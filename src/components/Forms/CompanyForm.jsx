import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { withUser } from "../Auth/withUser";

export class CompanyForm extends Component {
  state = {
    name: "",
    logo: "",
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
    console.log(`formData`, formData);

    // const formData = {
    //   name,
    //   city,
    //   size,
    //   industry,
    //   website,
    //   description,
    // };
    console.log(`formData`, formData);

    service
      .createCompany(formData)
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
      <form onSubmit={this.handleSubmit} /*enctype="multipart/form-data"*/>
        <label htmlFor="name">Nom de l'entreprise*</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          defaultValue="Ironhack"
        />
        <label htmlFor="logo">Logo</label>
        <input
          className="input"
          type="file"
          id="logo"
          name="logo"
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
          defaultValue="Madrid"
        />
        <label htmlFor="size">Taille de l'entreprise</label>
        <input
          className="input"
          type="number"
          id="size"
          name="size"
          value={this.state.size}
          onChange={this.handleChange}
          defaultValue="100"
        />
        <label htmlFor="industry">Domaine d'activité</label>
        <input
          className="input"
          type="text"
          id="industry"
          name="industry"
          value={this.state.industry}
          onChange={this.handleChange}
          defaultValue="Enseignement"
        />
        <label htmlFor="website">Site website</label>
        <input
          className="input"
          type="text"
          id="website"
          name="website"
          value={this.state.website}
          onChange={this.handleChange}
          defaultValue="ironhack.com"
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
          defaultValue="Ironhack est une entreprise d'enseignement aux métiers du digital (web-development, UX, data & cyber-security)"
        />
        <button>S'inscrire</button>
      </form>
    );
  }
}

export default withRouter(withUser(CompanyForm));
