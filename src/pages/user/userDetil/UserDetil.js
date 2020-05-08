import {
  Avatar,
  Button,
  Card,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
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
        address: "",
        gender: "",
        name: "",
        nik: "",
        noHp: "",
        picture: "",
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
              </div>
              <Typography style={{ alignSelf: "center" }}>
                {"User Name"}
              </Typography>
              <Grid
                container
                direction={"row"}
                justify={"flex-start"}
                spacing={10}
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <Grid item>
                  <Typography>{"ID"}</Typography>
                  <Typography>{"Name"}</Typography>
                  <Typography>{"Email"}</Typography>
                  <Typography>{"NIK"}</Typography>
                  <Typography>{"Gender"}</Typography>
                  <Typography>{"Phone"}</Typography>
                  <Typography>{"Address"}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                  <Typography>{":"}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{detail.id}</Typography>
                  <Typography>{detail.name}</Typography>
                  <Typography>{detail.account.email}</Typography>
                  <Typography>{detail.nik}</Typography>
                  <Typography>{detail.gender}</Typography>
                  <Typography>{detail.noHp}</Typography>
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
    text: "KTP",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcP2g5kTwmc6NVjSaE2i8zU_etSlqlQobCjDhzYkYpWFdER7_M&usqp=CAU",
  },
];
