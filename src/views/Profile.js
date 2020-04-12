import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Context/AuthContext";
import AvatarImage from "../components/AvatarImage"
import DeleteAccountDialog from "../components/dialogs/DeleteAccountDialog";

class Profile extends Component {
  state = {
    img: "",
    deleteDialog: false
  };

  onClickLogout = async () => {
    try {
      this.props.handleLogout().then((e) => {
        if(e.name !== 'Error') {
          toast.success(`Has tancat la sessió correctament`);
        } else {
          toast.warn(`Hi ha hagut un error`);
        }
      });
    } catch (error) {
      console.error("Error while logout ");
    }
  };

  onClickDelete = async () => {
    try {
      this.props.handleUserDelete().then((e) => {
        if(e.name !== 'Error') {
          toast.success("Compte eliminat correctament");
        } else {
          toast.warn(`Hi ha hagut un error`);
        }
      }).catch((e) => {
        console.log(e);
        toast.error("Hi ha hagut un error");
      });
    } catch (error) {
      console.log(error);
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
          <div className="profile-div session-state">
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
          <div className="profile-div session-state" style={{ borderBottom: "none" }}>
            <div id="profile-btn" onClick={() => this.setState({deleteDialog: !this.state.deleteDialog})}>
              <p style={{ color: "#ff0000" }}>Eliminar el compte</p>
            </div>
            <div>
              <img
                id="category-img"
                src="../../images/cancel-button.svg"
                alt="delete"
              ></img>
            </div>
            <DeleteAccountDialog display={ this.state.deleteDialog }
                                 onDeleteConfirmed={this.onClickDelete}
                                 onClose={() => this.setState({deleteDialog: !this.state.deleteDialog})}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
