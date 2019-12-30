import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logo } from "../img/logo1.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title2: {
	 color: "#fffff"
  },
  toolbar: {
	  minHeight: '40px',
	  backgroundColor: "#993300"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} >
          <Typography variant="h6" className={classes.title2}>
            SV COLLEGES2
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}