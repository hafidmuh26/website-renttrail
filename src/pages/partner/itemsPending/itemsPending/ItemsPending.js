import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import DrawerNav from "../../../../components/drawer";
import styles from "./styles";

const isiTable = [
  [1, "Column 1", "Column 1", "code001"],
  [2, "Column 2", "Column 2", "code002"],
  [3, "Column 3", "Column 3", "code003"],
  [4, "Column 4", "Column 4", "code004"],
  [5, "Column 5", "Column 5", "code005"],
  [6, "Column 6", "Column 6", "code006"],
  [7, "Column 7", "Column 7", "code007"],
  [8, "Column 8", "Column 8", "code008"],
  [9, "Column 9", "Column 9", "code009"],
  [10, "Column 10", "Column 10", "code010"],
];
const columns = ["Column", "Column", "Column", "Column"];

class ItemsPending extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // method2

  render() {
    const { classes } = this.props;

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
            <h1>{"Items Pending General"}</h1>
            <MUIDataTable
              title="Items Pending"
              columns={columns}
              data={isiTable}
              options={optionsTable}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ItemsPending);
