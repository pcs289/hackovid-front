import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/ca";

class OfferManaged extends Component{

    render() {
        const { offer, requests, edit, contact} = this.props;
        const categoriaTipo = [
            "../../images/food-delivery.svg",
            "../../images/elearning.svg",
            "../../images/cross.svg",
            "../../images/toilet-paper.svg"
        ];
        return (
            <div className="anunci-panell" style={{
                backgroundColor: "#EAEAEA",
                margin: "3%",
                padding: "5%",
                borderRadius: "7px",
            }}>
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
                        textAlign: "start",
                        margin: "10px 0 10px 0",
                        fontSize: "12px",
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
                <div className="profile-stats">

                    { contact ?
                        <p><span className="btn" style={{padding: "10px",}}><Link to={'/contactar/' + offer._id}>Contacta</Link></span></p>
                        : null }

                    { edit ?
                        <p><span className="btn" style={{padding: "10px",}}>Editar</span></p>
                        : null }

                    { requests ?
                            <p><span>Sol·licituds</span><br />({requests})</p>
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default OfferManaged;
