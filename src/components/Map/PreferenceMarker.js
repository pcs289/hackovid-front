import React, { Component } from 'react';
import { Marker, Popup } from 'react-map-gl';
import LocationIcon from './LocationIcon';
import AvatarImage from "../AvatarImage";
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
        const { latitude, longitude, neighbor } = this.props;
        const { showPopup } = this.state;
        return (
            <>
                <div onClick={this.togglePopup}>
                    <Marker key={`marker-${neighbor._id}`} latitude={latitude} longitude={longitude}>
                        <LocationIcon />
                    </Marker>
                </div>
                {showPopup ? (
                    <Popup key={`popup-${neighbor._id}`} latitude={latitude} longitude={longitude} closeButton={false}>
                        <Link to={`/bio/${neighbor._id}`} className="marker">
                            <AvatarImage avatarImg={neighbor.avatarImg} />
                            <span>{neighbor.username}</span>
                        </Link>
                    </Popup>
                ) : null}
            </>
        );
    }
}

export default PreferenceMarker;
