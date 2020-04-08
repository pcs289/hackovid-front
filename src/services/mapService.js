import axios from 'axios';

class MapService {

    constructor() {
        this.http = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            withCredentials: true,
        });
    }

    getNeighbours() {
        return this.http.get('/map/neighbors').then((response) => response.data);
    }
}

const mapService = new MapService();

export default mapService;
