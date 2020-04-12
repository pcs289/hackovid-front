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

    async componentDidMount() {
        const {radius, dayOfWeek} = this.checkQueryFilter();
        await this.setState({
            radius: radius || 1000,
            dayOfWeek: dayOfWeek || 1,
            dayOfWeekNames: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]
        });

        if (radius && dayOfWeek) {
            this.props.onFiltersChange({ radius: this.state.radius, dayOfWeek: this.state.dayOfWeek });
        }

        this.radiusSubscription = this.radiusChange$.subscribe(async (debounced) => {
            this.addQuery('r', debounced);
            this.props.onFiltersChange({ radius: this.state.radius, dayOfWeek: this.state.dayOfWeek });
        })
    }

    checkQueryFilter() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const radius = parseInt(searchParams.get('r')) || null;
        const dayOfWeek = parseInt(searchParams.get('dow')) || null;
        return { radius, dayOfWeek };
    }

    addQuery(key, value) {
        let pathname = this.props.location.pathname;
        let searchParams = new URLSearchParams(this.props.location.search);
        searchParams.set(key, value);
        this.props.history.push({
            pathname: pathname,
            search: searchParams.toString()
        });
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
        const day = ev.target.attributes['alt'] ? ev.target.attributes['alt'].value : 'dilluns';
        let dayOfWeek = this.state.dayOfWeekNames.findIndex((name) => name === day);
        if (dayOfWeek === -1) {
            dayOfWeek = 0;
        }
        await this.setState({ dayOfWeek: dayOfWeek + 1 });
        this.addQuery('dow', dayOfWeek + 1);
        this.props.onFiltersChange({ radius: this.state.radius, dayOfWeek: this.state.dayOfWeek });
    }

    render() {
        return (
            <div className="map-filters">
                <div className="map-filter-radius">
                    <input type="range" min="1000" max="5000" step="250" list="ranges" value={this.state.radius} onChange={this.handleRadiusChange.bind(this)} />
                    <datalist id="ranges">
                        <option label="1000" value="1000" />
                        <option label={`Distància: ${this.state.radius}m`} value={`Distància: ${this.state.radius}`} />
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
