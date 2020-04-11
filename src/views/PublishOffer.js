import React, {Component} from "react";
import Calendar from "../components/Offers/Calendar";
import Clock from "../components/Offers/Clock";
import { toast } from "react-toastify";
import OfferService from '../services/offerService'

class PublishOffer extends Component{

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

    onChangeRadio = async event => {
        var radios = document.getElementsByName('genderS');

        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            await this.setState({
              ...this.state,
              type: i
            });
            break;
          }
        }
    };

    createOffer = async event => {
      event.preventDefault();
      try {
        const { type, title, description, Day, Ini, End} = this.state;
      
        const startDate = Day + "T" + Ini;
        const endDate = Day + "T" + End;

        var data = {
          type, 
          title, 
          description, 
          startDate, 
          endDate
        }
        console.log(data)
        await OfferService.handleCreateOffer(data);
        toast.success(`Oferta registrada amb èxit!`);
        this.props.history.push('/publicacions');
      } catch (error) {
        console.error(error);
      }
    };   

    render() {
        return (
            <div className="app-container">
            <div className="activities-container">
                <form id="newpreference" onSubmit={this.createOffer} style={{'marginBottom':'5em'}}>
                  <h2>Publica una oferta</h2>
                  <div id="type" onChange={this.onChangeRadio}>
                    <label>
                    <input type="radio" id="type1" name="genderS" value="1"/>
                    <img src="../../images/food-delivery.svg" alt="Oferta de Compres"/>Compres</label>
                    <label>
                    <input type="radio" id="type2" name="genderS" value="2"/>
                    <img src="../../images/cross.svg" alt="Oferta de Salut"/>Salut</label>
                    <label>
                    <input type="radio" id="type3" name="genderS" value="3"/>
                    <img src="../../images/elearning.svg" alt="Oferta d'Educació"/>Educació</label>
                    <label>
                    <input type="radio" id="type4" name="genderS" value="4"/>
                    <img src="../../images/toilet-paper.svg" alt="Oferta d'Altres"/>Altres</label>
                  </div>
                  <input type="text" name="title" placeholder="Títol" onChange={this.handleChange} required/>
                  <input type="text" name="description" placeholder="Descripció" onChange={this.handleChange} required/>          
                  <div className="time-input">
                    <span>Dia:</span><Calendar onChange={this.handleDateChange.bind(this)}/>
                  </div>
                  <div className="time-input">
                    <span>Hora d'Inici:</span><Clock  onChange={this.handleIniChange.bind(this)}/>
                  </div>
                  <div className="time-input">
                    <span>Hora Fi:</span><Clock  onChange={this.handleEndChange.bind(this)}/>
                  </div>
                  <input type="submit" value="Publica"/>
                </form>
            </div>
            </div>
        );
    }
}

export default PublishOffer;
