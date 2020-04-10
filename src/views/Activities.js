import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import Dialog from "../components/Dialog";
import OffersTab from "../components/Navigation/OffersTab";
import OfferManaged from "../components/Offers/OfferManaged";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }
  render() {
    return (
      <>
        <div className="activities-container"> <OffersTab tab="activities"  />
          <div className="bottom-break-nav">
            <div className="profile-stats-card">
              <span style={{
                  backgroundColor: "rgb(90,152,78)",
                  margin: "15px 0",
                  padding: "5px",
                  color: "#fff",
                  borderRadius: "7px",
                  textAlign: "start",
                  fontSize: "16px",
                }}>Peticions acceptades</span>
                <OfferManaged />
            </div>
            <div className="profile-stats-card">
              <span style={{
                  backgroundColor: "rgb(242,157,105)",
                  margin: "15px 0",
                  padding: "5px",
                  color: "#fff",
                  borderRadius: "7px",
                  textAlign: "start",
                  fontSize: "16px",
                }}>Peticions pendents</span>
            </div>
            <div className="profile-stats-card">
              <span
                style={{
                  backgroundColor: "rgb(184,92,89)",
                  margin: "15px 0",
                  padding: "5px",
                  color: "#fff",
                  borderRadius: "7px",
                  textAlign: "start",
                  fontSize: "16px",
                }}
              >
                Peticions denegades
              </span>
            </div>

              <Dialog
                      display={this.state.display}
                      onClose={() =>
                        this.setState({ display: !this.state.display })
                      }
                    />
                    <button
                      id="myBtn"
                      onClick={() =>
                        this.setState({ display: !this.state.display })
                      }
                    >
                      Open Modal
                    </button>

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
