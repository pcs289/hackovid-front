import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";

class Activities extends Component {
    render() {
        return (
            <>
                <div className="activities-container">
                    <h1>Activitats</h1>
                    <h2>Propostes Rebudes</h2>
                    <h2>Propostes Fetes</h2>
                </div>
            </>
        );
    }
}

export default withAuth(Activities);
