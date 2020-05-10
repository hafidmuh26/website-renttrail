import { Button, Card, Grid, Typography, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import { connect } from "react-redux";
import { deleteById, findById } from "../../../actions/users";
import DrawerNav from "../../../components/drawer";
import styles from "./styles";

class UserDetil extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      detail: {
        id: match.params.id,
        name: "",
        nik: "",
        noHp: "",
        address: "",
        gender: "",
        account: {
          email: "",
        },
      },
      alertShow: false,
      error: null,
    };
  }

  componentDidMount() {
    const { detail } = this.state;
    if (detail.id) {
      this.props.findById(detail.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { deleteData, deleteError, data, error } = this.props;

    if (prevProps.data !== data) {
      this.setState({ detail: data });
    } else if (prevProps.deleteError !== deleteError) {
      this.setState({ error: deleteError });
    } else if (prevProps.error !== error) {
      this.setState({ error: error });
    } else if (deleteData && prevProps.deleteData !== deleteData) {
      this.props.history.goBack();
    }
  }

  onDelete = () => {
    const { detail } = this.state;
    this.props.deleteById(detail.id);
    return false;
  };

  hideAlert = () => {
    this.setState({ alertShow: false });
  };

  render() {
    const { classes, loading } = this.props;
    const { detail, error } = this.state;

    console.log("yang ini detail", detail);

    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Detail User"}</h1>
            <Card className={classes.paper}>
              <div style={{ alignSelf: "center" }}>
                <ImageZoom
                  image={{
                    src: "http://getdrawings.com/free-icon-bw/human-icon-1.png",
                    style: { width: "135px" },
                  }}
                  zoomImage={{
                    src: "http://getdrawings.com/free-icon-bw/human-icon-1.png",
                  }}
                />
                <Typography align="center">
                  {detail.name}
                  {!detail.name && "Loading..."}
                </Typography>
              </div>

              <Grid
                container
                item
                direction={"row"}
                justify={"flex-start"}
                spacing={10}
                style={{ marginTop: 20, marginBottom: 5 }}
              >
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"ID"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>{detail.id}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"NIK"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.nik}
                      {!detail.nik && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Name"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.name}
                      {!detail.name && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Gender"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.gender}
                      {!detail.gender && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Email"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.account.email}
                      {!detail.account.email && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Phone"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.noHp}
                      {!detail.noHp && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Address"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.address}
                      {!detail.address && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Action"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.onDelete}
                      disabled={loading}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Card className={classes.paper} variant="outlined">
                <h3>requirements</h3>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={5}
                >
                  {images.map((image, index) => (
                    <Grid item>
                      <Card variant="outlined" style={{ padding: 15 }}>
                        <ImageZoom
                          image={{
                            src: image.url,
                            style: { width: "135px" },
                          }}
                          zoomImage={{
                            src: image.url,
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Card>

            <Snackbar
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
            </Snackbar>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deleteData: state.deleteUserById.data,
  deleteError: state.deleteUserById.error,
  data: state.findUserById.data,
  error: state.findUserById.error,
  loading: state.findUserById.loading || state.deleteUserById.loading,
});

const mapDispatchToProps = {
  deleteById,
  findById,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(UserDetil)
);

const images = [
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcP2g5kTwmc6NVjSaE2i8zU_etSlqlQobCjDhzYkYpWFdER7_M&usqp=CAU",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcP2g5kTwmc6NVjSaE2i8zU_etSlqlQobCjDhzYkYpWFdER7_M&usqp=CAU",
  },
];
