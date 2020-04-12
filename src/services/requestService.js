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

    updateRequestStatus(requestId, statusCode) {
        return this.http.put('/requests/status/' + statusCode, { requestId }).then((res) => res.data);
    }

    getMyRequests() {
        return this.http.get('/requests/list').then(res => res.data);
    }
}

const requestService = new RequestService();

export default requestService;
