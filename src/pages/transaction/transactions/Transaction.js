import { Button, CircularProgress, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import { connect } from "react-redux";
import { findAll } from "../../../actions/transactions";
import DrawerNav from "../../../components/drawer";
import styles from "./styles";

class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        data: [],
        total: 0,
        search: { name: "" },
        page: 0,
        size: 5,
      },
      alertShow: false,
      error: null,
    };
  }

  reload() {
    this.props.findAll(this.state.params);
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, error } = this.props;
    const { params } = this.state;

    if (prevProps.data !== data) {
      this.setState({ data: data.list, total: data.total });
    }

    if (prevState.params !== params) {
      this.reload();
    } else if (error && prevProps.error !== error) {
      this.setState({ error: error });
    }

    if (prevProps.error !== error) {
      this.setState({ alertShow: true });
    }
  }

  // method2 build-in
  hideAlert = () => {
    this.setState({ alertShow: false });
  };

  onChangePage = (currentPage) => {
    const { params } = this.state;
    this.setState({ params: { ...params, page: currentPage } });
  };

  onChangeRowsPerPage = (numberofRows) => {
    const { params } = this.state;
    this.setState({ params: { ...params, size: numberofRows } });
  };

  onSearchChange = (SearchText) => {
    const { params } = this.state;
    this.setState({ params: { ...params, search: { name: SearchText } } });
  };

  onColumnSortChange = (changedColumn, direction) => {
    const { params } = this.state;
    const sort = direction === "descending" ? "desc" : "asc";
    this.setState({ params: { ...params, sort } });
  };

  render() {
    const { classes, loading } = this.props;
    const {
      // data,
      params,
      total,
      error,
    } = this.state;

    // TODO trouble in page, count;
    console.log("total nya adalah :", params.total);
    const options = {
      searchText: params.search.name,
      page: params.page,
      filter: false,
      count: total,
      rowsPerPage: params.size,
      rowsPerPageOptions: [5, 10, 20],
      serverSide: true,
      sort: false,
      viewColumns: false,
      selectableRowsHeader: false,
      selectableRows: false,
      onChangePage: this.onChangePage,
      onChangeRowsPerPage: this.onChangeRowsPerPage,
      onSearchChange: this.onSearchChange,
      onColumnSortChange: this.onColumnSortChange,
      textLabels: {
        body: {
          noMatch: loading ? (
            <CircularProgress />
          ) : (
            "Sorry, no matching records found"
          ),
        },
      },
    };

    const columns = [
      {
        name: "id",
      },
      {
        label: "Column 1",
      },
      {
        label: "Column 2",
      },
      {
        label: "Column 3",
      },
      {
        label: "Column 4",
      },
      {
        name: "Detil",
        options: {
          empty: true,
          customBodyRender: (tableMeta) => {
            return (
              <Button
                style={{ color: "white", background: "#57bcff" }}
                href="/transaction/id"
                // onClick={() => {
                //   this.props.history.push(
                //     `/partners/${tableMeta.tableData[0][0]}`
                //   );
                // }}
              >
                View
              </Button>
            );
          },
        },
      },
    ];

    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Ini Transaction ya"}</h1>
            <MUIDataTable
              columns={columns}
              // data={!loading ? data : []}
              data={datadmy}
              options={options}
            />

            <Snackbar
              open={this.state.alertShow}
              autoHideDuration={3000}
              onClose={this.hideAlert}
            >
              <Alert
                onClose={this.hideAlert}
                elevation={6}
                variant="filled"
                severity="error"
              >
                {error?.message}
              </Alert>
            </Snackbar>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.findTransactions.data,
  loading: state.findTransactions.loading,
  error: state.findTransactions.error,
});

const mapDispatchToProps = {
  findAll,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Transaction)
);

const datadmy = [
  ["1", "aaa", "bbb", "ccc", "ddd"],
  ["2", "aaa", "bbb", "ccc", "ddd"],
  ["3", "aaa", "bbb", "ccc", "ddd"],
  ["4", "aaa", "bbb", "ccc", "ddd"],
  ["5", "aaa", "bbb", "ccc", "ddd"],
];
