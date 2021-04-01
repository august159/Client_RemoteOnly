import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";
import "./../styles/custom.css";

const UserProfile = (props) => {
  const { context } = props;

  const user = context.user;
  return (
    <div className="content-wrapper">
      <div className="columns is-centered">
        <div className="box column is-6 py-6 px-6">
          <h2 className="is-size-3 mb-6">Mon compte</h2>
          
            <div className="media my-2">
              <div className="media-left">
                <figure >
                  <img
                    id="img"
                    src={user.avatar}
                    alt="Placeholder"
                  />
                </figure>
              </div>
            </div>
            <div className="media-content my-2">
              <p className="title is-4">
                {user.firstName} {user.lastName}
              </p>
              <p className="subtitle is-6">{user.email}</p>
            </div>
          <div className="content">
          <div><strong>Description:</strong>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
          <div><strong>Téléphone:</strong> {user.phone}</div>
          </div>
          
          <div>
            <a href={user.linkedIn}>{user.linkedIn}</a>
          </div>
          <div className="is-flex-direction-row">
            <div>
              <button className="button is-info is-primary">
                Modifier le profil
              </button>
            </div>
            <br />
            <div>
              <button className="button is-danger is-primary">
                Suprimer le profil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default withUser(UserProfile);
