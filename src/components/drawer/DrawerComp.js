import { List, ListItem, Typography, withStyles } from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

class DrawerComp extends Component {
  render() {
    const { classes } = this.props;

    const Navs = [
      {
        path: "/partners",
        text: "Partner",
        icon: <PersonIcon className={classes.icon} />,
      },
      {
        path: "/users",
        text: "User",
        icon: <PeopleAltIcon className={classes.icon} />,
      },
      {
        path: "/pendings",
        text: "Pending Item",
        icon: <ScheduleIcon className={classes.icon} />,
      },
      {
        path: "/items",
        text: "Item",
        icon: <CheckCircleOutlineIcon className={classes.icon} />,
      },
      {
        path: "/rents",
        text: "Rent",
        icon: <AutorenewIcon className={classes.icon} />,
      },
      {
        path: "/",
        text: "Logout",
        icon: <ExitToAppIcon className={classes.icon} />,
      },
    ];

    return (
      <div>
        <div className={classes.toolbar}>
          <Typography className={classes.head}>Admin</Typography>
        </div>

        {Navs.map((nav, index) => (
          <List key={index}>
            <Link to={nav.path} className={classes.link}>
              <ListItem className={classes.list}>
                {nav.icon}
                {nav.text}
              </ListItem>
            </Link>
          </List>
        ))}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerComp);
