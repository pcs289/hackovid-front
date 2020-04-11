import axios from 'axios';

class RequestService {

    constructor() {
        this.http = axios.create({
          baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
          withCredentials: true,
        });
      }

    handleCreateRequest(formData) {
         return this.http.post('/requests/create', formData).then(response => response.data);
    };

}

const requestService = new RequestService();

export default requestService;
