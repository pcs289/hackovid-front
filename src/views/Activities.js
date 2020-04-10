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
                      Les meves peticions
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
                      <p>Les meves ofertes</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-break-nav">
            <h2
              style={{
                backgroundColor: "#EAEAEA",
                margin: "3%",
                padding: "5%",
                borderRadius: "7px",
              }}
            >
              Ofertes acceptades
            </h2>
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
                style={{
                  textAlign: "start",
                  margin: "0 0 10px 0",
                  fontSize: "12px",
                }}
              >
                Classes de Català amb la Mañá
              </h3>
              <p
                style={{
                  textAlign: "start",
                  margin: "0 0 10px 0",
                  fontSize: "10px",
                }}
              >
                Search for the keywords to learn more about each warning. To
                ignore, add // eslint-disable-next-line to the line before.
              </p>
            </div>
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
                style={{
                  textAlign: "start",
                  margin: "0 0 10px 0",
                  fontSize: "12px",
                }}
              >
                Classes de Xinu amb la Mariajo de Wuhan
              </h3>
              <p
                style={{
                  textAlign: "start",
                  margin: "0 0 10px 0",
                  fontSize: "10px",
                }}
              >
                Search for the keywords to learn more about each warning. To
                ignore, add // eslint-disable-next-line to the line before.
              </p>
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
