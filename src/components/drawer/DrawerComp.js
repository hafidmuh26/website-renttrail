import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import styles from "./styles";

class DrawerComp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.toolbar}>
          <Typography className={classes.head}>Admin</Typography>
        </div>

        <List>
          <Link to="/home" className={classes.link}>
            <ListItem className={classes.list}>
              <HomeIcon className={classes.iconss} />
              {"Home"}
            </ListItem>
          </Link>
        </List>

        <List>
          <ListItem className={classes.list}>
            <PersonIcon className={classes.iconss} />
            {"Partner"}
          </ListItem>
          {partnerNavs.map((nav, index) => (
            <Link to={nav.path} key={index} className={classes.link}>
              <ListItem button className={classes.linkList}>
                <ListItemText primary={nav.text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <List>
          <ListItem className={classes.list}>
            <PeopleAltIcon className={classes.icon} />
            {"User"}
          </ListItem>
          {userNavs.map((nav, index) => (
            <Link to={nav.path} key={index} className={classes.link}>
              <ListItem button className={classes.linkList}>
                <ListItemText primary={nav.text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <List>
          <Link to="/login" className={classes.link}>
            <ListItem className={classes.list}>
              <PeopleAltIcon className={classes.icon} />
              {"Logout"}
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

const partnerNavs = [
  {
    path: "/partners",
    text: "Partners",
  },
  {
    path: "/partners/items-pending",
    text: "Items Pending",
  },
  {
    path: "/partners/items",
    text: "Items",
  },
  {
    path: "/partners/reports",
    text: "Report",
  },
];

const userNavs = [
  {
    path: "/users",
    text: "Users",
  },
  {
    path: "/users/reports",
    text: "Report",
  },
];

export default withStyles(styles, { withTheme: true })(DrawerComp);
