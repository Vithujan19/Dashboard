//import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Height, LaptopWindowsTwoTone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LocalGasStation } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import Iconimg from './regi.png';
import LogoImg from './logotwo.png';
// import Header from './header.js';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30em',
    height: '40em',
    boxShadow: '0px 0px 12px 2px rgba(15, 15, 15, 0.2)',
  },
  avatar: {
    marginTop:'60px',
    margin: theme.spacing(1),
    backgroundColor: 'FFF',
    color: 'FFF',
    width: 50,
    height: 50,
  },
  form: {
    width: '80%',
    height: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    //marginLeft: '5px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

icn: {
  width: '50px',
    height: '50px',
}

  
  
}));

export default function SignIn() {
  const classes = useStyles();

  return (
     
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Header /> */}
   
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={LogoImg} className={classes.icn} />
        </Avatar> 
        
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item >
              <Link href="#" variant="body2">
                {"Have any trouble"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}
