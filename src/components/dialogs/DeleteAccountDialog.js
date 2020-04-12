import React, { Component } from 'react';
import { withAuth } from "../../Context/AuthContext";

class DeleteAccountDialog extends Component {

    render() {
        return (
            <div className="modal" style={{ display: this.props.display ? 'flex' : 'none' }}>
                <div className="modal-content" style={{maxHeight: '250px'}}>
                    <div className="header">
                        <button className="close-button" onClick={() => this.props.onClose()}>
                            <img className="close-cross"
                                 src="../../images/close.svg"
                                 alt="close-cross"
                            ></img>
                        </button>
                    </div>
                    <div className="user-info" style={{textAlign: 'center'}}>
                        <h3>Estàs segur que vols eliminar el teu compte?</h3>
                        <p><b>Aquesta acció és irreversible</b></p>
                        <button className="cancel-button" onClick={() => this.props.onDeleteConfirmed()}>Elimina</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(DeleteAccountDialog);
