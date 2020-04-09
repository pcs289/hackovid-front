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
            <div className="map-container">
                <MapFilters onFiltersChange={this.onFiltersChange.bind(this)} />
                <Map { ...this.props } filters={this.state.filters}/>
            </div>
          </>
        );
    }
}

export default withAuth(MapView);
