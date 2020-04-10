import React, { Component } from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

class DayFilter extends Component {

    state = {
        dayOfWeek: 1,
        dayOfWeekNames: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]
    };

    componentDidMount() {
        this.setState({
            dayOfWeek: 1,
            dayOfWeekNames: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]
        });
    }

    async handleDayChange(ev) {
        ev.preventDefault();
        const day = ev.target.attributes['alt'].value;
        let dayOfWeek = this.state.dayOfWeekNames.findIndex((name) => name === day);
        if (dayOfWeek === -1) {
            dayOfWeek = 0;
        }
        await this.setState({ dayOfWeek: dayOfWeek + 1 });
    }

    render() {
        return (
            <div className="map-filters">
                <ul>
                    { this.state.dayOfWeekNames.map((name, i) => {
                        return <li key={i} className={ this.state.dayOfWeek === i + 1 ? "active": null } onClick={this.handleDayChange.bind(this)}><img alt={name} src={`/images/${name}.svg`} /></li>
                    }) }
                </ul>
            </div>
        );
    }
}

export default DayFilter