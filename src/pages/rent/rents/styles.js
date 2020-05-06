const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  button: {
    backgound: "black",
    color: "white",
  },
});

export default styles;
