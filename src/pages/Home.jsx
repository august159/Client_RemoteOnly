import React from "react";
import "./../styles/custom.css";
import Offers from "./../components/Offers";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
// import SearchBar from "./../components/SearchBar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-fullheight is-primary is-bold" id="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="is-size-1 has-text-white has-text-centered">
                Travailler de France, travailler à domicile, travailler de
                partout
              </h2>
              <p className="is-size-5 has-text-white has-text-centered">
                Les meilleurs emplois dans le tech et autres pour ceux qui
                souhaitent démarrer leur carrière full remote
              </p>
              <Link
                to={
                  this.props.context.user &&
                  this.props.context.user.role === "recruiter"
                    ? "/offer"
                    : "/signup"
                }
              >
                <button className="button  is-info is-primary mt-4">
                  Déposer une annonce
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="hero has-background-white is-small py-4">
          <div className="hero-body">
            <div className="container">
              <div className="is-divider"></div>

              <div className="columns pl-8 has-text-centered">
                <div className="column is-2 column ">
                  <h2>🎨</h2>
                  <h3 className="has-text-weight-bold">Design</h3>
                </div>
                <div className="column is-2">
                  <h2>💻</h2>
                  <h3 className="has-text-weight-bold"> Programmation</h3>
                </div>
                <div className="column is-2">
                  <h2>🔨</h2>
                  <h3 className="has-text-weight-bold">Produit</h3>
                </div>
                <div className="column is-2">
                  <h2>🎧</h2>
                  <h3 className="has-text-weight-bold">Support Client</h3>
                </div>
                <div className="column is-2">
                  <h2>📈</h2>
                  <h3 className="has-text-weight-bold">Sales et Marketing</h3>
                </div>
                <div className="column is-2">
                  <h2>⚙️</h2>
                  <h3 className="has-text-weight-bold">DevOps</h3>
                </div>
              </div>
            </div>
            {/* <SearchBar /> */}
          </div>
        </section>
        <section className="hero has-background-white-ter">
          <div className="hero-body">
            <div className="content-wrapper">
              <div className="columns is-centered" id="offers">
                <Offers />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withUser(Home);
