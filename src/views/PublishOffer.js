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
      } catch (error) {
        console.error(error);
      }
    };   

    render() {
        return (
            <div className="activities-container" style={{'marginBottom':'1em'}}>
                <form id="newpreference" onSubmit={this.createOffer}>
                  Tipus:
                  <div id="type" onChange={this.onChangeRadio}>
                    <label>
                    <input type="radio" id="type1" name="genderS" value="1"/>
                    <img src="../../images/food-delivery.svg"/>Compres</label>
                    <label>
                    <input type="radio" id="type2" name="genderS" value="2"/>
                    <img src="../../images/cross.svg"/>Salut</label>
                    <label>
                    <input type="radio" id="type3" name="genderS" value="3"/>
                    <img src="../../images/elearning.svg"/>Educació</label>
                    <label>
                    <input type="radio" id="type4" name="genderS" value="4"/>
                    <img src="../../images/toilet-paper.svg"/>Altres</label>
                  </div>
                  Títol:
                  <input type="text" name="title" onChange={this.handleChange} required/>
                  Descripció:
                  <input type="text" name="description" onChange={this.handleChange} required/>          
                  Dia:<Calendar onChange={this.handleDateChange.bind(this)}/>
                  Hora d'Inici:
                  <Clock  onChange={this.handleIniChange.bind(this)}/>
                  Hora Fi:
                  <Clock  onChange={this.handleEndChange.bind(this)}/>
                  <input type="submit" value="Accepta"/>
                </form>
            </div>
        );
    }
}

export default PublishOffer;
