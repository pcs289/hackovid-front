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
                  <div class="nav-column1">
                    <Link
                      to="/activitats"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p>Les meves peticions</p>
                    </Link>
                  </div>
                </div>
                <div
                  class="nav-column"
                  style={{ border: "1px", borderBottom: "2px solid #a4d96c" }}
                >
                  <div class="nav-column2">
                    <p style={{ color: "#a4d96c", fontWeight: 700 }}>
                      Les meves ofertes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-break-nav"></div>
        </div>
      </>
    );
  }
}

export default withAuth(Activities);
