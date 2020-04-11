import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Backbar from "../components/Navigation/Backbar";
import Bio from "./Bio";
import offerService from "../services/offerService";
import LoadingView from "./LoadingView";

class Contactar extends Component {

  state = {
    displayBio: false,
    offer: null
  };

  async componentDidMount() {
    const { match : { params: { offerId }}} = this.props;
    await this.getOffer(offerId);
  }

  async getOffer(offerId) {
    const offer = await offerService.getOffer(offerId);
    return await this.setState({ ...this.state, offer });
  }

  render() {
    const {offer} = this.state;
    const startTime = offer ? offer.startTime : '';
    const endTime = offer ? offer.endTime : '';
    return (
      <>
        {offer ?
          <div className="activities-container">
            <div id="page-name" style={{ display: "flex" }}>
              <Backbar history={this.props.history} />
              <h1 style={{ textTransform: "capitalize" }}>{offer.title}</h1>
            </div>
            <div className="bottom-break-nav">
              <div className="profile-stats-card">
                <h1 id="club-detail-header">{offer.title}</h1>

                <div id="moment-booking">
                  <img id="padel-icon" src="../../images/booking.svg" alt="padel-icon"></img>
                  <p>{offer.description}</p>
                </div>
                <div id="booking-card-details">
                  <p id="reservation-location">A 0.3km de casa teva</p>
                  <div id="reservation-hours">
                    <p><span>Inici</span><br />{startTime}</p>
                    <p><span>Fi</span><br />{endTime}</p>
                    <p><span>Duration</span><br />{}</p>
                  </div>
                </div>
                <div id="profile-btn-div">
                  <div id="submit-reservation">
                    <div id="submit-datapicker" onClick={() => this.setState({ displayBio: !this.state.displayBio })}>
                      <div id="profile-btn-div">
                        <div id="submit-reservation">
                          <div id="submit-datapicker">Enviar petició</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {this.state.displayBio && this.state.offer.creator ?
                      <Bio userId={this.state.offer.creator}/> :

                      <div onClick={() => this.setState({displayBio: !this.state.displayBio})} className="profile-stats-card"
                      style={{
                          boxShadow: "none",
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "space-between"
                      }}>
                      <p style={{fontWeight: "700"}}>Veure perfil de Joe Doe</p>
                      <img
                          className="badge-img"
                          src="../../images/plus.svg"
                          alt="discount"
                      />
                      </div>
                  }
                </div>
              </div>
            </div>
          </div> : <LoadingView/> }
      </>
    );
  }
}

export default withAuth(Contactar);
