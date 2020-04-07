import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../../Context/AuthContext";

class Topbar extends Component {
  render() {
    return (
      <div id="banner_header" className="banner_header">
        <img
          src={"/images/padelnow-logo.png"}
          className="logo logo-large"
          alt="Booking"
        />
        <div id="sign-buttons">
          <div className="sign-buttons">
            <ul>
              <li>
                <Link
                  to="/entra"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Iniciar sessió
                </Link>
              </li>
              <li>
                <Link
                  to="/registre"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Registre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Topbar));
