import React from "react";
import "../styles/custom.css";
import apiHandler from "../api/apiHandler";
import { Link} from "react-router-dom";
import "./../styles/custom.css"

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
    applications: [],
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
  // componentDidMount() {
  //   apiHandler
  //     .getApplication(this.state)
  //     .then((offers) => {
  //       this.setState({ offers });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    // console.log(`this.state`, this.state);
    // const { offers } = this.state;
    return (
      <section className="hero has-background-white-ter pt-0">
        <div className="is-fullheight ">
          <div className="hero-body ">
            <div className="container">
              <div className="columns box-full ">
                <div className="column is-one-quarter">
                  <div className="box">
                    {/* <Link > */}
                    {this.state.offers.map((offer) => (
                      <div className="dashboard_offer" key={offer._id}>
                        <Link to={`/offer/${offer._id}`} key={offer._id}></Link>

                        <p>{offer.title}</p>
                        <p>{offer.contractType}</p>
                        <p>{offer.createdAt}</p>
                        <hr style={{ width: "50%", textAlign: "left" }}></hr>
                      </div>
                    ))}
                    {/* </Link> */}
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
                    <div>
                    {this.state.applications.map((application) => (
                      
                        <div to={`/application/${application._id}`} key={application._id}>
                        <p>{application.firstName}</p>
                        <p>{application.lastName}</p>
                        </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        
      </section>
    );
  }
}

export default DashboardRecruiter;
