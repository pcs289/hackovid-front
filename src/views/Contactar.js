import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import Backbar from "../components/Navigation/Backbar";

class Profile extends Component {
  state = {
    img: "",
  };

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
              <div class="profile-stats-card">
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
            </div>
          </>
        </div>
      </>
    );
  }
}

export default withAuth(Profile);
