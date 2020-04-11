import React, { Component } from 'react';
import { toast } from "react-toastify";
import AvatarImage from "../components/AvatarImage";
import { withAuth } from "../Context/AuthContext";
import Moment from "react-moment";
import "moment/locale/ca";
import RequestService from '../services/requestService';
import { Route , withRouter} from 'react-router-dom';

class OfferDialog extends Component {

    state = {
        comments : ''
    }

    handleChange = async event =>{
        const { name, value } = event.target;
        await this.setState({  ...this.state, [name]: value});
    }

    acceptOffer = async event => {
        event.preventDefault();
        try {
        const { comments} = this.state;
        const offerId = this.props.offer._id;

        var data = {
          offerId,
          comments
        }
        console.log(data)
        await RequestService.handleCreateRequest(data);
        toast.success(`Sol·licitud d'oferta registrada amb èxit!`);
        this.props.history.push('/inscripcions');
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { offer} = this.props;
        const categoriaTipo = [
            "../../images/food-delivery.svg",
            "../../images/elearning.svg",
            "../../images/cross.svg",
            "../../images/toilet-paper.svg"
        ];
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
                        <p className="title-text">Acceptar l'oferta d'{this.props.user.name}:</p>
                        <div className="offer-dialog-info">
                            <div className="offer-dialog-description">
                                <img
                                    className="badge-img"
                                    src={categoriaTipo[offer.type]}
                                    alt="altres"
                                />
                                <h2>{offer.title}</h2>
                            </div>
                            <p style={{color: "#989898"}}>
                                <Moment format="LLL" locale="ca">
                                    {offer.startDate}
                                </Moment>{" "}
                                fins les{" "}
                                <Moment format="LT" locale="ca">
                                    {offer.endDate}
                                </Moment>
                            </p>
                            <p>Descripció: {offer.description}</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <form className="offer-dialog-form" onSubmit={this.acceptOffer}>
                        <input type="text" name="comments" placeholder="Envia un missatge" onChange={this.handleChange} required/>
                        <input id="accept-offer-request-btn" className="accept-button" type="submit" value="Accepta l'oferta"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(withAuth(OfferDialog));