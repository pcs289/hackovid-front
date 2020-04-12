import React, { Component } from 'react';
import { toast } from "react-toastify";
import AvatarImage from "../AvatarImage";
import { withAuth } from "../../Context/AuthContext";
import "moment/locale/ca";
import RequestService from '../../services/requestService';
import { withRouter} from 'react-router-dom';

class RequestDialog extends Component {

    acceptRequest = async requestId => {
        try {
            await RequestService.updateRequestStatus(requestId, 1);
            toast.success(`Sol·licitud d'oferta acceptada amb èxit!`);
            this.props.onClose();
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    denyRequest = async (requestId) => {
        try {
            await RequestService.updateRequestStatus(requestId, 2);
            toast.success(`Sol·licitud d'oferta denegada amb èxit!`);
            this.props.onClose();
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { requests } = this.props;
        return (
            <div className="modal" style={{ display: this.props.display ? 'flex' : 'none' }}>
                <div className="modal-content">
                    <div className="header">
                        <button className="close-button" onClick={() => this.props.onClose()}>
                            <img className="close-cross"
                                 src="../../images/close.svg"
                                 alt="close-cross"
                            ></img>
                        </button>
                    </div>

                    {requests.map((request, i) => {
                        return (
                            <div key={'request-'+i} className="profile-stats-card" style={{width: '90%'}}>
                                <div style={{display: "flex", flexFlow: "row nowrap", justifyContent: 'center', alignItems: 'center'}}>
                                    <AvatarImage avatarImg={request.requester.avatarImg} />
                                    <span>{request.requester.username}</span>
                                </div>
                                <p>{request.comments}</p>
                                <div style={{display: request.status === 0 ? "flex" : 'none', flexFlow: "row nowrap", justifyContent: 'center', alignItems: 'center', marginTop: '1em'}}>
                                    <button className="btn" onClick={() => this.acceptRequest(request._id)}>Acceptar</button>
                                    <button className="btn" onClick={() => this.denyRequest(request._id)}>Denegar</button>
                                </div>
                                <div style={{display: request.status === 1 ? "flex" : 'none', flexFlow: "row nowrap", justifyContent: 'center', alignItems: 'center', marginTop: '1em'}}>
                                    <p className="btn">La sol·licitud està acceptada</p>
                                </div>
                                <div style={{display: request.status === 3 ? "flex" : 'none', flexFlow: "row nowrap", justifyContent: 'center', alignItems: 'center', marginTop: '1em'}}>
                                    <p className="btn-yellow">La sol·licitud està cancel·lada</p>
                                </div>
                                <div style={{display: request.status === 2 ? "flex" : 'none', flexFlow: "row nowrap", justifyContent: 'center', alignItems: 'center', marginTop: '1em'}}>
                                    <p className="btn-red">La sol·licitud està denegada</p>
                                </div>
                            </div>);
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(withAuth(RequestDialog));
