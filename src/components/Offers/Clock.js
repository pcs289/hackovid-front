import 'date-fns';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

class Clock extends Component{

  state = {
      isoTime: new Date().toISOString(),
  };

  handleTimeChange = async event => {
    await this.setState({'isoTime': event});
    this.props.onChange(this.state.isoTime);
  };

  render() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          value={this.state.isoTime}
          onChange={this.handleTimeChange.bind(this)}
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
