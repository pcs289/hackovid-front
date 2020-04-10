import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/ca";

import { Link } from "react-router-dom";

class OfferManaged extends Component {
  render() {
    const { offer } = this.props;
    const categoriaTipo = ["Aliments", "Tallers", "Salut", "Altres"];

    return (
      <div className="anunci-panell">
        <h3 className="post-title">{offer.title}</h3>
        <p
          style={{
            color: "#989898"
          }}
        >
          {offer.proximity.toFixed(1)} km | |
          <Moment format="LLL" locale="ca">
            {offer.startDate}
          </Moment>{" "}
          fins les{" "}
          <Moment format="LT" locale="ca">
            {offer.endDate}
          </Moment>{" "}
          | {categoriaTipo[offer.type + 1]}
        </p>

        <p
          style={{
            margin: "10px 0 10px 0"
          }}
        >
          {offer.description}
        </p>
        <Link
          to="/contactar/123123"
          style={{
            textDecoration: "none"
          }}
        >
          <span
            className="btn"
            style={{
              padding: "10px"
            }}
          >
            Contactar
          </span>
        </Link>
      </div>
    );
  }
}

export default OfferManaged;
