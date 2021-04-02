import React from "react";
import { Link } from "react-router-dom";

const ApplicationConfirmation = () => {
  return (
    <div>
      <div className="content-wrapper m-4">
        <div className="columns is-centered has-text-centered m-4">
          <div className="column is-6">
            <h2 className="is-size-4 m-4 has-text-centered title">
              Votre candidature est bien envoyé
            </h2>
            <img
              src="https://res.cloudinary.com/adgranmous/image/upload/v1617202592/candidature_vjfcwl.png"
              alt="success_image"
              style={{ width: "50%" }}
            />

            <h4 className=" title is-size-6 my-3 has-text-centered">
              Vous pouvez creer un compte pour suivre vos candidatures
            </h4>
            <br />
            <br />

            <Link exact to="/">
              <button className="button is-danger has-text-centered ">
                Voir plus d'offres
              </button>
            </Link>
            {/* <br />
            <br />

            <Link exact to="/signup">
              <button className="button is-danger has-text-centered ">
                Créer votre compte
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationConfirmation;
