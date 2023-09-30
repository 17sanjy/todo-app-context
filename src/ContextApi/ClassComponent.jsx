import React, { Component } from "react";
import store from "../store";


export default class ClassComponent extends Component {

    static contextType = store;
  render() {
    return (
      <div>
        {/* <p>
          Counter:
          {<store.Consumer>{(state) => state.fname}</store.Consumer>}
        </p> */}

        <p>
            Counter: {this.context.fname}
        </p>
      </div>
    );
  }
}
