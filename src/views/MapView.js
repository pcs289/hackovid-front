import React, { Component } from 'react';
import { withAuth } from '../Context/AuthContext';
import Map from '../components/Map/Map';

class MapView extends Component {
  render() {
    return (
      <>
        <Map prop={this.props} />
      </>
    );
  }
}

export default withAuth(MapView);
