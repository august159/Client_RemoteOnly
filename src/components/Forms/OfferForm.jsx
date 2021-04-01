import React, { Component } from "react";
import service from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";
import { withRouter } from "react-router-dom";

class OfferForm extends Component {
  state = {
    title: "Growth analyst",
    salary: 45000,
    fieldWork: "Sales et Marketing",
    startingDate: "2021-06-01",
    contractType: "CDI",
    jobDescription:
      "Chez PayFit, nous avons l'ambition de tripler notre croissance cette année. Dans ce contexte, le rôle de l'équipe Growth est essentiel. Pour ce faire, nous pensons que l'une des clés sera d'optimiser le taux de conversion de notre entonnoir d'une visite en client. En tant que société SaaS, notre site web est généralement le premier point de contact qu'un prospect a avec nous. Votre rôle sera de vous assurer que notre parcours client est le meilleur que nous puissions offrir à travers tous les canaux entrants. Vos missions ⭐ - Soyez le propriétaire de l'augmentation de notre taux de conversion onsite et imaginez des tactiques astucieuses bien que pour atteindre votre objectif. - Soyez en charge de la mise en œuvre de notre système de marquage et de suivi afin de collecter des données comportementales tangibles et exploitables que vous transformerez en opportunités. - Créer de précieux tableaux de bord pour permettre à tout PayFiter d'accéder aux données marketing afin de créer une intelligence collective. - Priorisez les opportunités d'amélioration ; générez des hypothèses basées sur les données qui informent les stratégies pour les expériences et les campagnes. - Exécutez des tests A/B d'optimisation Web conçus pour améliorer une variété de paramètres. - Contrôler et évaluer les principaux indicateurs de performance. - Gérer et prioriser les projets que vous allez lancer. - Réfléchir, du point de vue du client, à la manière dont nous optimisons le site pour la découverte et l'éducation.",
    profileDescription:
      "Ce poste a été conçu pour vous si vous avez... 🦄 - 1 à 2 ans et plus d'expériences professionnelles pertinentes. - De très fortes capacités d'analyse et de créativité. - Vous êtes un scientifique caché : vous aimez expérimenter et tester de nouvelles idées. - Solide connaissance de Google Analytics ou de Segment. - Solides compétences en gestion de projet et en établissement de priorités. - Expérience préalable dans l'exécution de tests A/B conçus pour avoir un impact sur les paramètres de RTA et de RTA. - Capacité à travailler de manière transversale et à gérer un ensemble diversifié de parties prenantes. Nous sommes faits pour travailler ensemble si... 👪 - vous êtes un vrai joueur d'équipe qui veut construire une grande histoire de succès avec nous, - vous parlez couramment le français et l'anglais et vous souhaitez travailler dans un environnement international et dynamique, - vous avez de solides compétences interpersonnelles et de communication, - vous voulez apprendre, vous améliorer et prendre des responsabilités.",
    recruitmentProcess:
      "1️⃣ Entretien téléphonique avec Stan, notre responsable de la croissance 2️⃣ Étude de cas 3️⃣ Examen de l'étude de cas avec Stan 4️⃣ Rencontre avec Eva, notre responsable du marketing en Allemagne",
    status: true,
    company: "",
    // TODO: get the company's id from the userContext
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      title,
      salary,
      fieldWork,
      startingDate,
      contractType,
      jobDescription,
      profileDescription,
      recruitmentProcess,
    } = this.state;

    service
      .createOffer({
        title,
        salary,
        fieldWork,
        startingDate,
        contractType,
        jobDescription,
        profileDescription,
        recruitmentProcess,
        isActive: true,
      })
      .then((response) => {
        this.props.history.push("/recruiter");
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      title: "",
      salary: 0,
      fieldWork: "",
      startingDate: "",
      contractType: "",
      jobDescription: "",
      profileDescription: "",
      recruitmentProcess: "",
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

export default withRouter(withUser(OfferForm));
