const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "#57BCFF",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  head: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "bold",
  },
  list: {
    fontSize: 20,
    paddingLeft: 20,
    color: "white",
    backgroundColor: "#57BCFF",
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  link: {
    textDecoration: "none",
  },
});

export default styles;
