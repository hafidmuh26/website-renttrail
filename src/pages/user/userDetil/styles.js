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
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    padding: 30,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
});

export default styles;
