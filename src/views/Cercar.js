import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import Search from "../components/Navigation/Search";

class Cercar extends Component {
  state = {
    img: "",
  };

  render() {
    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1 style={{ textTransform: "capitalize" }}>Panell D'anuncis</h1>
          </div>
          <>
            <div class="bottom-break-nav">
              <div id="home-search">
                <Search />
              </div>
              <div class="profile-stats-card">
                <div>
                  <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                    Filtres
                  </h2>
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
                      <li>
                        <img
                          class="badge-img"
                          src="../../images/toilet-paper.svg"
                          alt="discount"
                        />
                        <p>Altres</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="profile-stats-card">
                <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                  Ofertes de Voluntariat
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
                  <Link
                    to="/contactar"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <span
                      class="btn"
                      style={{
                        padding: "10px",
                      }}
                    >
                      Contactar
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        </div>
      </>
    );
  }
}

export default withAuth(Cercar);
