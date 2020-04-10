import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

class Activities extends Component {
  render() {
    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1>Gestionar</h1>
            <div class="sections-nav">
              <div class="nav-row">
                <div class="nav-column">
                  <div class="nav-column1">
                    <Link
                      to="/activitats"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p>Inscripcions</p>
                    </Link>
                  </div>
                </div>
                <div
                  class="nav-column"
                  style={{ border: "1px", borderBottom: "2px solid #a4d96c" }}
                >
                  <div class="nav-column2">
                    <p style={{ color: "#a4d96c", fontWeight: 700 }}>
                      Publicacions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-break-nav">
            <div class="profile-stats-card">
              <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                Ofertes actives
              </h2>
              <div
                class="anunci-panell"
                style={{
                  backgroundColor: "#EAEAEA",
                  margin: "3%",
                  padding: "5%",
                  borderRadius: "7px",
                }}
              >
                <h3
                  class="post-title"
                  style={{
                    textAlign: "start",
                    margin: "0",
                    fontSize: "16px",
                  }}
                >
                  Classes de Català amb la Mañá
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "12px",
                    margin: "0",
                    color: "#989898",
                  }}
                >
                  0.3 km | 17:30h | 22/04 | Educació
                </p>

                <p
                  style={{
                    textAlign: "start",
                    margin: "10px 0 10px 0",
                    fontSize: "12px",
                  }}
                >
                  Search for the keywords to learn more about each warning. To
                  ignore, add // eslint-disable-next-line to the line before.
                </p>
                <div class="profile-stats">
                  <p>
                    <span
                      class="btn"
                      style={{
                        padding: "10px",
                      }}
                    >
                      Editar
                    </span>
                  </p>
                  <p>
                    <span>Sol·licituds</span>
                    <br />
                    (0)
                  </p>
                </div>
              </div>
            </div>
            <div class="profile-stats-card">
              <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                Ofertes passades
              </h2>
              <div
                class="anunci-panell"
                style={{
                  backgroundColor: "#EAEAEA",
                  margin: "3%",
                  padding: "5%",
                  borderRadius: "7px",
                }}
              >
                <h3
                  class="post-title"
                  style={{
                    textAlign: "start",
                    margin: "0",
                    fontSize: "16px",
                  }}
                >
                  Classes de Català amb la Mañá
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "12px",
                    margin: "0",
                    color: "#989898",
                  }}
                >
                  0.3 km | 17:30h | 22/04 | Educació
                </p>

                <p
                  style={{
                    textAlign: "start",
                    margin: "10px 0 10px 0",
                    fontSize: "12px",
                  }}
                >
                  Search for the keywords to learn more about each warning. To
                  ignore, add // eslint-disable-next-line to the line before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Activities);
