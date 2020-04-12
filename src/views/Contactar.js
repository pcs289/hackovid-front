import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Backbar from "../components/Navigation/Backbar";
import Bio from "./Bio";
import offerService from "../services/offerService";
import LoadingView from "./LoadingView";
import CreateRequestDialog from "../components/dialogs/CreateRequestDialog";
import Moment from "react-moment";
import "moment/locale/ca";

class Contactar extends Component {

  state = {
    displayBio: false,
    display: false,
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
    const categoriaTipo = [
      "../../images/food-delivery.svg",
      "../../images/elearning.svg",
      "../../images/cross.svg",
      "../../images/toilet-paper.svg"
    ];
    const creator = offer ? offer.creator : null;
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
                <img className="badge-img" src={categoriaTipo[offer.type]} alt="Categoría de la oferta"/>
                <h1>{offer.title}</h1>
                <p style={{color: "#989898"}}>
                  <Moment format="LLL" locale="ca">
                    {offer.startDate}
                  </Moment>{" "}
                  fins les{" "}
                  <Moment format="LT" locale="ca">
                    {offer.endDate}
                  </Moment>
                </p>
                {/*<p id="reservation-location">A 0.3km de casa teva</p>*/}
                <div id="booking-card-details">
                  <p>{offer.description}</p>
                </div>
                <div id="profile-btn-div">

                  {
                    offer.status === 1 ?
                        <>
                          <div id="submit-reservation">
                            <div id="submit-datapicker" onClick={() => this.setState({ display: !this.state.display })}>
                              <div id="profile-btn-div">
                                <div id="submit-reservation">
                                  <div id="submit-datapicker">Enviar petició</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                        : null}

                  <CreateRequestDialog display={this.state.display} offer={offer} onClose={() => this.setState({ display: !this.state.display })}/>

                  {this.state.displayBio && creator ?
                      <div>
                        <div onClick={() => this.setState({displayBio: !this.state.displayBio})} id="expand-bio" className="profile-stats-card"
                        style={{
                            boxShadow: "none",
                            backgroundColor: "#fff",
                            display: "flex",
                            justifyContent: "space-between"}}>
                          <p style={{fontWeight: "700"}}>Veure perfil de {this.state.offer.creator.username}</p>
                          <img className="badge-img" src="../../images/minus.svg" alt="discount"/>
                        </div>
                        <Bio creator={creator}/>
                      </div>
                       :
                      <div onClick={() => this.setState({displayBio: !this.state.displayBio})} id="expand-bio" className="profile-stats-card"
                      style={{
                          boxShadow: "none",
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "space-between"
                      }}>
                      <p style={{fontWeight: "700"}}>Veure perfil de {this.state.offer.creator.username}</p>
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
