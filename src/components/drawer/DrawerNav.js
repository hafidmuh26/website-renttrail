import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  withStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import DrawerComp from "./DrawerComp";
import styles from "./styles";

class DrawerNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  render() {
    const { classes, container, theme, mobileOpen } = this.props;

    const openDrawer = () => {
      this.setState({
        mobileOpen: !mobileOpen,
      });
    };

    const closeDrawer = () => {
      this.setState({ mobileOpen: false });
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={openDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Rant Trail
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={closeDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <DrawerComp />
          </Drawer>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <DrawerComp />
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(DrawerNav);
