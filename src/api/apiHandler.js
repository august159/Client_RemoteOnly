import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  // Authentification Routes
  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Users Route
  getUsers() {
    return service
      .get("api/user")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUser() {
    return service
      .get("api/user/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  postUser() {
    return service
      .post("api/user/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser() {
    return service
      .patch("api/user/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUser() {
    return service
      .delete("api/user/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Applications Routes
  getApplications() {
    return service
      .get("api/application")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getApplication() {
    return service
      .get("api/application/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateApplication() {
    return service
      .patch("api/application/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  postApplication() {
    return service
      .post("api/application")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteApplication() {
    return service
      .delete("api/application/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Companies Routes
  getCompanies() {
    return service
      .get("api/company")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getCompany() {
    return service
      .get("api/company/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  postCompany() {
    return service
      .post("api/company/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateCompany() {
    return service
      .patch("api/company/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteCompany() {
    return service
      .delete("api/company/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Offers Routes
  getOffers() {
    return service
      .get("api/offer")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOffer() {
    return service
      .get("api/offer/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  postOffer() {
    return service
      .post("api/offer/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOffer() {
    return service
      .patch("api/offer/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOffer() {
    return service
      .delete("api/offer/:id")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
