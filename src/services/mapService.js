import axios from 'axios';

class MapService {

    constructor() {
        this.http = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            withCredentials: true,
        });
    }
}

const mapService = new MapService();

export default mapService;
