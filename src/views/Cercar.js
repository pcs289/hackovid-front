import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import MapFilters from "../components/Map/MapFilters";
import mapService from "../services/mapService";
import OfferManaged from "../components/Offers/OfferManaged";

class Cercar extends Component {
  state = {
    offers: []
  };

  async componentDidMount() {
    this.getNeighbours();
  }

  async getNeighbours(radius, dayOfWeek) {
    try {
      const { offers } = await mapService.getNeighbours(radius, dayOfWeek);
      this.setState({
        offers
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { offers } = this.state;
    console.log(offers);
    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1>Panell D'anuncis</h1>
          </div>
          <>
            <div className="bottom-break-nav">
              <div className="profile-stats-card">
                <div>
                  <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                    Filtres
                  </h2>
                  <MapFilters onFiltersChange={(filters) => this.getNeighbours(filters.radius, filters.dayOfWeek)}/>
                  <div className="badges">
                    <ul>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/food-delivery.svg"
                          alt="compres"
                        />
                        <p>Compres</p>
                      </li>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/cross.svg"
                          alt="salut"
                        />
                        <p>Salut</p>
                      </li>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/elearning.svg"
                          alt="educacio"
                        />
                        <p>Educació</p>
                      </li>
                      <li>
                        <img
                            className="badge-img"
                          src="../../images/toilet-paper.svg"
                          alt="altres"
                        />
                        <p>Altres</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="profile-stats-card">
                <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                  Ofertes de Voluntariat
                </h2>
                { this.state.offers.map((offer, i) => {
                  return <OfferManaged key={i} offer={offer} contact={true} edit={false} requests={0}/>;
                })}
              </div>
            </div>
          </>
        </div>
      </>
    );
  }
}

export default withAuth(Cercar);
