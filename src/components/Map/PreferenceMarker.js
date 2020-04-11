import React, { Component } from 'react';
import { Marker, Popup } from 'react-map-gl';
import LocationIcon from './LocationIcon';
import { Link } from "react-router-dom";

class PreferenceMarker extends Component {
    state = {
        showPopup: false,
    };

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    };

    render() {
        const { latitude, longitude, offer } = this.props;
        const { showPopup } = this.state;
        return (
            <>
                <div onClick={this.togglePopup}>
                    <Marker key={`marker-${offer._id}`} latitude={latitude} longitude={longitude}>
                        <LocationIcon />
                    </Marker>
                </div>
                {showPopup ? (
                    <Popup key={`popup-${offer._id}`}
                           className="marker"
                           latitude={latitude}
                           longitude={longitude}
                           closeButton={true}
                           onClose={() => this.togglePopup()}
                           closeOnClick={false}
                            captureClick={false}>
                        <h3>{offer.title}</h3>
                        <span>A {offer.proximity}m</span>
                        <p>{offer.description.length > 50 ? offer.description.substr(0, 49) + '...' : offer.description}</p>
                        <Link to={`/contactar/${offer._id}`}>Veure</Link>
                    </Popup>
                ) : null}
            </>
        );
    }
}

export default PreferenceMarker;
