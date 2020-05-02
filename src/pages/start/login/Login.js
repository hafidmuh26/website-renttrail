import {
  withStyles,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Card,
} from "@material-ui/core";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Card className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FilterHdrIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {"Rent Trail"}
          </Typography>
          <Typography component="h1" variant="h6">
            {"Login"}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus={true}
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
            <Button
              href={"/home"}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {"Login"}
            </Button>
            <Typography align="center">or</Typography>
            <Button
              href={"/home"}
              fullWidth
              variant="contained"
              color="inherit"
              className={classes.submit}
            >
              <img
                src={require("./google.svg")}
                alt="googleIcon"
                className={classes.googleIcon}
              />
              {"Login with Google"}
            </Button>
            <Grid container className={classes.grid}>
              <Grid item xs>
                <Link to="/forgotPassword" variant="body2">
                  {"Forgot password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" to="/login">
                {"Rent Trail"}
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);
