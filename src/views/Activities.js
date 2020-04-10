import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import Dialog from "../components/Dialog"

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state={
            display: false
        }
      }

    render() {
        return (
            <>
                <div className="activities-container">
                    <h1>Activitats</h1>
                    <h2>Propostes Rebudes</h2>
                    <h2>Propostes Fetes</h2>
                    <Dialog display={this.state.display} onClose={() => this.setState({display: !this.state.display})}/>
                    <button id="myBtn" onClick={() => this.setState({display: !this.state.display})}>Open Modal</button>
                </div>
            </>
        );
    }
}

export default withAuth(Activities);
