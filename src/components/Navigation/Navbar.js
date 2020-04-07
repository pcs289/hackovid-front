import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../../Context/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <ul>
            {this.props.isLoggedIn ? null : (
              <>
                <li>
                  <Link to="/activities">
                    <img src={"/images/booking.svg"} alt="Activitats" />
                    Activitats
                  </Link>
                </li>

                <li>
                  <Link to="/map">
                    <img src={"/images/map.svg"} alt="Map" />
                    Cercador
                  </Link>
                </li>

                <li>
                  <Link to="/perfil">
                    <img src={"/images/profile.svg"} alt="Profile" />
                    Perfil
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(withAuth(Navbar));
