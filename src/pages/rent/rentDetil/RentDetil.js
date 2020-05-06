import { Avatar, Card, Grid, Typography, withStyles } from "@material-ui/core";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import React, { Component } from "react";
import DrawerNav from "../../../components/drawer";
import styles from "./styles";

class RentDetil extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // method2
  onClick = () => {
    console.log("report partner telah di click");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Ini Detil Rent ya"}</h1>
            <Card className={classes.paper}>
              <div style={{ alignSelf: "center" }}>
                <Avatar className={classes.avatar}>
                  <FilterHdrIcon />
                </Avatar>
              </div>
              <Typography style={{ alignSelf: "center" }}>
                {"Outlet Name"}
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
                  <Typography>{"ID Partner"}</Typography>
                  <Typography>{"Owner Name"}</Typography>
                  <Typography>{"xxxx-xxxx-xxxx-xxx"}</Typography>
                  <Typography>{"Jl. Merbalu No.747 RT20/RW30"}</Typography>
                </Grid>
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
                        <Avatar className={classes.avatar}>
                          <FilterHdrIcon />
                        </Avatar>
                        <Typography align="center" key={index}>
                          {image.text}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Card>

              <Card className={classes.paper} variant="outlined">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item>
                    <Card
                      variant="outlined"
                      style={{ padding: 15 }}
                      onClick={this.onClick}
                    >
                      <Avatar className={classes.avatar}>
                        <FilterHdrIcon />
                      </Avatar>
                      <Typography align="center">{"Report"}</Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Card>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RentDetil);

const images = [
  {
    text: "KTP",
  },
  {
    text: "Item 1",
  },
  {
    text: "Item 2",
  },
  {
    text: "Item 3",
  },
  {
    text: "Item 4",
  },
  {
    text: "Item 5",
  },
  {
    text: "Item 6",
  },
  {
    text: "Item 7",
  },
  {
    text: "Item 8",
  },
];
