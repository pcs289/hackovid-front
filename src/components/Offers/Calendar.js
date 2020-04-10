import 'date-fns';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

class MaterialUIPickers extends Component{

    state = {
        isoDate: new Date().toISOString().substr(0, 10),
    };

    handleDateChange = async day => {
        await this.setState({ isoDate: new Date(day).toISOString().substr(0, 10) });
        this.props.onChange(this.state.isoDate);
    };

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker
                  margin="normal"
                  format="dd/MM/yyyy"
                  onChange={this.handleDateChange.bind(this)}
                  value={this.state.isoDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

            </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

export default MaterialUIPickers
