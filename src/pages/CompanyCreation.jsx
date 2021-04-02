import React from "react";
import CompanyForm from "../components/Forms/CompanyForm";
import { withUser } from "../components/Auth/withUser";

const CompanyCreation = (props) => {
  return (
    <div className="container">
      <div className="hero-body">
        <div className="columns">
          <div className="column is-hidden-mobile is-half">
            <img
              src="https://res.cloudinary.com/adgranmous/image/upload/v1617032008/signin_image_ezmhy2.png"
              alt="background_inscription"
            />
          </div>
          <div className="column is-full">
            <h3 className="is-size-3 has-text-weight-semibold mb-4">
              Créer votre compte
            </h3>
            <CompanyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withUser(CompanyCreation);
