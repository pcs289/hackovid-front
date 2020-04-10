import React, { Component } from 'react';
import AvatarImage from "../components/AvatarImage"
import { withAuth } from "../Context/AuthContext";

class Dialog extends Component {

    render() {
        return (
            <div className="modal" style={{ display: this.props.display ? 'block' : 'none' }}>
                <div className="modal-content">
                    <div className="header">
                        <button className="close-button" onClick={() => this.props.onClose()}>
                        <img className="close-cross"
                            src="../../images/close.svg"
                            alt="close-cross"
                        ></img>
                        </button>
                    </div>
                    <div className="user-info">
                        <p className="title-text">Has acceptat l'ajuda de:</p>
                        <div className="info">
                            <AvatarImage avatarImage={this.props.user.avatarImage} />
                            <div className="text-info">
                                <p className="text-name">{this.props.user.name} {this.props.user.surname}</p>
                                <p className="text-description">This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items</p>
                            </div>
                        </div>
                        <p className="text-contact">Ja et pots posar en contacte amb ell enviant-li un correu electrònic a:</p>
                        <p className="text-email">guillem.moreso@gmail.com</p>
                    </div>
                    <div className="line"></div>
                    <p className="text-ajuda">T'has equivocat i vols cancelar l'ajuda del guillem?</p>
                    <button className="cancel-button">Cancelar</button>
                </div>
            </div>
        )
    }
}

export default withAuth(Dialog);