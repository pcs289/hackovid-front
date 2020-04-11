import axios from 'axios';

class RequestService {

    constructor() {
        this.http = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            withCredentials: true,
        });
    }

    getMyRequests() {
        return this.http.get('/requests/list').then(res => res.data);
    }
}

const requestService = new RequestService();
export default requestService;
