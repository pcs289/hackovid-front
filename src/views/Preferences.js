import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage";
import ImageService from '../services/ImagesService';
import Clock from "../components/Clock";
import Day from "../components/Day";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.avatarImageElement = React.createRef();
  }

  handleChange = async event => {
    const { name, value } = event.target;
    await this.setState({  ...this.state, [name]: value});
  };

  render() {
    return (
      <div className="viewport-with-navbar">

        <button id="newpreference-btn" onClick={this.onClickSave} >
          <div id="">
            <p>Nova preferència</p>
          </div>
        </button> 
        <form id="newpreference">
          Tipus:
          <div id="type">
            <label for="male">
            <input type="radio" id="male" name="gender" value="male"/>
            Male</label>
            <label for="female">
            <input type="radio" id="female" name="gender" value="female"/>
            Female</label>
            <label for="trans">
            <input type="radio" id="trans" name="gender" value="trans"/>
            Trans</label>
            <label for="other">
            <input type="radio" id="other" name="gender" value="other"/>
            Other</label>
          </div>
          Dia de la setmana:
          <Day/>
          Hora d'Inici:
          <Clock/>
          Hora Fi:
          <Clock/>
          <input type="submit" value="Accepta"/>
        </form>
        <div className="list">
          <div className="preference">
            <p className="description">adfasdf</p>
            <div className="edit">
              <img
                id="category-img"
                src="../../images/edit.svg"
                alt="editar-perfil"
              ></img>
              <img
                id="category-img"
                src="../../images/criss-cross.svg"
                alt="editar-perfil"
              ></img>
            </div>
          </div>      
          <div className="preference">
            <p className="description">adfasdf</p>
            <div className="edit">
              <img
                id="category-img"
                src="../../images/edit.svg"
                alt="editar-perfil"
              ></img>
              <img
                id="category-img"
                src="../../images/criss-cross.svg"
                alt="editar-perfil"
              ></img>
            </div>
          </div>  
          <div className="preference">
            <p className="description">adfasdf</p>
            <div className="edit">
              <img
                id="category-img"
                src="../../images/edit.svg"
                alt="editar-perfil"
              ></img>
              <img
                id="category-img"
                src="../../images/criss-cross.svg"
                alt="editar-perfil"
              ></img>
            </div>
          </div>      
        </div>
      </div>
    );
  }
}

export default withAuth(Preferences);
