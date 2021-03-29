import React from "react";
import FormSignup from "../components/Forms/FormSignup";

const Signup = (props) => {

  
  return (

    <div class="columns">
    <div class="column is-half">
      <img
        src="https://res.cloudinary.com/adgranmous/image/upload/v1617032008/signin_image_ezmhy2.png"
        alt="background_inscription"
      />
    </div>
    <div class="column is-half">
      <h3 className="is-size-3 has-text-weight-semibold">Créer votre compte</h3>
      <FormSignup />
    </div>
  </div>
  )
};

export default Signup;
