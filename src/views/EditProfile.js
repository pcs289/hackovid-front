import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage"
import ImageService from '../services/ImagesService'
import Backbar from "../components/Navigation/Backbar";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.avatarImageElement = React.createRef();
    this.state = {
      name: '',
      surname: '',
      password: '',
      description: '',
      contactInfo: ''
    };
  }

  handleChange = async event => {
    const { name, value } = event.target;
    await this.setState({  ...this.state, [name]: value});
  };

  onClickSave = async e => {
    e.preventDefault();
    try {
      const {name, surname, password, description, contactInfo} = this.state;
      this.props.handleProfileUpdate({
        name,
        surname,
        password,
        contactInfo,
        description
      }).then((e) => {
        if(e.name !== 'Error') {
          toast.success(`Canvis guardats amb èxit!`);
          this.props.history.push('/perfil');
        } else {
          toast.warn(`Hi ha hagut un error`);
        }
      });
    } catch (error) {
      console.error('Error when saving changes');
      console.error(error);
      toast.error('Hi ha hagut un error');
    }
  };

  onChange = async (e) => {
    const formData = new FormData();
    formData.append('file' , e.target.files[0]);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    await ImageService.uploadAvatarImg(formData, config);
    this.avatarImageElement.current.componentDidMount();
  };

  render() {
    const { name, surname, avatarImg, description, contactInfo, password } = this.props.user;

    return (
      <div className="viewport-with-navbar">
        <div id="page-name" style={{ display: "flex" }}>
          <Backbar history={this.props.history} />
          <h1 style={{ textTransform: "capitalize" }}>Editar Perfil</h1>
        </div>
        <div className="editprofile-bg">
          <div className="editprofile-labels">
            <div className="row">
              <label>Nom:</label>
              <input type="text" name="name" onChange={this.handleChange} defaultValue={name}/>
            </div>
            <div className="row">
              <label>Cognom:</label>
              <input type="text" name="surname" onChange={this.handleChange} defaultValue={surname}/>
            </div>
            <div className="row">
              <label>Mot de pas:</label>
              <input type="text" name="password" onChange={this.handleChange} defaultValue={password}/>
            </div>
            <div className="row">
              <label>Contacte (Telèfon o Email):</label>
              <input type="text" name="contactInfo" onChange={this.handleChange} defaultValue={contactInfo}/>
            </div>
            <div className="row">
              <label>Descripció Personal:</label>
              <input type="text" name="description" onChange={this.handleChange} defaultValue={description}/>
            </div>
          </div>      
          <div className="edit-profile-picture">
          <AvatarImage avatarImg={avatarImg} ref={this.avatarImageElement}/>
            <div className="user-profile overlay">
              <label className="icon" title="User Profile">
                <i className="fa fa-camera"></i>
                <input type="file" id="avatar" name="file" accept="image/png" onChange={this.onChange}/>
              </label>
              
            </div>
          </div>
        </div>
        <div>
        <form onSubmit={this.onClickSave}>
          <input type="submit" id="edit-profile-save" className="profile-div" value="Desa els canvis">
              
          </input> 
        </form>         
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
