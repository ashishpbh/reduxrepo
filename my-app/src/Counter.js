import React, { Component } from "react";
import { connect } from "react-redux";
class Counter extends Component {
  state = {
    count: 4
  };
  render() {
    return <p>{this.props.ctr}</p>;
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.count
  };
};

export default connect(mapStateToProps)(Counter);
