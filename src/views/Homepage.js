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
            <div className="hp-section-1-left">
              <img
                src={"/images/wearing_a_mask_verdfluix.svg"}
                alt="Home amb la mascara"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Homepage);
