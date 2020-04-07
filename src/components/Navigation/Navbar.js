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
                  <Link to="/calendar">
                    <img src={"/images/booking.svg"} alt="Booking" />
                    Calendari
                  </Link>
                </li>
                <li>
                  <Link to="/map">
                    <img src={"/images/map.svg"} alt="Map" />
                    Cercador
                  </Link>
                </li>
                <li>
                  <Link to="/activities">
                    <img src={"/images/plus.svg"} alt="Activitats" />
                    Activitats
                  </Link>
                </li>
                <li>
                  <Link to="/panel">
                    <img src={"/images/resume.svg"} alt="Panell" />
                    Panell
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
