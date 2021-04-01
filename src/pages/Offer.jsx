import React from "react";

import OfferForm from "../components/Forms/OfferForm";

const OfferCreation = (props) => {
  return (
    <div>
      <h1 className="pt-4 is-size-3 has-text-weight-semibold as-text-centered">
        Merci de remplir le formulaire ci-après pour créer une annonce.
      </h1>
      <div className="columns is-centered">
        <div className="is-two-thirds">
          <OfferForm />
        </div>
      </div>
    </div>
  );
};

export default OfferCreation;
