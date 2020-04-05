import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';

class Homepage extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { isLoading } = this.state;

    return (
      <>
        <div id="homepage-hero">
          <div id="logo-div">
            <div id="homepage-header">
              <div id="home-banner-title">
                <h1 id="headline">Col·labora amb els teus veïns!</h1>
              </div>
              <h2 id="headline">A què estas esperant?</h2>
              <div id="login-signup-cta">
                <Link id="header-book-btn-div" to="/entra">
                  <div id="header-book-btn">
                    <h3>Entra</h3>
                  </div>
                </Link>
                <Link id="header-book-btn-div" to="/registra">
                  <div id="header-book-btn">
                    <h3>Registra't</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Homepage);
