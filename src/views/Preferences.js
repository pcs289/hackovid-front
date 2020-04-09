import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";


class Preferences extends Component {
  render() {
    return (
      <div className="viewport-with-navbar">
        Editar les meves preferencies
      </div>
    );
  }
}

export default withAuth(Preferences);
