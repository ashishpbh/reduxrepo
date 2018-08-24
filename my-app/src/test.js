import React, { Component } from "react";
import Store from "./Store";
import { connect } from "react-redux";
import Reducer from "./reducer";
import Reducer1 from "./reducer1";
class test extends Component {
  //   ShowName = () => {
  //     Store.dispatch({ type: "ShowName", Name: "Sonu", Address: "pbh" });
  //   };
  handleChange = e => {
    Store.dispatch({ type: "ShowName", val: e.target.value });
  };

  render() {
    return (
      <center>
        <hr />
        <div>
          <form className="Message">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="write a message"
              value={this.props.Data}
            />
          </form>
          {/*<button onClick={this.props.onClickName}>Click Me</button>*/}
          <h1>Name is : {this.props.Data}</h1>
          <h2>{this.props.data2}</h2>
          <hr />
          <button onClick={() => this.props.storeResult(this.props.Data)}>
            Store Result
          </button>

          <ul>
            {this.props.stored.map(items => (
              <li
                key={items.id}
                onClick={() => this.props.deleteResult(items.id)}
              >
                {items.value}

                <hr />
              </li>
            ))}
          </ul>
        </div>
      </center>
    );
  }
}
// its a  function that accept state of redux as a parameter
function mapStateToProps(state) {
  console.log(state);
  return {
    Data: state.res.name,
    data2: state.res.name2,
    stored: state.res2.result
  };
}

const dispatchAction = dispatch => {
  return {
    storeResult: result => dispatch({ type: "StoreResult", result: result }),
    deleteResult: id => dispatch({ type: "delResult", elemId: id }),
    handleEdit: id => dispatch({ type: "editResult", id: id })
  };
};

// connect tell us which slice of state we are interest in this component
export default connect(
  mapStateToProps,
  dispatchAction
)(test);
