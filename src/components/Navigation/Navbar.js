import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuth } from "../../Context/AuthContext";

class Navbar extends Component {
  render() {
    return (
        <>
        { this.props.isLoggedin ?
            <div className="nav-container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/activitats">
                                <img src={"/images/booking.svg"} alt="Activitats" />
                                Activitats
                            </Link>
                        </li>

                        <li>
                            <Link to="/mapa">
                                <img src={"/images/map.svg"} alt="Mapa" />
                                Cercador
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
            : null }
        </>
    );
  }
}

export default withRouter(withAuth(Navbar));
