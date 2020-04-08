import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../../Context/AuthContext";

class Topbar extends Component {
  render() {
    return (
      <div className="banner_header">
          <Link to="/">
              <img
                  src={"/images/logo.png"}
                  className="logo logo-large"
                  alt="Booking"
              />
          </Link>
        { this.props.isLoggedin ? null : <div id="sign-buttons">
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
        </div> }
      </div>
    );
  }
}

export default withRouter(withAuth(Topbar));
