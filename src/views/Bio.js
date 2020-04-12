import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage";

class Bio extends Component {

  render() {
    const { creator } = this.props;
    if (!creator) {
      return null;
    }
    return (
      <>
        <div className="bottom-break-nav">
          <div className="profile-stats-card">

            <AvatarImage avatarImg={creator.avatarImg}/>

            <h1 style={{ textTransform: "capitalize" }}>{creator.name} {creator.surname}</h1>

            <div className="profile-stats">
              <p>
                <span>Participat</span>
                <br />{creator.offers.length}
              </p>
              <p>
                <span>Demanat</span>
                <br />{creator.requests.length}
              </p>
            </div>

            {creator.description ?
                <>
                  <h2 style={{ textAlign: "start" }}>Descripció</h2>
                  <p className="inserted-stat">{creator.description}</p>
                </> : null}

            <h2 style={{ textAlign: "start" }}>Demana</h2>
            <div>
              <div className="badges">
                <ul>
                  <li>
                    <img
                        className="badge-img"
                      src="../../images/food-delivery.svg"
                      alt="badge"
                    />
                    <p>Compres</p>
                  </li>
                  <li>
                    <img
                        className="badge-img"
                      src="../../images/cross.svg"
                      alt="reward"
                    />
                    <p>Salut</p>
                  </li>
                  <li>
                    <img
                        className="badge-img"
                      src="../../images/elearning.svg"
                      alt="discount"
                    />
                    <p>Educació</p>
                  </li>
                </ul>
              </div>
            </div>

            <h2 style={{ textAlign: "start" }}>Participa</h2>
            <div>
              <div className="badges">
                <ul>
                  <li>
                    <img
                        className="badge-img"
                      src="../../images/elearning.svg"
                      alt="discount"
                    />
                    <p>Educació</p>
                  </li>
                  <li>
                    <img
                        className="badge-img"
                      src="../../images/toilet-paper.svg"
                      alt="discount"
                    />
                    <p>Altres</p>
                  </li>

                  <li>
                    <img
                        className="badge-img"
                      src="../../images/approved.svg"
                      alt="okey"
                    />
                    <p>Verificat</p>
                  </li>
                </ul>
              </div>

              {creator.contactInfo ?
                <>
                  <h2 style={{ textAlign: "start" }}>Contacte</h2>
                  <p className="inserted-stat">
                    {creator.contactInfo}
                  </p>
                </> : null }

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Bio);
