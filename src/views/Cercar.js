import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import MapFilters from "../components/Map/MapFilters";

import mapService from "../services/mapService";
import LoadingView from "./LoadingView";
import CercaOffer from "../components/CercaOffer";

class Cercar extends Component {
  state = {
    offers: null,
    filters: null,
    isLoading: false,
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    if (!searchParams.has('r') && !searchParams.has('dow')) {
      this.getNeighbours({radius: 1000, dayOfWeek: 1});
    }
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
                  <MapFilters {...this.props} onFiltersChange={this.onFiltersChange.bind(this)}/>
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
                  {!isLoading && offers && offers.map((offer, i) => {
                    return <CercaOffer key={i} offer={offer} />
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
