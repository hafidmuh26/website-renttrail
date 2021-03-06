import { Button, Card, Grid, Typography, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import { connect } from "react-redux";
import { deleteById, findById } from "../../../actions/partners";
import DrawerNav from "../../../components/drawer";
import { outletImgs, requirements } from "./comp";
import styles from "./styles";

class PartnerDetil extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      detail: {
        id: match.params.id,
        owner: "",
        telp: "",
        address: "",
        account: { email: "" },
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
    console.log("yang ini detail : ", detail);

    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Detail Partner"}</h1>
            <Card className={classes.paper}>
              <div
                style={{
                  alignSelf: "center",
                }}
              >
                <ImageZoom
                  image={{
                    src:
                      "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/market_stand.png",
                    style: { width: "135px" },
                  }}
                  zoomImage={{
                    src:
                      "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/market_stand.png",
                  }}
                />
                <Typography align="center">
                  {detail.owner}
                  {!detail.owner && "Loading..."}
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
                  <Grid style={{ marginRight: 90 }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Owner"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.owner}
                      {!detail.owner && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid style={{ marginRight: 90 }}>
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
                      {detail.telp}
                      {!detail.telp && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid style={{ marginRight: 100 }}>
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
                  <Grid style={{ marginRight: 100 }}>
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
                  {requirements.map((image, index) => (
                    <Grid item>
                      <Card variant="outlined" style={{ padding: 15 }}>
                        <ImageZoom
                          image={{
                            src: image.image,
                            style: { width: "135px" },
                          }}
                          zoomImage={{
                            src: image.image,
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Card>

              <Card className={classes.paper} variant="outlined">
                <h3>Outlet Images</h3>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={5}
                >
                  {outletImgs.map((outletImg, index) => (
                    <Grid item>
                      <Card variant="outlined" style={{ padding: 15 }}>
                        <ImageZoom
                          image={{
                            src: outletImg.image,
                            style: { width: "135px" },
                          }}
                          zoomImage={{
                            src: outletImg.image,
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
  deleteData: state.deletePartnerById.data,
  deleteError: state.deletePartnerById.error,
  data: state.findPartnerById.data,
  error: state.findPartnerById.error,
  loading: state.findPartnerById.loading || state.deletePartnerById.loading,
});

const mapDispatchToProps = {
  findById,
  deleteById,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(PartnerDetil)
);
