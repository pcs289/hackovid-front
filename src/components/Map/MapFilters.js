import React, { Component } from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

class MapFilters extends Component {

    state = {
        radius: 1000,
        dayOfWeek: 1,
        dayOfWeekNames: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]
    };

    radiusChange$ = new Subject().pipe(debounceTime(300));
    radiusSubscription = null;

    componentDidMount() {
        console.log(this.props);
        this.setState({
            radius: 1000,
            dayOfWeek: 1,
            dayOfWeekNames: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]
        });

        this.radiusSubscription = this.radiusChange$.subscribe(async (debounced) => {
            await this.setState({ radius: debounced });
            this.props.onFiltersChange({ radius: this.state.radius, dayOfWeek: this.state.dayOfWeek });
        })
    }

    componentWillUnmount() {
        if (this.radiusSubscription) {
            this.radiusSubscription.unsubscribe();
        }
    }

    async handleRadiusChange(ev) {
        ev.persist();
        await this.setState({ radius: ev.target.value });
        this.radiusChange$.next(ev.target.value);
    };

    async handleDayChange(ev) {
        ev.preventDefault();
        const day = ev.target.attributes['alt'].value;
        let dayOfWeek = this.state.dayOfWeekNames.findIndex((name) => name === day);
        if (dayOfWeek === -1) {
            dayOfWeek = 0;
        }
        await this.setState({ dayOfWeek: dayOfWeek + 1 });
        this.props.onFiltersChange({ radius: this.state.radius, dayOfWeek: this.state.dayOfWeek });
    }


    /*<label>Distància màxima: {this.state.radius} m</label>
    <input type="range" min="1000" max="5000" value={this.state.radius} step="250" onChange={this.handleRadiusChange.bind(this)} />*/

    /*
    *   <input type="range" min="1000" max="5000" list="ranges" />
                    <datalist id="ranges">
                        <option label="1000" value="1000" />
                        <option label="2000" value="2000" />
                        <option label="3000" value="3000" />
                        <option label="4000" value="4000" />
                        <option label="5000" value="5000" />
                    </datalist>*/

    render() {
        return (
            <div className="map-filters">
                <div className="map-filter-radius">
                    <input type="range" min="1000" max="5000" step="250" list="ranges" onChange={this.handleRadiusChange.bind(this)} />
                    <datalist id="ranges">
                        <option label="1000" value="1000" />
                        <option label={`Distància: ${this.state.radius}`} value={`Distància: ${this.state.radius}`} />
                        <option label="5000" value="5000" />
                    </datalist>
                </div>
                <ul>
                    { this.state.dayOfWeekNames.map((name, i) => {
                        return <li key={i} className={ this.state.dayOfWeek === i + 1 ? "active": null } onClick={this.handleDayChange.bind(this)}><img alt={name} src={`/images/${name}.svg`} /></li>
                    }) }
                </ul>
            </div>
        );
    }
}

export default MapFilters
