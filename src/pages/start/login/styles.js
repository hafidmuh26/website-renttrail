const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: 10,
    marginBottom: 10,
  },
  grid: {
    marginTop: 10,
  },
  googleIcon: {
    width: 30,
    marginRight: theme.spacing(3),
  },
});

export default styles;
