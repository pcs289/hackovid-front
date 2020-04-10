import React, { Component } from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import Clock from "./Clock";
import Day from "./Day";
import Calendar from "./Calendar";

class NewPreference extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'type':'',
        'title':'',
        'description':'',
        'Day':'',
        'Ini':'',
        'End':''
      };
    }

    handleChange = async event => {
        const { name, value } = event.target;
        await this.setState({  ...this.state, [name]: value});
        console.log(this.state);
      };

    handleDateChange = async date => {
        await this.setState({  ...this.state, 'Day': date});
    }

    handleIniChange = async date => {
        await this.setState({  ...this.state, 'Day': date});
        console.log(this.state);
    }

    handleEndChange = async date => {
        await this.setState({  ...this.state, 'Day': date});
        console.log(this.state);
    }

    onChangeRadio = async event => {
        var radios = document.getElementsByName('genderS');

        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            await this.setState({
              ...this.state,
              type: i
            });
            console.log(this.state)
            break;
          }
        }
    };    

    render() {
        return (
            <form id="newpreference">
              Tipus:
              <div id="type" onChange={this.onChangeRadio}>
                <label>
                <input type="radio" id="type1" name="genderS" value="1"/>
                Male</label>
                <label>
                <input type="radio" id="type2" name="genderS" value="2"/>
                Female</label>
                <label>
                <input type="radio" id="type3" name="genderS" value="3"/>
                Trans</label>
                <label>
                <input type="radio" id="type4" name="genderS" value="4"/>
                Other</label>
              </div>
              Títol:
              <input type="text" name="title" onChange={this.handleChange} required/>
              Descripció:
              <input type="text" name="description" onChange={this.handleChange} required/>          
              Dia:<Calendar onChange={this.handleDateChange.bind(this)}/>
              Hora d'Inici:
              <Clock ini={this.ini} onChange={this.handleIniChange.bind(this)}/>
              Hora Fi:
              <Clock end={this.end} onChange={this.handleEndChange.bind(this)}/>
              <button value="Accepta" onClick={this.props.acceptOffer}>
                Accepta
              </button>
            </form>
        );
    }
}

export default NewPreference