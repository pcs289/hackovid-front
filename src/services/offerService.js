import axios from "axios";

class OfferService {
  constructor() {
    this.search = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true
    });
  }

  getAllOffers() {
    return this.offers.get("/offers").then(({ data: offers }) => offers);
  }
}

const offerService = new OfferService();

export default offerService;
