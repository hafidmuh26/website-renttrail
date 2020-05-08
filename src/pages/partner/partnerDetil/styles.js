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
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
  img: {
    maxWidth: "20em",
    display: "block",
    margin: "0 auto",
  },
  backButton: {
    justifyContent: "default",
    background: "red",
    color: "white",
  },
});

export default styles;
