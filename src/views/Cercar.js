import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import MapFilters from "../components/Map/MapFilters";
import OfferManaged from "../components/Offers/OfferManaged";

import mapService from "../services/mapService";
import LoadingView from "./LoadingView";

class Cercar extends Component {
  state = {
    offers: null,
    filters: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.getNeighbours();
  }

  async onFiltersChange(changedFilter) {
    await this.setState({ filters: changedFilter, ...this.state });
    this.getNeighbours(changedFilter);
  }

  async getNeighbours(changedFilter) {
    try {
        this.setState({...this.state, isLoading: true });
        const { offers } = changedFilter ? await mapService.getNeighbours(changedFilter.radius, changedFilter.dayOfWeek) : await mapService.getNeighbours();
        this.setState({ filters: this.state.filters, offers, isLoading: false});
    } catch (error) {
        console.log(error);
    }
  }

  render() {
    const { offers, isLoading } = this.state;
    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1>Panell d'Anuncis</h1>
          </div>
          <>
            <div className="bottom-break-nav">
              <div className="profile-stats-card">
                <div>
                  <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>Filtres</h2>
                  <MapFilters onFiltersChange={this.onFiltersChange.bind(this)}/>
{/*
                  <div class="badges">
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
                  </div> */}
                </div>
              </div>
              <div className="profile-stats-card">
                <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>
                  Ofertes de Voluntariat
                </h2>
                  {isLoading ?
                      <LoadingView showText={false} /> : null
                  }
                  {!isLoading && offers && offers.length === 0 ?
                      <div>
                          No hi ha ofertes amb els filtres actuals.
                      </div> : null
                  }
                  {offers && offers.map((offer, i) => {
                    return <OfferManaged key={i} offer={offer} contact={true} edit={false} requests={0} />;
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
