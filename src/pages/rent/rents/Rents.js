import { Button, withStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import { connect } from "react-redux";
import RingLoader from "react-spinners/RingLoader";
import { findAll } from "../../../actions/rents";
import DrawerNav from "../../../components/drawer";
import { override, styles } from "./styles";

class Rents extends Component {
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
    const { data, params, total, error } = this.state;

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
      onRowClick: this.onRowClick,
      textLabels: {
        body: {
          noMatch: loading ? (
            <RingLoader css={override} size={50} color={"#57BCFF"} />
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
        label: "Item Name",
        name: "item.name",
      },
      {
        label: "Outlet",
        name: "item.partner.outlet",
      },
      {
        label: "Borrower",
        name: "user.name",
      },
      {
        label: "Date Start",
        name: "dateStart",
      },
      {
        label: "Date End",
        name: "dateEnd",
      },
      {
        name: "Detil",
        options: {
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button
                style={{ color: "white", background: "#57bcff" }}
                onClick={() => {
                  this.props.history.push(`rents/${tableMeta.rowData[0]}`);
                }}
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
            <h1>{"Rents"}</h1>
            <MUIDataTable
              columns={columns}
              data={!loading ? data : []}
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
  data: state.findRents.data,
  loading: state.findRents.loading,
  error: state.findRents.error,
});

const mapDispatchToProps = {
  findAll,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Rents)
);
