import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import OffersTab from "../components/Navigation/OffersTab";
import OfferManaged from "../components/Offers/OfferManaged";
import Dialog from "../components/Dialog";
import offerService from "../services/offerService";
import LoadingView from "./LoadingView";

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            activeExpand: true,
            pendingExpand: false,
            doneExpand: false,
            offers: [],
            activeOffers: [],
            pendingOffers: [],
            restOffers: []
        };
    }

    componentDidMount() {
        this.getOffers();
    }

    async getOffers() {
        const offers  = await offerService.getMyOffers();
        await this.setState({ ...this.state, offers });

        const activeOffers = offers.filter((offer) => offer.status === 1);
        await this.setState({ ...this.state, activeOffers });

        const pendingOffers = offers.filter((offer) => offer.status === 2);
        await this.setState({ ...this.state, pendingOffers });

        const restOffers = offers.filter((offer) => offer.status === 3 || offer.status === 4);
        await this.setState({ ...this.state, restOffers });
    };

    render() {
        const { activeOffers, pendingOffers, restOffers } = this.state;
        return (
            <>
                <div className="activities-container">
                    <OffersTab tab="managed"/>

                    { this.state.offers.length > 0 ?
                        <>
                            <div className="profile-stats-card">
                                <div style={{display: "flex", flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                                        <span className="title" style={{color: "#a4d96c", fontWeight: "bold"}}>Actives ({activeOffers.length})</span>
                                    <div className="icon-container" onClick={() => this.setState({ activeExpand: !this.state.activeExpand })}>
                                        <img className="arrow-icon" style={{ width: '25px', height: '25px', transform: !this.state.activeExpand ? 'rotate(90deg)' : 'rotate(0deg)' }} src="../../images/chevron.svg" alt="close-cross"></img>
                                    </div>
                                </div>
                                <div style={{ display: this.state.activeExpand ? 'block' : 'none' }}>
                                    { activeOffers.map((offer, i) => {
                                        return <OfferManaged key={i} offer={offer} edit={true} />;
                                    })}
                                </div>
                            </div>

                            <div className="profile-stats-card">
                                <div style={{display: "flex", flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                                    <span className="title" style={{color: "#a4d96c", fontWeight: "bold"}}>Pendents de Resposta ({pendingOffers.length})</span>
                                    <div className="icon-container" onClick={() => this.setState({ pendingExpand: !this.state.pendingExpand })}>
                                        <img className="arrow-icon" style={{ width: '25px', height: '25px', transform: !this.state.pendingExpand ? 'rotate(90deg)' : 'rotate(0deg)' }} src="../../images/chevron.svg" alt="close-cross"></img>
                                    </div>
                                </div>
                                <div style={{ display: this.state.pendingExpand ? 'block' : 'none' }}>
                                    { pendingOffers.map((offer, i) => {
                                        return <OfferManaged key={i} offer={offer} requests={true}/>;
                                    })}
                                </div>
                            </div>

                            <div className="profile-stats-card">
                                <div style={{display: "flex", flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                                    <span className="title" style={{color: "#a4d96c", fontWeight: "bold"}}>Realitzades ({restOffers.length})</span>
                                    <div className="icon-container" onClick={() => this.setState({ doneExpand: !this.state.doneExpand })}>
                                        <img className="arrow-icon" style={{ width: '25px', height: '25px', transform: !this.state.doneExpand ? 'rotate(90deg)' : 'rotate(0deg)' }} src="../../images/chevron.svg" alt="close-cross"></img>
                                    </div>
                                </div>
                                <div style={{ display: this.state.doneExpand ? 'block' : 'none' }}>
                                    { restOffers.map((offer, i) => {
                                        return <OfferManaged key={i} offer={offer} />;
                                    })}
                                </div>
                            </div>

                        </>
                        : <LoadingView showText={false} /> }

                    <button onClickCapture={() => this.setState({...this.state, display: !this.state.display})}>Open Dialog</button>
                    <Dialog display={this.state.display} onClose={() => this.setState({ display: !this.state.display })}/>
                </div>
            </>
    );
  }
}

export default withAuth(Activities);
