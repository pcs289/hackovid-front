import React, { Component } from 'react';
import { withAuth } from "../../Context/AuthContext";
import "moment/locale/ca";
import { withRouter} from 'react-router-dom';
import Calendar from "../Offers/Calendar";
import Clock from "../Offers/Clock";
import OfferService from "../../services/offerService";
import {toast} from "react-toastify";

class EditOfferDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'title': props.offer.title,
            'description':props.offer.description,
            'Day': props.offer.startDate,
            'Ini': props.offer.startDate,
            'End': props.offer.endDate
        };
    }

    handleChange = async event => {
        const { name, value } = event.target;
        await this.setState({  ...this.state, [name]: value});
    };

    handleDateChange = async date => {
        await this.setState({  ...this.state, 'Day': date});
    }

    handleIniChange = async hour => {
        await this.setState({  ...this.state, 'Ini': hour});
    }

    handleEndChange = async hour => {
        await this.setState({  ...this.state, 'End': hour});
    }

    async updateOffer(ev) {
        ev.preventDefault();
        try {
            const { title, description, Day, Ini, End} = this.state;

            const startDate = Day + "T" + Ini;
            const endDate = Day + "T" + End;

            const data = {
                title,
                description,
                startDate,
                endDate
            };
            await OfferService.updateOffer(this.props.offer._id, data);
            toast.success(`Oferta editada amb èxit!`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }


    render() {
        const { offer } = this.props;
        return (
            <div className="modal" style={{ display: this.props.display ? 'flex' : 'none' }}>
                <div className="modal-content">
                    <div className="header">
                        <button className="close-button" onClick={() => this.props.onClose()}>
                            <img className="close-cross"
                                 src="../../images/close.svg"
                                 alt="close-cross"
                            ></img>
                        </button>
                    </div>
                    <div id="offer-dialog-user-info" className="user-info">
                        <form onSubmit={this.updateOffer.bind(this)} style={{'marginBottom':'5em'}}>
                            <div className="time-input">
                                <span>Títol:</span><input type="text" name="title" placeholder="Títol" defaultValue={offer.title} onChange={this.handleChange.bind(this)} required />
                            </div>
                            <div className="time-input">
                                <span>Dia:</span><Calendar onChange={this.handleDateChange.bind(this)}/>
                            </div>
                            <div className="time-input">
                                <span>Hora d'Inici:</span><Clock  onChange={this.handleIniChange.bind(this)}/>
                            </div>
                            <div className="time-input">
                                <span>Hora Fi:</span><Clock  onChange={this.handleEndChange.bind(this)}/>
                            </div>
                            <div className="time-input">
                                <span>Descripció:</span><br />
                                <textarea name="description" placeholder="Descripció" defaultValue={offer.description} onChange={this.handleChange} required/>
                            </div> <br />
                            <input type="submit" className="btn" value="Edita"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(withAuth(EditOfferDialog));
