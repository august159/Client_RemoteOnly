import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import {withUser} from "./Auth/withUser";

class CompanyOffers extends Component {

  state = {
    company:[]
  };


//   componentDidMount(){
//     console.log(`context`, context)

//     apiHandler.getCompany(id).then((company)=>{
//         this.setState({company});
//         console.log(`company test`, company)
//     }).catch((err)=>{
//         console.log(err);
//     })
//   };



  render() {
      
    return <div></div>;
  }
}

export default withUser(CompanyOffers);
