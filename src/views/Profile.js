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
    const { name, surname, avatarImg, _id } = this.props.user;

    return (
      <div id="viewport-with-navbar">
        <div id="profile-bg">
          <h1>
            {name} {surname}
          </h1>
          <img id="user-profile" src={avatarImg} alt="profile" />
        </div>
        <div id="other-features">
          <Link id="profile-btn-div" to={"/profile/edit-profile"}>
            <div id="profile-btn">
              <p>Edit Profile</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/edit-profile.svg"
                alt="edit-profile"
              ></img>
            </div>
          </Link>
          <div id="profile-btn-div">
            <div id="profile-btn" onClick={this.onClickLogout}>
              <p>Logout</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/logout.svg"
                alt="logout"
              ></img>
            </div>
          </div>
          <div id="profile-btn-div" style={{ borderBottom: "none" }}>
            <div id="profile-btn" onClick={this.onClickDelete}>
              <p style={{ color: "#ff0000" }}>Delete Account</p>
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
