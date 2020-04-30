import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import DrawerNav from "../../../../components/drawer";
import styles from "./styles";

class ReportsSpecific extends Component {
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
            <h1>{"Reports Specific Partner"}</h1>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ReportsSpecific);
