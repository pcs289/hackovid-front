import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage"

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
        <div className="profile-bg">
          <h1>
            {name} {surname}
          </h1>
          <AvatarImage avatarImg={avatarImg} />
        </div>
        <div>
          <Link className="profile-div" to={"/perfil/preferencies"}>
            <div id="profile-btn">
              <p>Editar Preferencies</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/edit-profile.svg"
                alt="editar-perfil"
              ></img>
            </div>
          </Link>
          <Link className="profile-div" to={"/perfil/editar"}>
            <div id="profile-btn">
              <p>Editar Perfil</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/edit-profile.svg"
                alt="editar-perfil"
              ></img>
            </div>
          </Link>
          <div className="profile-div">
            <div id="profile-btn" onClick={this.onClickLogout}>
              <p>Tancar sessió</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/logout.svg"
                alt="logout"
              ></img>
            </div>
          </div>
          <div className="profile-div" style={{ borderBottom: "none" }}>
            <div id="profile-btn" onClick={this.onClickDelete}>
              <p style={{ color: "#ff0000" }}>Eliminar el compte</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/cancel-button.svg"
                alt="delete"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
