import React from "react";
import { render } from "react-dom";
import FormSignin from "../components/Forms/FormSignin";

const Signin = (props) => {
  return (
    <div class="columns">
      <div class="column is-half">
        <img
          src="https://res.cloudinary.com/adgranmous/image/upload/v1617032008/signin_image_ezmhy2.png"
          alt="background_inscription"
        />
      </div>
      <div class="column is-half">
        <h3 className="is-size-3 has-text-weight-semibold">Connexion à l'espace</h3>
        <FormSignin />
      </div>
    </div>
  );
};

export default Signin;
