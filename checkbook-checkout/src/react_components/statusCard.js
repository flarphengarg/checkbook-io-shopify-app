import React from 'react';
import reactDom from 'react-dom';
import ProgBar from './ProgressBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/*var email = App.queryParams.email;
var status = App.state.status;
var cost = App.queryParams.cost;
var invoice = App.state.invoice_id;*/

const useStyles = makeStyles(theme => ({
  root: {
    color: 'rgb(240,240,240)',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(20),
      height: theme.spacing(30),
      padding: theme.spacing(20),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4}> 
        <ProgBar></ProgBar>
      </Paper>
    </div>
  );
}