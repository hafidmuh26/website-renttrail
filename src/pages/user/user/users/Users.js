import { withStyles, Button } from "@material-ui/core";
import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import DrawerNav from "../../../../components/drawer";
import styles from "./styles";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // method2

  render() {
    const { classes } = this.props;

    const columns = ["No", "Name", "Email", "Gender", "Phone", "Action"];

    const optionsTable = {
      filter: false,
      viewColumns: false,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 20],
      selectableRowsHeader: false,
      selectableRows: false,
      onRowClick: this.onOnan,
    };

    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Users"}</h1>
            <MUIDataTable
              title="Users"
              columns={columns}
              data={isiTable}
              options={optionsTable}
              key={1}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Users);

const isiTable = [
  [
    1,
    "User 1",
    "Email user 1",
    "Male",
    "0000000000000987",
    <Button
      href={`/partners/{1}`}
      style={{ color: "white", background: "black" }}
    >
      {"Detail"}
    </Button>,
  ],
];
