import axios from 'axios';

class OfferService {

    constructor() {
        this.http = axios.create({
          baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
          withCredentials: true,
        });
      }

    handleCreateOffer(formData) {
         return this.http.post('/offers/create', formData).then(res => res.data);
    };

    deleteOffer(offerId) {
        return this.http.delete('/offers/' + offerId).then(res => res.data);
    }

    updateOffer(requestId, data) {
        return this.http.put('/offers/' + requestId, data).then(res => res.data);
    }

    getOffer(offerId) {
        return this.http.get('/offers/' + offerId).then(res => res.data);
    }

    getMyOffers() {
        return this.http.get('/offers/list').then(res => res.data);
    }

}

const offerService = new OfferService();

export default offerService;
