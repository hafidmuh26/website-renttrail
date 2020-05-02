import { withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import { connect } from "react-redux";
import { findAll } from "../../../../actions/partners";
import DrawerNav from "../../../../components/drawer";
import styles from "./styles";

class Partners extends Component {
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
      error: null,
    };
  }

  componentDidMount() {
    this.props.findAll(this.state.params);
    // this.setState({ data: this.props.data });
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    const { params } = this.state;

    if (prevProps.data !== data) {
      this.setState({ data: data.list, total: data.total });
    }
    // if (prevState.param !== params) {
    //   this.props.findAll(this.state.params);
    // }
  }

  // method2

  render() {
    const { classes } = this.props;
    const { params, data, total } = this.state;
    console.log("yang ini", this.state.data);

    // const columns = ["No", "Outlet", "owner", "Phone", "Action"];

    const columns = [
      {
        name: "name",
        label: "Outlet",
      },
      {
        name: "telp",
        label: "Phone",
      },
      {
        name: "address",
        label: "alamat",
      },
    ];

    const optionsTable = {
      filter: false,
      viewColumns: false,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 20],
      selectableRowsHeader: false,
      selectableRows: false,
    };

    return (
      <div className={classes.root}>
        <DrawerNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <h1>{"Partners"}</h1>
            <MUIDataTable
              columns={columns}
              data={data}
              options={optionsTable}
            />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.findPartners.data,
});

const mapDispatchToProps = {
  findAll,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Partners)
);

// const isiTable = [
//   [
//     1,
//     "Outlet name 1",
//     "owner name 1",
//     "000000000001",
//     <Button
//       href={`/partners/{1}`}
//       style={{ color: "white", background: "black" }}
//     >
//       {"Detail"}
//     </Button>,
//   ],
// ];
