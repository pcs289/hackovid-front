import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage"
import ImageService from '../services/ImagesService'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.avatarImageElement = React.createRef()
}

  onClickLogout = async () => {
    try {
      toast.info("Logout succesfully");
      this.props.handleLogout();
    } catch (error) {
      console.error("Error while logout ");
    }
  };

  onClickDelete = async () => {
    try {
      toast.warn("Account deleted");
      this.props.handleUserDelete();
    } catch (error) {
      console.error("Error while logout ");
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
    const { name, surname } = this.props.user;

    return (
      <div className="viewport-with-navbar">
        <div className="editprofile-bg">
          <div className="editprofile-labels">
            <div className="row">
              <label>Nom:</label>
              <input type="text" name="name" value={name}/>
            </div>
            <div className="row">
              <label>Cognom:</label>
              <input type="text" name="name" value={surname}/>
            </div>
          </div>      
          <div className="edit-profile-picture">
          <AvatarImage ref={this.avatarImageElement}/>
            <div className="user-profile overlay">
              <label for="avatar" className="icon" title="User Profile">
                <i className="fa fa-camera"></i>
              </label>
              <input type="file" id="avatar" name="file" accept="image/png" onChange= {this.onChange}/>
            </div>
          </div>
        </div>
        <div>
          <Link className="profile-div" onclick="" to={"/perfil"}>
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
          </Link>          
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);