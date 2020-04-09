import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { Component } from 'react';
import ReactMapGL, {GeolocateControl, Layer, Popup} from 'react-map-gl';
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
      zoom: 13,
    },
    userLocation: {},
    neighbors: [],
    popupsStatus: false,
  };

  // Mount map with the current user location
  async componentDidMount() {
    await this.setState({
      viewport: {
        latitude: this.props.user.location.coordinates[1] || 41.3828939,
        longitude: this.props.user.location.coordinates[0] || 2.1774322,
        zoom: 13,
      },
      userLocation: {
        longitude: this.props.user.location.coordinates[0],
        latitude: this.props.user.location.coordinates[1]
      }
    });
    if (this.props.user.location.coordinates) {
      this.getNeighbors();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.filters !== this.props.filters) {
      this.getNeighbors();
    }
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

  async getNeighbors() {
    const filteredRadius = this.props.filters ? this.props.filters.radius : 1000;
    const filteredDayOfWeek = this.props.filters ? this.props.filters.dayOfWeek : 1;
    const { neighbors } = await mapService.getNeighbours(filteredRadius, filteredDayOfWeek);
    this.setState({ neighbors });
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


          { this.state.neighbors.map((neighbor, i) => {
              return <Popup
                  key={i}
                  latitude={neighbor.location.coordinates[1]}
                  longitude={neighbor.location.coordinates[0]}>
                <div>{neighbor.username}</div>
              </Popup>
            })
          }

        </ReactMapGL>
      </>
    );
  }
}

export default withAuth(Map);
