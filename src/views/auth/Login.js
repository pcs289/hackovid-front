import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { withAuth } from "../../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, password } = this.state;
      this.props.handleLogin({
        username,
        password,
      }).then((e) => {
        if(e.name !== 'Error') {
          toast.success(`Benvingut, ${username}!`);
        } else {
          toast.warn(`Hi ha hagut un error`);
        }
      });
    } catch (error) {
      console.error("Error while logging in");
      toast.error('Hi ha hagut un error');
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="log-sign-container">
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="logo-mobile"
        >
          <img
            src={"/images/apropapp.png"}
            className="logo logo-large"
            alt="Apropapp"
          />
        </Link>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Nom d'usuari"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Mot de pas"
          />
          <input type="submit" value="Entrar" className="btn" />
        </form>
        <p>
          No tens compte encara?
          <Link to="/registre" style={{ textDecoration: "none" }}>
            <span> Crear</span>
          </Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Login);
