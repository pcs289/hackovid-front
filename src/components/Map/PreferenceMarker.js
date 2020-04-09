import React, { Component } from 'react';
import { Marker, Popup } from 'react-map-gl';
import LocationIcon from './LocationIcon';

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
                        <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-around', alignItems: 'center'}}>
                            <img width="35px" height="35px" src={neighbor.avatarImg} alt={neighbor.username + ' avatar image'} />
                            <span>{neighbor.username}</span>
                        </div>
                        <ul>
                            {neighbor.preferences.map((pref, i) => {
                                return <li key={i}>
                                    {pref.type}
                                </li>
                            })}
                        </ul>
                    </Popup>
                ) : null}
            </>
        );
    }
}

export default PreferenceMarker;
