import React, {Component} from "react";
import {Link} from "react-router-dom";

class OfferManaged extends Component{

    render() {
        const { offer, requests, edit, contact} = this.props;
        console.log(offer);
        return (
            <div className="anunci-panell" style={{
                backgroundColor: "#EAEAEA",
                margin: "3%",
                padding: "5%",
                borderRadius: "7px",
            }}>
                <h3 className="post-title" style={{
                    textAlign: "start",
                    margin: "0",
                    fontSize: "16px",
                }}>{offer.title}</h3>
                <p style={{
                    textAlign: "start",
                    fontSize: "12px",
                    margin: "0",
                    color: "#989898",
                }}
                >
                    0.3 km | 17:30h | 22/04 | Educació
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
