import { Button, Card, Grid, Typography, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import { connect } from "react-redux";
import { deleteById, findById } from "../../../actions/partners";
import DrawerNav from "../../../components/drawer";
import { items, outletImgs, requirements } from "./comp";
import styles from "./styles";

class PartnerDetil extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      detail: {
        id: match.params.id,
        name: "",
        owner: "",
        telp: "",
        address: "",
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

    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Partner Detil"}</h1>
            <Card className={classes.paper}>
              <div style={{ alignSelf: "center" }}>
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
              </div>
              <Typography style={{ alignSelf: "center" }}>
                {"Outlet Name"}
              </Typography>
              <Grid
                container
                direction={"row"}
                justify={"flex-start"}
                spacing={10}
                style={{ marginTop: 20, marginBottom: 5 }}
              >
                <Grid item>
                  <Typography>{"ID"}</Typography>
                  <Typography>{"Owner"}</Typography>
                  <Typography>{"Phone"}</Typography>
                  <Typography>{"Address"}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{detail.id}</Typography>
                  <Typography>{detail.name}</Typography>
                  <Typography>{detail.telp}</Typography>
                  <Typography>{detail.address}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={5}
                style={{ marginBottom: 15, marginLeft: 3 }}
              >
                <Button
                  variant="contained"
                  style={{ background: "red", color: "white" }}
                  onClick={this.onDelete}
                  disabled={loading}
                >
                  Delete
                </Button>
              </Grid>

              <Card className={classes.paper} variant="outlined">
                <h3>Pernyaratan</h3>
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

              <Card className={classes.paper} variant="outlined">
                <h3>Items</h3>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={5}
                >
                  {items.map((item, index) => (
                    <Grid item>
                      <Card variant="outlined" style={{ padding: 15 }}>
                        <ImageZoom
                          image={{
                            src: item.image,
                            style: { width: "135px" },
                          }}
                          zoomImage={{
                            src: item.image,
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
