import React from "react";
import "./../styles/custom.css";
import Offers from "./../components/Offers";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-large">
          <div class="hero-body is-half">
            <h2 className="is-size-1 has-text-white has-text-centered">
              Travailler de France, travailler à domicile, travailler de partout
            </h2>
            <p className="is-size-5 has-text-white has-text-centered">
              Les meilleurs emplois dans le tech et autres pour ceux qui
              souhaitent démarrer leur carrière full remote
            </p>
            <button class="button is-primary">Poster un job</button>
          </div>
        </section>
        <section className="py-4">
        
          <div className="columns pl-8">
            <div className="column is-2 column is-half">
              <h2>🎨</h2>
              <h3 className="has-text-weight-bold">Design</h3>
            </div>
            <div class="column is-2">
              <h2>💻</h2>
              <h3 className="has-text-weight-bold"> Programmation</h3>
            </div>
            <div class="column is-2">
              <h2>🔨</h2>
              <h3 className="has-text-weight-bold">Produit</h3>
            </div>
            <div class="column is-2">
              <h2>🎧</h2>
              <h3 className="has-text-weight-bold">Support Client</h3>
            </div>
            <div class="column is-2">
              <h2>📈</h2>
              <h3 className="has-text-weight-bold">Sales et Marketing</h3>
            </div>
            <div class="column is-2">
              <h2>⚙️</h2>
              <h3 className="has-text-weight-bold">DevOps</h3>
            </div>
          </div>
        </section>

        <section className="py-3">
          <h3 className="is-size-3 has-text-centered">Aujourd'hui</h3>
          <Offers/>

{/* 

          <div className="pb-3">
            <div className="card column is-8">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2020/03/17104851/BLOG%20THUMBNAIL-768x768.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Product Manager</p>
                    <p className="subtitle is-6">BlaBlaCar <br/>CDI - €70K</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 

           <div className="pb-3" >
            <div className="card column is-8">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2020/03/17104851/BLOG%20THUMBNAIL-768x768.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Product Manager</p>
                    <p className="subtitle is-6">BlaBlaCar <br/>CDI - €70K</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        
        </section>
      </div>
    );
  }
}

export default Home;
