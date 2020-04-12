import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/ca";
import {Link} from "react-router-dom";

class CercaOffer extends Component{

    state = {
        displayRequestsDialog: false
    };

    constructor(props) {
        super(props);
        this.state = {
            displayRequestsDialog: false
        };
    }

    componentDidMount() {
        this.setState({
            displayRequestsDialog: false
        });
    }

    render() {
        const { offer } = this.props;
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
                        src={categoriaTipo[offer.type]}
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

                { offer.proximity && offer.username ?
                    <p style={{margin: "10px 0 10px 0"}}>
                        De {offer.username} a {offer.proximity.toFixed(1)} km
                    </p> : null
                }
                <div className="profile-stats">
                    <p><span className="btn" style={{padding: "10px",}}><Link to={'/contactar/' + offer._id}>Contacta</Link></span></p>
                </div>


            </div>
        );
    }
}

export default CercaOffer;
