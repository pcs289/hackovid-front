import 'date-fns';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import caLocale from "date-fns/locale/ca";

class Clock extends Component{
  
    state = {
      'selectedHour':new Date().toISOString()
    }

  async componentDidMount() {
  // The first commit of Material-UI
    var now = new Date();
    await this.setState({'selectedHour': now});
    await this.handleHourChange(now);
  }

  handleHourChange = async hora => {
    await this.setState({'selectedHour':hora});

    var formattedHour = format(hora,'hh:mm:ss');
    this.props.onChange(formattedHour);
  };

  render() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}  locale={caLocale}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label=""
          value={this.state.selectedHour}
          onChange={this.handleHourChange.bind(this)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    );
  }
}
export default Clock
