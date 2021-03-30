import React from "react";
import "../styles/custom.css";
import apiHandler from "../api/apiHandler";

class DashboardRecruiter extends React.Component {
  // state = {
  //   offers: [],
  // };

  // componentDidMount() {
  //   apiHandler.getOffers()
  //     .then((response) => {
  //       this.setState({ offers: response});
  //       console.log(`response`, response)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // console.log(this.state.offers);
  // }

  state = {
    offers: [],
  };

  componentDidMount() {
    apiHandler
      .getOffers(this.state)
      .then((offers) => {
        this.setState({ offers });
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    // console.log(`this.state`, this.state);
    // const { offers } = this.state;
    return (
      <div className="container">
        <div className="columns box-full">
          <div className="column is-one-quarter">
          <div className="box">
          
          {this.state.offers.map((offer) => (
             <div key={offer._id}>
               {/* <Link to={`/offer/${offer._id}`} key={offer._id}></Link> */}
              
              <p>{offer.title}</p>
              <p>{offer.contractType}</p>
              <p>{offer.createdAt}</p>
            
            </div>
            
            ))}
            </div>
          </div>
          <div className="column  is-three-quarter">
            <div className="box">
              <div className="level">
                <div className="level-right">
                  <p className="level-item">
                    <strong>Toutes</strong>
                  </p>
                  <p className="level-item">
                    <a>À revoir</a>
                  </p>
                  <p className="level-item">
                    <a>Selectionné</a>
                  </p>
                </div>
                <hr className="solid" />
              </div>
              I'm in a box.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardRecruiter;
