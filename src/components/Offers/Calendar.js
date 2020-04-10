import 'date-fns';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
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
    await this.setState({'selectedDate':new Date('2014-08-18T21:11:54')});
  }

  handleDateChange = async day => {
    await this.setState({'selectedDate':day});
    this.props.onChange(day);
  };

  render() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label=""
              format="MM/dd/yyyy"
              defaultValue={this.state.selectedDate}
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