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
                    <Popup key={`popup-${offer._id}`} className="marker" latitude={latitude} longitude={longitude} closeButton={true} onClose={() => this.togglePopup()}>
                        <Link to={`/contactar/${offer._id}`}>
                            <span>{offer.title}</span>
                            <span>{offer.description}</span>
                        </Link>
                    </Popup>
                ) : null}
            </>
        );
    }
}

export default PreferenceMarker;
