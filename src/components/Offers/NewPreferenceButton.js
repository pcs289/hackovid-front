import React, { Component } from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

class NewPreferenceButton extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <button id="newpreference-btn" onClick={this.props.addOffer} >
              <div id="">
                <p>Nova oferta</p>
              </div>
            </button> 
        );
    }
}

export default NewPreferenceButton