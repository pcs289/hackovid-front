import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import OffersTab from "../components/Navigation/OffersTab";
import OfferManaged from "../components/Offers/OfferManaged";
import Dialog from "../components/Dialog";

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            acceptedExpand: true,
            pendingExpand: false
        };
    }
    render() {
        return (
            <>
                <div className="app-container">
                    <div className="activities-container">
                        <OffersTab tab="managed"/>
                        <div className="profile-stats-card">
                            <div className="profile-stats-card-header">
                                <div className="title-container">
                                    <span className="title" style={{color: "#a4d96c", fontWeight: "bold"}}>Oferted Actives</span>
                                </div>
                                <div className="icon-container">
                                    <button className="arrow-button" onClick={() =>
                                        this.setState({ acceptedExpand: !this.state.acceptedExpand })
                                    }>
                                        <img className="arrow-icon" style={{  transform: this.state.acceptedExpand ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                             src="../../images/chevron.svg"
                                             alt="close-cross"
                                        ></img>
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: this.state.acceptedExpand ? 'block' : 'none' }}>
                                <OfferManaged onClick={() =>
                                    this.setState({ display: !this.state.display })
                                }/>
                            </div>
                        </div>
                        <div className="profile-stats-card">
                            <div className="profile-stats-card-header">
                                <div className="title-container">
                                    <span className="title" style={{color: "#a4d96c", fontWeight: "bold"}}>Ofertes Acabades</span>
                                </div>
                                <div className="icon-container">
                                    <button className="arrow-button" onClick={() =>
                                        this.setState({ pendingExpand: !this.state.pendingExpand })
                                    }>
                                        <img className="arrow-icon" style={{  transform: this.state.pendingExpand ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                             src="../../images/chevron.svg"
                                             alt="close-cross"
                                        ></img>
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: this.state.pendingExpand ? 'block' : 'none' }}>
                                <OfferManaged onClick={() =>
                                    this.setState({ display: !this.state.display })}/>
                            </div>
                        </div>
                        <Dialog
                            display={this.state.display}
                            onClose={() =>
                                this.setState({ display: !this.state.display })
                            }
                        />
                    </div>
                </div>
            </>
    );
  }
}

export default withAuth(Activities);
