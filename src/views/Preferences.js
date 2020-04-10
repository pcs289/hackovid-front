import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage";
import ImageService from '../services/ImagesService';
import NewPreference from "../components/Offers/NewPreference";
import NewPreferenceButton from "../components/Offers/NewPreferenceButton";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.avatarImageElement = React.createRef();
    this.state = { isEmptyState: true };
  }

  handleChange = async event => {
    const { name, value } = event.target;
    await this.setState({  ...this.state, [name]: value});
  };

  triggerNewOffer = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddOfferState: true
    })
  }

  triggerAcceptOffer =() => {
    this.setState({
      ...this.state,
      isEmptyState: true,
      isAddOfferState: false
    })
  }

  render() {
    return (
      <div className="viewport-with-navbar">

        {this.state.isEmptyState && <NewPreferenceButton addOffer={this.triggerNewOffer}/>}

        {this.state.isAddOfferState && <NewPreference acceptOffer={this.triggerAcceptOffer}/>}

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
