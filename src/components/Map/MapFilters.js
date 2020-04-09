import React, { Component } from "react";

class MapFilters extends Component {

    state = {
        radius: 1000,
        dayOfWeek: 1,
        shortNames: ["Dl.", "Dt.", "Dm.", "Dj.", "Dv.", "Ds.", "Dg."],
        longNames: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"]
    };

    componentDidMount() {
        this.setState({
            radius: 1000,
            dayOfWeek: 1,
            shortNames: ["Dl.", "Dt.", "Dm.", "Dj.", "Dv.", "Ds.", "Dg."],
            longNames: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"]
        });
    }

    async handleRadiusChange(ev) {
        ev.preventDefault();
        await this.setState({ radius: ev.target.value });
        this.props.onFiltersChange(this.state);
    };

    async handleDayChange(ev) {
        ev.preventDefault();
        let dayOfWeek = 0;
        const shortI = this.state.shortNames.findIndex((name) => name === ev.target.innerHTML);
        if (shortI !== -1) {
            dayOfWeek = shortI + 1;
        }
        const longI = this.state.longNames.findIndex((name) => name === ev.target.innerHTML);
        if (longI !== -1) {
            dayOfWeek = longI + 1;
        }
        await this.setState({ dayOfWeek: dayOfWeek });
        this.props.onFiltersChange(this.state);
    }

    render() {
        return (
            <div className="map-filters">
                <div className="map-filter-radius">
                    <label>Distància màxima: {this.state.radius} m</label>
                    <input type="range" min="1000" max="5000" value={this.state.radius} step="250" onChange={this.handleRadiusChange.bind(this)} />
                </div>
                <ul className="long-week-names">
                    { this.state.longNames.map((name, i) => {
                        return <li key={i} className={ this.state.dayOfWeek === i + 1 ? "active": null } onClick={this.handleDayChange.bind(this)}>{name}</li>
                    }) }
                </ul>
                <ul className="short-week-names">
                    { this.state.shortNames.map((name, i) => {
                        return <li key={i} className={ this.state.dayOfWeek === i + 1 ? "active": null } onClick={this.handleDayChange.bind(this)}>{name}</li>
                    }) }
                </ul>
            </div>
        );
    }
}

export default MapFilters
