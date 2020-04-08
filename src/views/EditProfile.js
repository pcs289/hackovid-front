import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Context/AuthContext";

class Profile extends Component {
  state = {
    img: "",
  };

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

  render() {
    const { name, surname, avatarImg } = this.props.user;

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
            <img src={avatarImg} alt="profile" className="user-profile"/>
            <div className="user-profile overlay">
              <label for="avatar" className="icon" title="User Profile">
                <i className="fa fa-camera"></i>
              </label>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
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