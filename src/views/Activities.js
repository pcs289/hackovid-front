import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

class Activities extends Component {
  render() {
    return (
      <>
        <div className="activities-container">
          <div id="page-name">
            <h1>Sol·licituds</h1>
            <div class="sections-nav">
              <div class="nav-row">
                <div class="nav-column">
                  <div
                    class="nav-column1"
                    style={{ border: "1px", borderBottom: "2px solid #a4d96c" }}
                  >
                    <p style={{ color: "#a4d96c", fontWeight: 700 }}>
                      Pendents
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
                      <p>Gestionades</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-break-nav">
            <div class="myrequests-card">
              <img
                class="requester-profile-pic"
                src="../../images/add-contact.svg"
                alt="requester-avatar"
              ></img>
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Activities);
