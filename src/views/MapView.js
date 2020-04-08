import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Map from "../components/Map/Map";

class MapView extends Component {
  render() {
    return (
      <>
        <div className="map-container">
          <Map prop={this.props} />
        </div>
      </>
    );
  }
}

export default withAuth(MapView);
