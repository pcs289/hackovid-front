import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { Component } from 'react';
import ReactMapGL, { GeolocateControl, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { withAuth } from '../../Context/AuthContext';
import profileService from '../../services/profileService';
import mapService from '../../services/mapService';

const geolocateStyle = {
  float: 'right',
  margin: '10px',
  padding: '10px',
  boxShadow: '0 0 10px 2px rgba(0,0,0,.1)',
};

class Map extends Component {
  state = {
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 11,
    },
    userLocation: {},
    neighbors: [],
    popupsStatus: false,
  };

  // Mount map with the current user location
  componentDidMount() {
    this.setState({
      viewport: {
        latitude: 41.3828939,
        longitude: 2.1774322,
        zoom: 11,
      }
    });

  }

  popupsToggle = () => {
    this.setState({
      popupsStatus: !this.state.popupsStatus,
    });
  };

  // Close all popups if a click is done anywhere in the map but the opened popup
  closeAllPopups = () => {
    const { popupsStatus } = this.state;
    if (popupsStatus) {
      this.setState({
        popupsStatus: false,
      });
    }
  };

  mapRef = React.createRef();

  getNeighbors() {
    const neighbors = mapService.getNeighbours();
    this.setState({ neighbors });
    console.log(neighbors);
  }

  // Rerenders viewport to avoid a static map
  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  onGeolocate = async location => {
    this.setState({ userLocation: { latitude: location.coords.latitude,longitude: location.coords.longitude }});
    profileService.updateLocation(this.state.userLocation).then((response) => {
      if(response.code === "success") {
        this.getNeighbors();
      } else {
        // TODO: Manage failed updated location UI Alert
        console.log("onGeolocate Error: " + response.code);
      }
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <>
        <ReactMapGL
            ref={this.mapRef}
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={this.handleViewportChange}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            width="100%"
            height="100%">

          { this.state.userLocation.longitude ?
              <Popup
              latitude={this.state.userLocation.latitude}
              longitude={this.state.userLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => console.log("Popup closed")}
              anchor="top" >
                <div>You are here</div>
              </Popup>
              : null}

          <Geocoder
              mapRef={this.mapRef}
              onViewportChange={this.handleGeocoderViewportChange}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              position="top-left"
              proximity={{ longitude: viewport.longitude, latitude: viewport.latitude }}
              trackProximity={true}
              collapsed={true}
          />
          <GeolocateControl
              style={geolocateStyle}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              onGeolocate={this.onGeolocate}

          />
        </ReactMapGL>
      </>
    );
  }
}

export default withAuth(Map);
