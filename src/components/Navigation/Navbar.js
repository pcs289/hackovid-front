import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../../Context/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <>
        {this.props.isLoggedin ? (
          <div className="nav-container">
            <nav>
              <ul>
                <li>
                  <Link to="/cercar">
                    <img src={"/images/search.svg"} alt="Cercar" />
                    Cercar
                  </Link>
                </li>
                <li>
                  <Link to="/mapa">
                    <img src={"/images/map-navbar.svg"} alt="Mapa" />
                    Localitzador
                  </Link>
                </li>
                <li>
                  <Link to="/publicar">
                    <img src={"/images/add.svg"} alt="Publicar" />
                    Publicar
                  </Link>
                </li>
                <li>
                  <Link to="/inscripcions">
                    <img src={"/images/booking.svg"} alt="Gestionar" />
                    Gestionar
                  </Link>
                </li>
                <li>
                  <Link to="/perfil">
                    <img src={"/images/profile.svg"} alt="Perfil" />
                    Perfil
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(withAuth(Navbar));
