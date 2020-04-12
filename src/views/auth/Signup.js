import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { withAuth } from '../../Context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import profileService from "../../services/profileService";

class Signup extends Component {
  state = {
    name: '',
    surname: '',
    username: '',
    password: '',
    contactInfo: '',
    description: '',
    readTC: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    try {
      const { name, surname, username, password, contactInfo, description } = this.state;
      this.props.handleSignup({
        name,
        surname,
        username,
        password,
        contactInfo,
        description
      }).then((user) => {
        const success = ({coords}) => {
          profileService.updateLocation({ latitude: coords.latitude, longitude: coords.longitude})
              .then(({code}) => code !== 'success' ?
              console.error(`Error mentre s'actualitza la geolocalització ${code}`) : null);
        };

        const error = (err) => {
          toast('Utilitza el geolocalitzador del mapa per a trobar els teus veins');
          console.log(`Error en la geolocalització durant registre: ${err.message}`);
        };
        navigator.geolocation.getCurrentPosition(success, error,{ enableHighAccuracy: true });

      }).finally(() => {
        toast.success(`Benvingut, ${username}!`);
      });
    } catch (error) {
      console.error('Error while signing in');
      console.log(error);
    }
  };

  render() {
    const { name, surname, username, password, contactInfo, description, readTC } = this.state;
    return (
      <div className="log-sign-container">
        <Link to={'/'} style={{ textDecoration: 'none' }} className="logo-mobile">
          <img
              src={"/images/apropapp.png"}
              className="logo logo-large"
              alt="Apropapp"
          />
        </Link>
        <form onSubmit={this.handleFormSubmit} id="signup-input">

          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Nom" required />
          <br />

          <input type="text" name="surname" value={surname} onChange={this.handleChange} placeholder="Cognom" required />
          <br />

          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Nom d'usuari" required />
          <br />

          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Mot de pas" required />
          <br />

          <input type="text" name="contactInfo" value={contactInfo} onChange={this.handleChange} placeholder="Contacte (Telèfon o Email)" required />
          <br />

          <textarea name="description" value={description} onChange={this.handleChange} placeholder="Escriu una mica sobre tu per donar-te a conèixer en la teva comunitat" required />
          <br />

          <div style={{display: 'flex', flexFlow: 'row nowrap', marginBottom: '1em'}}>
            <small style={{flex: 15, fontSize: '0.75em'}}>Accepto les <a style={{color: '#a63ce5'}} href="/Apropapp_ProteccioDeDades_PoliticadePrivacitat.pdf" >Polítiques De Privacitat i Protecció de Dades</a></small>
            <input style={{flex: 1}} type="checkbox" name="readTC" value={readTC} onChange={this.handleChange} required />
          </div>

          <input type="submit" value="Crear compte" className="btn" />
        </form>

        <div>
          <p>
            Ja tens un compte?
            <Link to={'/entra'} style={{ textDecoration: 'none' }}>
              <span> Entrar</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
