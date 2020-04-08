import axios from 'axios';

class MapService {

    constructor() {
        this.http = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            withCredentials: true,
        });
    }

    getNeighbours(radius) {
        return this.http.post('/map/neighbors', { radius }).then((response) => response.data);
    }
}

const mapService = new MapService();

export default mapService;
