import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import OffersTab from "../components/Navigation/OffersTab";
import OfferManaged from "../components/Offers/OfferManaged";

class Activities extends Component {
  render() {
    return (
      <>
        <div className="activities-container"> <OffersTab tab="managed"  />
          <div className="bottom-break-nav">
              <div className="profile-stats-card">
                  <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>Ofertes actives</h2>
                  <OfferManaged />
              </div>
              <div className="profile-stats-card">
                  <h2 style={{ textAlign: "start", margin: "0 0 10px 0" }}>Ofertes passades</h2>
                  <OfferManaged />
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Activities);
