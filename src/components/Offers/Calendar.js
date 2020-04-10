import 'date-fns';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class MaterialUIPickers extends Component{
  constructor(props) {
      super(props);
      this.state = {
        'selectedDate':''
      }
      this.handleDateChange = this.handleDateChange.bind(this);
  }

  async componentDidMount() {
  // The first commit of Material-UI
    var today = new Date();
    await this.setState({'selectedDate': today});
    await this.handleDateChange(today)
  }

  handleDateChange = async day => {
    await this.setState({'selectedDate':day});
    var formattedDay = format(day,'yyyy-MM-dd');
    this.props.onChange(formattedDay);
  };

  render() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label=""
              format="dd/MM/yyyy"
              value={this.state.selectedDate}
              onChange={this.handleDateChange.bind(this)}
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