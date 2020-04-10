import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Backbar from "../components/Navigation/Backbar";

class Profile extends Component {
  state = {
    displayBio: false
  };

  componentDidMount() {
    const { match : { params: { offerId }}} = this.props;
    console.log('Fetching offer #' + offerId);
  }

  render() {
    return (
      <>
        <div className="activities-container">
          <div id="page-name" style={{ display: "flex" }}>
            <Backbar history={this.props.history} />
            <h1 style={{ textTransform: "capitalize" }}>Clase de Català...</h1>
          </div>
          <>
            <div class="bottom-break-nav">
              <div className="profile-stats-card">
                <h1 id="club-detail-header">Evento bka bla bla </h1>

                <div id="moment-booking">
                  <img
                    id="padel-icon"
                    src="../../images/booking.svg"
                    alt="padel-icon"
                  ></img>
                  <p>Hola aqui estamo bien y tu k tal?</p>
                </div>
                <div id="booking-card-details">
                  <p id="reservation-location">A 0.3km de casa teva</p>
                  <div id="reservation-hours">
                    <p>
                      <span>Inici</span>
                      <br />
                      11:00
                    </p>
                    <p>
                      <span>Fi</span>
                      <br />
                      12:00
                    </p>
                    <p>
                      <span>Duration</span>
                      <br />
                      60min
                    </p>
                  </div>
                </div>
                <div id="profile-btn-div">
                  <div id="submit-reservation">
                    <div
                      id="submit-datapicker"
                      onClick={() =>
                        this.setState({ displayBio: !this.state.displayBio })
                      }
                    >
                      Veure dades de Joe Doe
                    </div>
                  </div>
                </div>
              </div>

              {this.state.displayBio ? (
                <div className="profile-stats-card">
                  <h2 style={{ textAlign: "start" }}>Sobre Joe Doe</h2>

                  <img
                    class="user-profile-stats"
                    src="../../images/add-contact.svg"
                    alt="profile"
                  />
                  <div class="profile-stats">
                    <p>
                      <span>Participat</span>
                      <br />1
                    </p>
                    <p>
                      <span>Demanat</span>
                      <br />2
                    </p>
                  </div>
                  <>
                    <h2 style={{ textAlign: "start" }}>Descripció</h2>
                    <p class="inserted-stat">Me gusta el pollo frito</p>
                  </>

                  <h2 style={{ textAlign: "start" }}>Demana</h2>
                  <div>
                    <div class="badges">
                      <ul>
                        <li>
                          <img
                            class="badge-img"
                            src="../../images/food-delivery.svg"
                            alt="badge"
                          />
                          <p>Compres</p>
                        </li>
                        <li>
                          <img
                            class="badge-img"
                            src="../../images/cross.svg"
                            alt="reward"
                          />
                          <p>Salut</p>
                        </li>
                        <li>
                          <img
                            class="badge-img"
                            src="../../images/elearning.svg"
                            alt="discount"
                          />
                          <p>Educació</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h2 style={{ textAlign: "start" }}>Participa</h2>
                  <div>
                    <div class="badges">
                      <ul>
                        <li>
                          <img
                            class="badge-img"
                            src="../../images/elearning.svg"
                            alt="discount"
                          />
                          <p>Educació</p>
                        </li>
                        <li>
                          <img
                            class="badge-img"
                            src="../../images/toilet-paper.svg"
                            alt="discount"
                          />
                          <p>Altres</p>
                        </li>

                        <li>
                          <img
                            class="badge-img"
                            src="../../images/approved.svg"
                            alt="okey"
                          />
                          <p>Verificat</p>
                        </li>
                      </ul>
                    </div>
                    <h2 style={{ textAlign: "start" }}>Contacte</h2>
                    <p class="inserted-stat">
                      Aqui habilitar quines opcions permet el usuari
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </>
        </div>
      </>
    );
  }
}

export default withAuth(Profile);
