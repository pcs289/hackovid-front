import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Map from "../components/Map/Map";
import MapFilters from "../components/Map/MapFilters";

class MapView extends Component {

    state = {
        filters: null
    };

    async onFiltersChange(changedFilter) {
        await this.setState({ filters: changedFilter})
    }

    render() {
        return (
          <>
            <div className="activities-container">
                <div id="page-name"><h1>Mapa d'Anuncis</h1></div>
                <div className="profile-stats-card">
                    <div>
                        <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>Filtres</h2>
                        <MapFilters onFiltersChange={this.onFiltersChange.bind(this)}/>
                    </div>
                </div>
                <Map { ...this.props } filters={this.state.filters}/>
            </div>
          </>
        );
    }
}

export default withAuth(MapView);
