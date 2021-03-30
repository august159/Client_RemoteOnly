import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";

class OfferForm extends Component {
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
    const key = event.target.title;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");

    apiHandler
      .postOffer({
        title: this.state.title,
        salary: this.state.salary,
        fieldWork: this.state.fieldWork,
        startingDate: this.state.startingDate,
        contractType: this.state.contractType,
        jobDescription: this.state.jobDescription,
        profileDescription: this.state.profileDescription,
        recruitmentProcess: this.state.recruitmentProcess,
      })
      .then((response) => {
        this.props.history.push("/offer");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Intitulé de poste*</label>
          <input
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            className="input"
            name="title"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="salary">Salaire</label>
          <input
            value={this.state.salary}
            onChange={this.handleChange}
            className="input pb-4"
            name="salary"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="fieldWork">Domaine</label>
          <input
            onChange={this.handleChange}
            value={this.state.fieldWork}
            className="input pb-4"
            name="fieldWork"
            type="dropdown"
          />
        </div>
        <div>
          <label htmlFor="startingDate">Date de début</label>
          <input
            value={this.state.startingDate}
            onChange={this.handleChange}
            className="input pb-4"
            name="startingDate"
            type="date"
          />

          <label htmlFor="contractType">Type de contrat*</label>
          <input
            value={this.state.contractType}
            onChange={this.handleChange}
            className="input pb-4"
            name="contractType"
            type="dropdown"
          />
        </div>
        <div>
          <label htmlFor="jobDescription">Descriptif du poste*</label>
          <input
            onChange={this.handleChange}
            value={this.state.jobDescription}
            className="textarea pb-4"
            name="jobDescription"
            type="textarea"
          />
        </div>
        <div>
          <label htmlFor="profileDescription">Profil recherché</label>
          <input
            onChange={this.handleChange}
            value={this.state.profileDescription}
            className="textarea pb-4"
            name="profileDescription"
            type="textarea"
          />
        </div>
        <div>
          <label htmlFor="recruitmentProcess">Déroulement d'entretien</label>
          <input
            onChange={this.handleChange}
            value={this.state.recruitmentProcess}
            className="textarea pb-4"
            name="recruitmentProcess"
            type="textarea"
          />
        </div>

        <button className="button is-link">Poster pour 10€</button>
      </form>
    );
  }
}

export default OfferForm;
