import { css } from "@emotion/core";

const drawerWidth = 240;

export const styles = (theme) => ({
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
});

export const override = css`
  display: block;
  margin: auto;
`;
