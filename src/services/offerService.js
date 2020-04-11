import axios from 'axios';

class OfferService {

    constructor() {
        this.http = axios.create({
          baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
          withCredentials: true,
        });
      }

    handleCreateOffer(formData) {
         return this.http.post('/offers/create', formData).then(response => response.data);
    };

    getOffer(offerId) {
        return this.http.get('/offers/' + offerId).then(res => res.data);
    }

}

const offerService = new OfferService();

export default offerService;
