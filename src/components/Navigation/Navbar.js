import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';

class Navbar extends Component {
  render() {
    const { pathname } = this.props.location;
    
    return (
      <div className="nav-container">
        <nav>
          <ul>
            {this.props.isLoggedIn ? null : (
              <>
                <li>
                  <Link to="/bookings">
                    <img src={'/images/booking.svg'} alt="Booking" />
                    Calendari
                  </Link>
                </li>
                {pathname === '/map' ? (
                  <li>
                    <Link to="/search">
                      <img src={'/images/search.svg'} alt="Search" />
                      Cercador
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/map">
                      <img src={'/images/map-navbar.svg'} alt="Map" />
                      Mapa
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/perfil">
                    <img src={'/images/profile.svg'} alt="Profile" />
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
