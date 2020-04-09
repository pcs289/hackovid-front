import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage"
import ImageService from '../services/ImagesService'


class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.avatarImageElement = React.createRef();
    this.state = {name: '', surname: ''};
  }

  componentDidMount(){
    this.setState({name: this.props.user.name, surname: this.props.user.surname});
  };

  handleChange = async event => {
    const { name, value } = event.target;
    await this.setState({  ...this.state, [name]: value});
  };

  onClickSave = async e => {
    e.preventDefault();
    try {
      const { name, surname} = this.state;
      this.props.handleProfileUpdate({
        name,
        surname,
      });
      toast.success(`Canvis guardats amb èxit!`);
    } catch (error) {
      console.error('Error when saving changes');
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
}

  render() {
    const { name, surname, avatarImg } = this.props.user;

    return (
      <div className="viewport-with-navbar">
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
          </div>      
          <div className="edit-profile-picture">
          <AvatarImage avatarImg={avatarImg} ref={this.avatarImageElement}/>
            <div className="user-profile overlay">
              <label className="icon" title="User Profile">
                <i className="fa fa-camera"></i>
              </label>
              <input type="file" id="avatar" name="file" accept="image/png" onChange= {this.onChange}/>
            </div>
          </div>
        </div>
        <div>
          <button className="profile-div" onClick={this.onClickSave} >
            <div id="profile-btn">
              <p>Desa els canvis</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/edit-profile.svg"
                alt="editar-perfil"
              ></img>
            </div>
          </button>          
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);