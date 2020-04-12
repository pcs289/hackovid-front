import React, {Component} from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";

class RequestManaged extends Component {
    render() {
        const { request } = this.props;
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
                        src={categoriaTipo[request.offer.type]}
                        alt="altres"
                    />
                    <h3
                        className="post-title"
                        style={{
                            margin: "0 5px "
                        }}
                    >
                        {request.offer.title}
                    </h3>
                </div>
                <p
                    style={{
                        color: "#989898"
                    }}
                >
                    <Moment format="LLL" locale="ca">
                        {request.created_at}
                    </Moment>
                </p>

                <p
                    style={{
                        textAlign: "start",
                        margin: "10px 0 10px 0",
                        fontSize: "12px",
                    }}
                >
                    {request.comments}
                </p>
                <div className="profile-stats">
                    <p><span className="btn" style={{padding: "10px",}}><Link to={'/contactar/' + request.offer._id}>Contacta</Link></span></p>
                </div>
            </div>
        );
    }
}

export default RequestManaged;
