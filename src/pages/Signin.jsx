import React from "react";
import { render } from "react-dom";
import FormSignin from "../components/Forms/FormSignin";

const Signin = (props) => {
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
          <div className="column is-half">
            <h3 className="is-size-3 has-text-weight-semibold mb-4">
              Connexion à l'espace
            </h3>
            <FormSignin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
