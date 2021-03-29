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

  getUser(id) {
    return service
      .get(`api/user/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(id, userInfo) {
    return service
      .patch(`api/user/${id}`, userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUser(id) {
    return service
      .delete(`api/user/${id}`)
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

  getApplication(id) {
    return service
      .get(`api/application/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createApplication(appInfo) {
    return service
      .post("api/application", appInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateApplication(id, appInfo) {
    return service
      .patch(`api/application/${id}`, appInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteApplication(id) {
    return service
      .delete(`api/application/${id}`)
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

  getCompany(id) {
    return service
      .get(`api/company/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createCompany(coInfo) {
    return service
      .post("api/company", coInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateCompany(id, coInfo) {
    return service
      .patch(`api/company/${id}`, coInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteCompany(id) {
    return service
      .delete(`api/company/${id}`)
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

  getOffer(id) {
    return service
      .get(`api/offer/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOffer(offerInfo) {
    return service
      .post(`api/offer`, offerInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOffer(id, offerInfo) {
    return service
      .patch(`api/offer/${id}`, offerInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOffer(id) {
    return service
      .delete(`api/offer/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
