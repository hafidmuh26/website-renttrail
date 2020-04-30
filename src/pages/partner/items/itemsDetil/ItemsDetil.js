import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import DrawerNav from "../../../../components/drawer";
import styles from "./styles";

class ItemsDetil extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // method2

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Items Detil"}</h1>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ItemsDetil);
