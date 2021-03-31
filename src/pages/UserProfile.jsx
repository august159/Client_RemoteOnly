import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";

const UserProfile = (props) => {
  const { context } = props;

  const user = context.user;
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-200x200">
              <img className="is-rounded" src={user.avatar} alt="Placeholder" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">
              {user.firstName} {user.lastName}
            </p>
            <p className="subtitle is-6">{user.email}</p>
          </div>
        </div>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum
            reiciendis dolorem veniam est blanditiis repellendus eius eaque
            voluptatibus explicabo, aperiam, nulla in vero molestiae magnam
            esse. Nisi, incidunt cumque.
          </p>
        </div>
        <div>Téléphone: {user.phone}</div>

        <br />
        <div>
          <a href={user.linkedIn}>{user.linkedIn}</a>
        </div>

        <br />
        <br />

        <div className="is-flex-direction-row">
          <div>
            <button className="button is-info is-small">
              Modifier le profil
            </button>
          </div>
          <br />
          <div>
            <button className="button is-danger is-small">
              Suprimer le profil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withUser(UserProfile);
