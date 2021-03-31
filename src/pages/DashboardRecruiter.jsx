import React from "react";
import "../styles/custom.css";
// import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import "./../styles/custom.css";
import CompanyListOffers from "../components/CompanyListOffers";
import { withUser } from "./../components/Auth/withUser";

const DashboardRecruiter = (props) => {
  const { context } = props;
  const companyId = context.user.companies[0];

  return (
    <div>
      <CompanyListOffers companyId={companyId} />
    </div>
  );
  // <section className="hero has-background-white-ter pt-0">
  //   <div className="is-fullheight ">
  //     <div className="hero-body ">
  //       <div className="container">
  //         <div className="columns box-full ">
  //           <div className="column is-one-quarter">
  //             <div className="box">
  //               <Link >
  //               <CompanyOffers></CompanyOffers>
  //               {this.state.offers.map((offer) => (
  //                 <div className="dashboard_offer" key={offer._id}>
  //                   <Link to={`/offer/${offer._id}`} key={offer._id}></Link>
  //                   <p>{offer.title}</p>
  //                   <p>{offer.contractType}</p>
  //                   <p>{offer.createdAt}</p>
  //                   <hr style={{ width: "50%", textAlign: "left" }}></hr>
  //                 </div>
  //               ))}
  //               {/* </Link> */}
  //             </div>
  //           </div>
  //           <div className="column  is-three-quarter">
  //             <div className="box">
  //               <div className="level">
  //                 <div className="level-right">
  //                   <p className="level-item">
  //                     <strong>Toutes</strong>
  //                   </p>
  //                   <p className="level-item">
  //                     <a>À revoir</a>
  //                   </p>
  //                   <p className="level-item">
  //                     <a>Selectionné</a>
  //                   </p>
  //                 </div>
  //                 <hr className="solid" />
  //               </div>
  //               <div>
  //               {this.state.applications.map((application) => (
  //                   <div to={`/application/${application._id}`} key={application._id}>
  //                   <p>{application.firstName}</p>
  //                   <p>{application.lastName}</p>
  //                   </div>
  //               ))}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     </div>
  // </section>
};
export default withUser(DashboardRecruiter);
