import { Card, Grid, Typography, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import { connect } from "react-redux";
import { deleteById, findById } from "../../../actions/partners";
import DrawerNav from "../../../components/drawer";
import styles from "./styles";

class ItemsPendingDetil extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      detail: {
        id: match.params.id,
        age: "",
        brand: "",
        name: "",
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
            <h1>{"Pending Item Detil"}</h1>
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
                direction={"row"}
                justify={"flex-start"}
                spacing={10}
                style={{ marginTop: 20, marginBottom: 5 }}
              >
                <Grid item>
                  <Typography>{"ID"}</Typography>
                  <Typography>{"Name"}</Typography>
                  <Typography>{"Brand"}</Typography>
                  <Typography>{"Status"}</Typography>
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
