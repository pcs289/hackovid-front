import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Dialog from "../components/Dialog";
import OffersTab from "../components/Navigation/OffersTab";
import OfferManaged from "../components/Offers/OfferManaged";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
        acceptedExpand: true,
        canceledExpand: false,
        pendingExpand: false
    };
  }
  render() {
    return (
      <>
        <div className="app-container">
            <div className="activities-container">
            <OffersTab tab="activities"/>
            <div className="profile-stats-card">
                <div className="profile-stats-card-header">
                    <div className="title-container">
              <span className="title" style={{backgroundColor: "#a4d96c", color: "#fff"}}>Peticions acceptades</span>
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
                            <span className="title" style={{backgroundColor: "#eebb2d", color: "#fff"}}>Peticions acceptades</span>
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
                <div className="profile-stats-card">
                    <div className="profile-stats-card-header">
                        <div className="title-container">
                            <span className="title" style={{backgroundColor: "#f64747", color: "#fff"}}>Peticions cancelades</span>
                        </div>
                        <div className="icon-container">
                            <button className="arrow-button" onClick={() =>
                                this.setState({ canceledExpand: !this.state.canceledExpand })
                            }>
                                <img className="arrow-icon" style={{  transform: this.state.canceledExpand ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                     src="../../images/chevron.svg"
                                     alt="close-cross"
                                ></img>
                            </button>
                        </div>
                    </div>
                    <div style={{ display: this.state.canceledExpand ? 'block' : 'none' }}>
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

            {/* <div class="myrequests-card">
              <img
                class="requester-profile-pic"
                src="../../images/add-contact.svg"
                alt="requester-avatar"
              />
              <div class="requester-btn-div">
                <p style={{ fontWeight: "bold" }}>*Preference: Joe Doe</p>
                <p class="requester-name-card">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <div class="petitions-btn">
                  <div class="petition-span-btn">Acceptar</div>
                  <div
                    class="petition-span-btn"
                    style={{ backgroundColor: "rgb(237, 92, 115)" }}
                  >
                    Denegar
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Activities);
