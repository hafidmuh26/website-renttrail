import { Typography, withStyles, Card, Grid } from "@material-ui/core";
import React, { Component } from "react";
import DrawerNav from "../../components/drawer";
import styles from "./styles";
import ImageZoom from "react-medium-image-zoom";

class ErrorPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Card>
              <Grid container direction="row" justify="center" spacing={5}>
                <Grid item>
                  <h1 paragraph>Error {this.props.code} </h1>
                  <ImageZoom
                    image={{
                      src:
                        "https://cdn.iconscout.com/icon/premium/png-256-thumb/emot-bored-dull-face-emotion-emoji-35-56915.png",
                      style: { width: "135px" },
                    }}
                    zoomImage={{
                      src:
                        "https://cdn.iconscout.com/icon/premium/png-256-thumb/emot-bored-dull-face-emotion-emoji-35-56915.png",
                    }}
                  />
                  <Typography
                    align="center"
                    style={{
                      marginTop: 30,
                      marginBottom: 30,
                    }}
                  >
                    Page not fount
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ErrorPage);
