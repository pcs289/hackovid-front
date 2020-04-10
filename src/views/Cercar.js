import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import MapFilters from "../components/Map/MapFilters";
import offerService from "../services/offerService";

class Cercar extends Component {
  state = {
    offers: []
  };

  async componentDidMount() {
    try {
      const offers = await offerService.getAllOffers();
      this.setState({
        offers
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { offers } = this.state;

    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1>Panell D'anuncis</h1>
          </div>
          <>
            <div class="bottom-break-nav">
              <div class="profile-stats-card">
                <div>
                  <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                    Filtres
                  </h2>
                  <MapFilters />

                  <div class="badges">
                    <ul>
                      <li>
                        <img
                          class="badge-img"
                          src="../../images/food-delivery.svg"
                          alt="compres"
                        />
                        <p>Compres</p>
                      </li>
                      <li>
                        <img
                          class="badge-img"
                          src="../../images/cross.svg"
                          alt="salut"
                        />
                        <p>Salut</p>
                      </li>
                      <li>
                        <img
                          class="badge-img"
                          src="../../images/elearning.svg"
                          alt="educacio"
                        />
                        <p>Educació</p>
                      </li>
                      <li>
                        <img
                          class="badge-img"
                          src="../../images/toilet-paper.svg"
                          alt="altres"
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
                <div class="anunci-panell">
                  <h3 class="post-title">Classes de Català amb la Mañá</h3>
                  <p
                    style={{
                      color: "#989898"
                    }}
                  >
                    0.3 km | 17:30h | 22/04 | Educació
                  </p>

                  <p
                    style={{
                      margin: "10px 0 10px 0"
                    }}
                  >
                    Search for the keywords to learn more about each warning. To
                    ignore, add // eslint-disable-next-line to the line before.
                  </p>
                  <Link
                    to="/contactar"
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    <span
                      class="btn"
                      style={{
                        padding: "10px"
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
