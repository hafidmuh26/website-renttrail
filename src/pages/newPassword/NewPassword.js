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

class NewPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //method2
  onclick = () => {
    return <Link to="/home" />;
  };

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
            {"Forgot password"}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              autoFocus={true}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirmPassword"
              autoFocus={true}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={this.onclick}
            >
              {"Submit"}
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login" variant="body2">
                  {"Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="/login">
              {"Rent Trail"}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>{" "}
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPassword);
