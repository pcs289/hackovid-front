import {Link} from "react-router-dom";
import React, {Component} from "react";


class OffersTab extends Component {
    render() {
        return (
            <div className="tab-container" id="page-name">
                <h1 style={{
                    backgroundColor: "#a4d96c",
                    color: "white",
                }}>Gestionar</h1>
                <div className="sections-nav">
                    <div className="nav-row">
                        <div className="nav-column" style={ this.props.tab === 'activities' ? { border: "1px", borderBottom: "2px solid #a4d96c" } : null}>
                            {this.props.tab === 'managed' ?
                                <div className="nav-column1">
                                    <Link to="/inscripcions" style={{textDecoration: "none"}}>
                                        <p>Inscripcions</p>
                                    </Link>
                                </div>
                                :
                                <div className="nav-column2">
                                    <p style={{color: "#a4d96c", fontWeight: 700}}>Inscripcions</p>
                                </div>
                            }
                        </div>
                        <div className="nav-column" style={ this.props.tab === 'managed' ? { border: "1px", borderBottom: "2px solid #a4d96c" } : null}>
                            {this.props.tab === 'activities' ?
                                <div className="nav-column1">
                                <Link to="/publicacions" style={{textDecoration: "none"}}>
                                <p>Publicacions</p>
                                </Link>
                                </div>
                                :
                                <div className="nav-column2">
                                <p style={{color: "#a4d96c", fontWeight: 700}}>Publicacions</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OffersTab;
