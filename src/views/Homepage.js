import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

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

    return (
      <>
        <div className="banner_header_hp">
          <Link to="/">
            <img
              src={"/images/logo.png"}
              className="logo logo-large"
              alt="Pim Pam Pum"
            />
          </Link>
        </div>
        <div id="homepage-hero">
          <div id="logo-div">
            <div id="homepage-header">
              <div id="home-banner-title">
                <h1 id="headline">Col·labora amb els teus veïns! </h1>
              </div>

              <h2 id="headline">A què estas esperant?</h2>
              <div className="signup-mobile">
                <Link className="btn-topbar" to="/entra">
                  Iniciar Sessió
                </Link>
                <Link className="btn-topbar" to="/registre">
                  Registre
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-wrap">
          <h2>Com funciona?</h2>
          <div className="row r1">
            <div className="imga">
              <img
                src={"/images/test 1.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Com puc ajudar?</h3>
                <p>
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                </p>
              </div>
            </div>
          </div>
          <div className="row r2">
            <div className="imga">
              <img
                src={"/images/test 1.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Com puc ajudar?</h3>
                <p>
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                </p>
              </div>
            </div>
          </div>
          <div className="row r1">
            <div className="imga">
              <img
                src={"/images/test 1.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Com puc ajudar?</h3>
                <p>
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                </p>
              </div>
            </div>
          </div>
          <div className="row r2">
            <div className="imga">
              <img
                src={"/images/test 1.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Com puc ajudar?</h3>
                <p>
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                  BHdsjhwifjefhjrehfjkhfjdh BHdsjhwifjefhjrehfjkhfjdh
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Homepage);
