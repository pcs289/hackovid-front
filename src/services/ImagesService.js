import axios from 'axios';

class ImagesService {

    constructor() {
        this.http = axios.create({
          baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
          withCredentials: true,
        });
      }

    getAvatarImage() {
        return this.http.get('/image/upload').then( response => response.data);
    };

    uploadAvatarImg( formData, config ) {
        return this.http.post('/image/save', formData, config).then(response => response.data);
      }

}

const imagesService = new ImagesService();

export default imagesService;
