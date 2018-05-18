import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { DatePicker } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

type State = {
  open: boolean;
  controlledDate: Date;
};

class Index extends React.Component<WithStyles<'root'>, State> {
  state = {
    open: false,
    controlledDate: new Date(),
  };

  handleClose = () => {
    this.setState({
      open: false,

    });
  };

  handleClick = () => {
    this.setState({
      open: true,

    });
  };

  handleChange = (event: any, date: Date) => {
    this.setState({
      controlledDate: date,
    });
  };
  render() {
    return (
      <div className={this.props.classes.root}>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>{this.state.controlledDate.toDateString()}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>

        <MuiThemeProvider>
          <DatePicker
            hintText="Controlled Date Input"
            value={this.state.controlledDate}
            onChange={this.handleChange}
          />
        </MuiThemeProvider>

        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(Index));
