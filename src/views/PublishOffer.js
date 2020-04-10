import React, {Component} from "react";
import Calendar from "../components/Offers/Calendar";
import Clock from "../components/Offers/Clock";

class PublishOffer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            'type':'',
            'title':'',
            'description':'',
            'date':'',
            'startTime':'',
            'endTime':''
        };
    }

    handleChange = async event => {
        const { name, value } = event.target;
        await this.setState({  ...this.state, [name]: value});
        console.log(this.state);
    };

    handleDateChange = async date => {
        await this.setState({  ...this.state, date});
        console.log(this.state);
    };

    handleIniChange = async date => {
        const utcDate = new Date(date).getUTCDate();
        console.log(utcDate);
        console.log(new Date(utcDate));
        console.log(new Date(utcDate).toISOString());
        console.log(new Date(utcDate).toISOString().substr(11, 7));
        /*await this.setState({  ...this.state, 'startTime': date});
        console.log(this.state);*/
    };

    handleEndChange = async date => {
        const utcDate = new Date(date).getUTCDate();
        console.log(utcDate);
        console.log(new Date(utcDate));
        console.log(new Date(utcDate).toISOString());
        console.log(new Date(utcDate).toISOString().substr(11, 7));
        /*await this.setState({  ...this.state, 'endTime': date});
        console.log(this.state);*/
    };

    onChangeRadio = async event => {
        const radios = document.getElementsByName('genderS');

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
            <div className="activities-container">
                <form id="newpreference">
                    Tipus:
                    <div id="type" onChange={this.onChangeRadio}>
                        <label><input type="radio" id="type1" name="genderS" value="1"/>Aliments</label>
                        <label><input type="radio" id="type2" name="genderS" value="2"/>Entreteniment</label>
                        <label><input type="radio" id="type3" name="genderS" value="3"/>Salut</label>
                        <label><input type="radio" id="type4" name="genderS" value="4"/>Altres</label>
                    </div>
                    Títol:
                    <input type="text" name="title" onChange={this.handleChange} required/>
                    Descripció:
                    <input type="text" name="description" onChange={this.handleChange} required/>
                    Dia:<Calendar onChange={this.handleDateChange.bind(this)}/>
                    Hora d'Inici:
                    <Clock onChange={this.handleIniChange.bind(this)}/>
                    Hora Fi:
                    <Clock onChange={this.handleEndChange.bind(this)}/>
                    <button value="Accepta" onClick={this.props.acceptOffer}>
                        Accepta
                    </button>
                </form>
            </div>
        );
    }
}

export default PublishOffer;
