import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

class Activities extends Component {
  render() {
    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1>Gestionar</h1>
            <div class="sections-nav">
              <div class="nav-row">
                <div class="nav-column">
                  <div
                    class="nav-column1"
                    style={{ border: "1px", borderBottom: "2px solid #a4d96c" }}
                  >
                    <p style={{ color: "#a4d96c", fontWeight: 700 }}>
                      Inscripcions
                    </p>
                  </div>
                </div>
                <div class="nav-column">
                  <div class="nav-column2">
                    <Link
                      to="/gestionades"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p>Publicacions</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-break-nav">
            <div class="profile-stats-card">
              <span
                style={{
                  backgroundColor: "rgb(90,152,78)",
                  margin: "15px 0",
                  padding: "5px",
                  color: "#fff",
                  borderRadius: "7px",
                  textAlign: "start",
                  fontSize: "16px",
                }}
              >
                Peticions acceptades
              </span>
            </div>
            <div class="profile-stats-card">
              <span
                style={{
                  backgroundColor: "rgb(242,157,105)",
                  margin: "15px 0",
                  padding: "5px",
                  color: "#fff",
                  borderRadius: "7px",
                  textAlign: "start",
                  fontSize: "16px",
                }}
              >
                Peticions pendents
              </span>
              <div
                class="anunci-panell"
                style={{
                  backgroundColor: "#EAEAEA",
                  margin: "3%",
                  padding: "5%",
                  borderRadius: "7px",
                }}
              >
                <h3
                  class="post-title"
                  style={{
                    textAlign: "start",
                    margin: "0",
                    fontSize: "16px",
                  }}
                >
                  Classes de Català amb la Mañá
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "12px",
                    margin: "0",
                    color: "#989898",
                  }}
                >
                  0.3 km | 17:30h | 22/04 | Educació
                </p>

                <p
                  style={{
                    textAlign: "start",
                    margin: "10px 0 10px 0",
                    fontSize: "12px",
                  }}
                >
                  Search for the keywords to learn more about each warning. To
                  ignore, add // eslint-disable-next-line to the line before.
                </p>
              </div>
            </div>
            <div class="profile-stats-card">
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
