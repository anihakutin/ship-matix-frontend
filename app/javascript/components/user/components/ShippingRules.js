import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDataGrid from 'react-data-grid';
import { connect } from 'react-redux';
// const ReactDataGrid = require("react-data-grid");

import { columns } from './ShippingSettings.js';
// import { Editors } from 'react-data-grid-addons';


class ShippingRules extends Component {
  constructor() {
    super()
    this.state = {
      rows: []
    }
  }

  componentDidMount() {
      this.setState({rows: this.props.shippingRules.rules})
  }

  onGridRowsUpdated = ({fromRow, toRow, updated}) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = {
          ...rows[i],
          ...updated
        };
      }
      return {rows};
    });
  };

  onButtonSaveClick = () => {
    const shipping_settings = {
        last_update: "today",
        rules: [...this.state.rows ]
    }
    this.props.updateShippingRules(shipping_settings);
  }

  EmptyRowsView = () => {
    const message = "No data to show";
    return (<div
      style={{
          textAlign: "center",
          backgroundColor: "#ddd",
          padding: "100px"
      }}
            >
      <h3>{message}</h3>
    </div>);
  };

  rowsCount = () => {
    const {rows} = this.state
    if (!rows) {
      return 0
    } else {
      return rows.length
    }
  };

  LoadingMsg = () => {
    if (this.props.requesting) {
      return "Saving Settings..."
      } else {
        return ""
      }
  }

  render() {
    const {rows} = this.state

    return (
      <div>
        <p>Set you shipping rules:</p>

        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={this.rowsCount()}
          minHeight={100}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          emptyRowsView={this.EmptyRowsView}
        />
        <br></br>
        <p>Status: {this.LoadingMsg()}</p>
        <p>Result: {this.props.messages.error || this.props.messages.success}</p>
        <button onClick={this.onButtonSaveClick} name="save_shipping_settings">Save Settings</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.auth,
    requesting: state.auth.requesting
  }
}

export default connect(mapStateToProps)(ShippingRules);
