import React, {Component} from "react";

class OfferManaged extends Component{

    render() {
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
                }}>Classes de Català amb la Mañá</h3>
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
                    Search for the keywords to learn more about each warning. To
                    ignore, add // eslint-disable-next-line to the line before.
                </p>
                <div className="profile-stats">
                    <p>
                <span
                    className="btn"
                    style={{
                        padding: "10px",
                    }}
                >
                  Editar
                </span>
                    </p>
                    <p>
                        <span>Sol·licituds</span>
                        <br />
                        (0)
                    </p>
                </div>
            </div>
        );
    }
}

export default OfferManaged;
