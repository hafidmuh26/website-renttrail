import { Button, Card, Grid, Typography, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteById, findById } from "../../../actions/rents";
import DrawerNav from "../../../components/drawer";
import styles from "./styles";

class UserDetil extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      detail: {
        id: match.params.id,
        totalPrice: "",
        dateStart: "",
        dateEnd: "",
        item: {
          name: "",
          partner: {
            outlet: "",
          },
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
            <h1>{"Detail Rent"}</h1>
            <Card className={classes.paper}>
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
                      {"Item"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.item.name}
                      {!detail.item.name && "Loading..."}
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
                      {detail.item.partner.outlet}
                      {!detail.item.partner.outlet && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Date Start"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.dateStart}
                      {!detail.dateStart && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Date End"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.dateEnd}
                      {!detail.dateEnd && "Loading..."}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid>
                    <Typography style={{ fontWeight: "bold" }}>
                      {"Total Price"}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {detail.totalPrice}
                      {!detail.totalPrice && "Loading..."}
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
  deleteData: state.deleteRentById.data,
  deleteError: state.deleteRentById.error,
  data: state.findRentById.data,
  error: state.findRentById.error,
  loading: state.findRentById.loading || state.deleteRentById.loading,
});

const mapDispatchToProps = {
  deleteById,
  findById,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(UserDetil)
);
