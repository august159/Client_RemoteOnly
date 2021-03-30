import React from "react";
import "./../styles/custom.css";
import Offers from "./../components/Offers";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-large">
          <div className="hero-body is-half">
            <h2 className="is-size-1 has-text-white has-text-centered">
              Travailler de France, travailler à domicile, travailler de partout
            </h2>
            <p className="is-size-5 has-text-white has-text-centered">
              Les meilleurs emplois dans le tech et autres pour ceux qui
              souhaitent démarrer leur carrière full remote
            </p>
            <button className="button is-primary">Poster un job</button>
          </div>
        </section>
        <section className="py-4">
        
          <div className="columns pl-8">
            <div className="column is-2 column is-half">
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
        </section>

        <section className="py-3">
          <h3 className="is-size-3 has-text-centered">Aujourd'hui</h3>
          <Offers/>
        </section>
      </div>
    );
  }
}

export default Home;
