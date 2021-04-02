import React, { Component } from "react";
import apiHandler from "./src/api/apiHandler";

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

    apiHandler
      .postOffer({
        title: this.state.title,
        brasalarynd: this.state.salary,
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Intitulé du poste</label>
          <input
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Salaire</label>
          <input
            value={this.state.salary}
            onChange={this.handleChange}
            name="salary"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="">Domaine</label>
          <input
            onChange={this.handleChange}
            value={this.state.fieldWork}
            name="fieldWork"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Date de début</label>
          <input
            value={this.state.startingDate}
            onChange={this.handleChange}
            name="startingDate"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="">Type de contrat</label>
          <input
            onChange={this.handleChange}
            value={this.state.contractType}
            name="contractType"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Descriptif du poste</label>
          <input
            onChange={this.handleChange}
            value={this.state.jobDescription}
            name="jobDescription"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Profil recherché</label>
          <input
            onChange={this.handleChange}
            value={this.state.profileDescription}
            name="profileDescription"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Déroulement des entretiens</label>
          <input
            onChange={this.handleChange}
            value={this.state.recruitmentProcess}
            name="recruitmentProcess"
            type="text"
          />
        </div>
        <button>Poster votre offre</button>
      </form>
    );
  }
}

export default OfferForm;
