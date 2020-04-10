import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";

class Profile extends Component {
  state = {
    img: "",
  };

  componentDidMount() {
    const { match : { params: { userId }}} = this.props;
    console.log('Fetching bio for user #' + userId);
  }

  render() {

    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1 style={{ textTransform: "capitalize" }}>Joe Doe</h1>
          </div>
          <>
            <div className="bottom-break-nav">
              <div className="profile-stats-card">
                <img
                    className="user-profile-stats"
                  src="../../images/add-contact.svg"
                  alt="profile"
                />
                <div className="profile-stats">
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
                  <p className="inserted-stat">Me gusta el pollo frito</p>
                </>

                <h2 style={{ textAlign: "start" }}>Demana</h2>
                <div>
                  <div className="badges">
                    <ul>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/food-delivery.svg"
                          alt="badge"
                        />
                        <p>Compres</p>
                      </li>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/cross.svg"
                          alt="reward"
                        />
                        <p>Salut</p>
                      </li>
                      <li>
                        <img
                            className="badge-img"
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
                  <div className="badges">
                    <ul>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/elearning.svg"
                          alt="discount"
                        />
                        <p>Educació</p>
                      </li>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/toilet-paper.svg"
                          alt="discount"
                        />
                        <p>Altres</p>
                      </li>

                      <li>
                        <img
                            className="badge-img"
                          src="../../images/approved.svg"
                          alt="okey"
                        />
                        <p>Verificat</p>
                      </li>
                    </ul>
                  </div>
                  <h2 style={{ textAlign: "start" }}>Contacte</h2>
                  <p className="inserted-stat">
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
