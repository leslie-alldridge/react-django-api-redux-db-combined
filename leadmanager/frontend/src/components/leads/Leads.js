import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "proptypes";
import { getLeads } from "../../actions/leads";

export class Leads extends Component {
  render() {
    return (
      <div>
        <h1>Leads list</h1>
      </div>
    );
  }
}

export default connect(Leads);
