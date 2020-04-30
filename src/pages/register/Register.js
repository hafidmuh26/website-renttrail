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

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // method2
  // ...
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
            {"Register"}
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
              id="phone"
              label="Phone"
              name="phone"
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
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {"Register"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/login" variant="body2">
                {"Login"}
              </Link>
            </Grid>
          </Grid>
        </Card>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="/login">
              {"Rent Trail"}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
