import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

class Homepage extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        <div class="home_banner">
          <div className="hp-section-1">
            <div className="hp-section-1-right">
              <h1>Col·labora amb els teus veïns!</h1>
              <h2 id="headline">A què estas esperant?</h2>
            </div>
            <div className="signup-mobile">
              <Link className="btn-topbar" to="/entra"> Iniciar Sessió </Link>
              <Link className="btn-topbar" to="/registre"> Registre </Link>
            </div>
            <div className="hp-section-1-left">
              <img
                src={"/images/wearing_a_mask_verdfluix.svg"}
                alt="Home amb la mascara"
              />
              <img
                src={"/images/wearing_a_mask.svg"}
                alt="Dona amb la mascara"
              />
              <img src={"/images/coughing_.svg"} alt="Home amb tos" />
              <img src={"/images/reading_a_book.svg"} alt="Home amb tos" />
              <img src={"/images/washing_hands.svg"} alt="Home amb tos" />
              <img src={"/images/family_meal_.svg"} alt="Home amb tos" />
              <img src={"/images/online_shopping_.svg"} alt="Home amb tos" />
              <img src={"/images/user_status.svg"} alt="Home amb tos" />
              <img src={"/images/video_call.svg"} alt="Home amb tos" />
              <img src={"/images/group_video_call.svg"} alt="Home amb tos" />
              <img src={"/images/online_presentation.svg"} alt="Home amb tos" />
              <img
                src={"/images/online_team_meeting_.svg"}
                alt="Home amb tos"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Homepage);
