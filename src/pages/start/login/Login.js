import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginData } from "../../../actions/login";
import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: { email: "", password: "" },
      error: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, error } = this.props;

    if (data && prevProps.data !== data) {
      if (data?.email != null) {
      }
    } else if (prevProps.error !== error) {
      this.props.history.push("transaction");
      // this.setState({ error: error });
    }

    // if (prevProps.error !== error) {
    //   this.setState({ alertShow: true });
    // }
  }

  // hideAlert = () => {
  //   this.setState({ alertShow: false });
  // };

  onChange = (event) => {
    const { name, value } = event.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  };

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.loginData(this.state.form);
  //   console.log("login", this.state.form);
  // };

  render() {
    const { classes, loading } = this.props;
    const { form, error } = this.state;
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
          <form className={classes.form} noValidate onSubmit={this.onSubmit}>
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
              value={form.email}
              onChange={this.onChange}
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
              value={form.password}
              onChange={this.onChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // type="submit"
              href="partners"
              disabled={loading}
            >
              {"Login"}
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
              <Link color="inherit" to="/">
                {"Rent Trail"}
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Card>

        {/* <Snackbar
          open={this.state.alertShow}
          autoHideDuration={3000}
          onClose={this.hideAlert}
        >
          <Alert
            onClose={this.hideAlert}
            elevation={6}
            variant="filled"
            severity="error"
          >
            {error?.message}
          </Alert>
        </Snackbar> */}
      </Container>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.loginData.data,
//   loading: state.loginData.loading,
//   error: state.loginData.error,
// });

// const mapDispatchToProps = {
//   loginData,
// };

export default withStyles(styles, { withTheme: true })(Login);
