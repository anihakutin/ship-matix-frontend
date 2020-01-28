import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDataGrid from 'react-data-grid';
import { Box, Grid, Button } from 'grommet';
import { connect } from 'react-redux';
import { columns } from './ShippingSettings.js';

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
      }}>
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
      <Box
        flex={true}
      >
        <p>Set you shipping rules:</p>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={this.rowsCount()}
          minHeight={150}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          emptyRowsView={this.EmptyRowsView}
        />
        <br></br>
        <Button onClick={this.onButtonSaveClick} name="save_shipping_settings" label="Save Settings"/>
        <p>{this.props.messages.error || this.props.messages.success}</p>
      </Box>
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
