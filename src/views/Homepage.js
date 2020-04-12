import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, isLoading: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  async componentDidMount() {
    try {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
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
              src={"/images/apropapp.png"}
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

              <iframe className="video" title="Video demostració d'Apropapp" width="444" height="250" src="https://youtube.com/embed/dvfojhbUrck?controls=0"
                      frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>Video demostració d'Apropapp</iframe>

            </div>
          </div>
        </div>
        <div className="mobile-wrap">
          <h2>Com funciona?</h2>
          <div className="row r1">
            <div className="imga">
              <img
                src={"/images/homepage/1-localitza.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Localitza les teves necessitats</h3>
                <p>
                  Troba les ofertes de voluntariat més pròximes mitjançant els
                  filtres del mapa o el panell d'anuncis .
                </p>
              </div>
            </div>
          </div>
          <div className={this.state.width > 750 ? 'row r2' : 'row r1'}>
            <div className="imga">
              <img
                src={"/images/homepage/2-colabora.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Col·labora amb el teu veïnat</h3>
                <p>
                  Publica les teves propies ofertes tant sigui per sol·licitar
                  ajuda o per mostrar la teva predisposició a fer voluntariat.
                </p>
              </div>
            </div>
          </div>
          <div className="row r1">
            <div className="imga">
              <img
                src={"/images/homepage/3-coneixer.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Dona't a conèixer</h3>
                <p>
                  Completa el teu perfil i expressa el teu compromís en el teu
                  barri o poble.
                </p>
              </div>
            </div>
          </div>
          <div className={this.state.width > 750 ? 'row r2' : 'row r1'}>
            <div className="imga">
              <img
                src={"/images/homepage/4-gestiona.jpg"}
                alt="Home amb la mascara"
                className="hp-img"
              />
            </div>
            <div className="descripcio-hp">
              <div>
                <h3>Gestiona les sol·licituds</h3>
                <p>
                  Controla les peticions de forma fàcil des de la mateixa app.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div className="footer-header" style={{backgroundColor: '#017069', color: 'white', height: '40px', textAlign: 'center'}}>
          <small><a href="/Apropapp_ProteccioDeDades_PoliticadePrivacitat.pdf" >Polítiques de Privacitat i Protecció de Dades</a></small>
          <small>Contacte a pimpamapp@gmail.com</small>
        </div>
      </>
    );
  }
}

export default withAuth(Homepage);
