import { Button, Card, Grid, Typography, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import { connect } from "react-redux";
import { deleteById, findById } from "../../../actions/pendingItems";
import DrawerNav from "../../../components/drawer";
import styles from "./styles";

class ItemsPendingDetil extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      detail: {
        id: match.params.id,
        name: "",
        brand: "",
        age: "",
        price: "",
        status: "",
        partner: { name: "" },
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
            <h1>{"Detail Pending Item"}</h1>
            <Card className={classes.paper}>
              <Card className={classes.paper} variant="outlined">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={5}
                >
                  {items.map((image, index) => (
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
                      {"Brand"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.brand}
                      {!detail.brand && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Age"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.age}
                      {!detail.age && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Price"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.price}
                      {!detail.price && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Status"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.status}
                      {!detail.status && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Outlet"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.partner.outlet}
                      {!detail.partner.outlet && "Loading..."}
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
  deleteData: state.deletePendingItemById.data,
  deleteError: state.deletePendingItemById.error,
  data: state.findPendingItemById.data,
  error: state.findPendingItemById.error,
  loading:
    state.findPendingItemById.loading || state.deletePendingItemById.loading,
});

const mapDispatchToProps = {
  findById,
  deleteById,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(ItemsPendingDetil)
);

export const items = [
  {
    image:
      "https://jeramadventurestore.com/pictures/items/tas-gunung-tas-carrier-rei-keiraville-50l-1555_1.jpg",
  },
  {
    image:
      "https://jeramadventurestore.com/pictures/items/tas-gunung-tas-carrier-rei-keiraville-50l-1555_1.jpg",
  },
  {
    image:
      "https://jeramadventurestore.com/pictures/items/tas-gunung-tas-carrier-rei-keiraville-50l-1555_1.jpg",
  },
  {
    image:
      "https://jeramadventurestore.com/pictures/items/tas-gunung-tas-carrier-rei-keiraville-50l-1555_1.jpg",
  },
];
