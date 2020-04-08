import axios from 'axios';

class ProfileService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true,
    });
  }

  uploadAvatarImg(user) {
    return this.profile.post('/profile/friends/users').then(response => response.data);
  }

  updateLocation(coordinates) {
    const { latitude, longitude } = coordinates;
    return this.profile.put('/map/location', { latitude, longitude}).then( response => response.data);
  }
}

const profileService = new ProfileService();

export default profileService;
