import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { withAuth } from '../../Context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
  state = {
    name: '',
    surname: '',
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    try {
      const { name, surname, username, password } = this.state;
      this.props.handleSignup({
        name,
        surname,
        username,
        password,
      });
      toast.success('Welcome to Padelnow');
    } catch (error) {
      console.error('Error while signing in');
    }
  };

  render() {
    const { name, surname, username, password } = this.state;
    return (
      <div className="log-sign-container">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <h1> Hackovid </h1>
        </Link>
        <form onSubmit={this.handleFormSubmit} id="signup-input">
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Nom" />
          <br />
          <input type="text" name="surname" value={surname} onChange={this.handleChange} placeholder="Cognom" />
          <br />
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Nom d'usuari" />
          <br />
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Mot de pas" />
          <br />
          <input type="submit" value="Crear compte" className="btn" />
        </form>

        <div>
          <p className="alternative">
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
