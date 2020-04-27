import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/login">
        Rent Trail
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function ForgotPassword() {
  const classes = useStyles();

  onclick = () => {
    return <Link to="/home" />;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FilterHdrIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Rent Trail
        </Typography>
        <Typography component="h1" variant="h6">
          Forgot password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone"
            type="number"
            id="phone"
            autoComplete="phone"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={this.onclick}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/sigup" variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default ForgotPassword;
