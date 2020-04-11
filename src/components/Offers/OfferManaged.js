import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/ca";

import { Link } from "react-router-dom";

class OfferManaged extends Component {
  render() {
    const { offer } = this.props;
    const categoriaTipo = [
      "../../images/food-delivery.svg",
      "../../images/elearning.svg",
      "../../images/cross.svg",
      "../../images/toilet-paper.svg"
    ];

    return (
      <div className="anunci-panell">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start"
          }}
        >
          <img
            className="badge-img"
            src={categoriaTipo[offer.type + 1]}
            alt="altres"
          />
          <h3
            className="post-title"
            style={{
              margin: "0 5px "
            }}
          >
            {offer.title}
          </h3>
        </div>
        <p
          style={{
            color: "#989898"
          }}
        >
          <Moment format="LLL" locale="ca">
            {offer.startDate}
          </Moment>{" "}
          fins les{" "}
          <Moment format="LT" locale="ca">
            {offer.endDate}
          </Moment>
        </p>
        <p
          style={{
            margin: "10px 0 10px 0"
          }}
        >
          {offer.description}
        </p>
        <p
          style={{
            margin: "10px 0 10px 0"
          }}
        >
          De {offer.creator} a {offer.proximity.toFixed(1)} km
        </p>
        <Link
          to={`/contactar/${offer._id}`}
          offer={offer}
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
