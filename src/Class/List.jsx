import React, { Component } from "react";
import store from "./store";

export default class List extends Component {
  static contextType = store;

//   componentDidMount() {
//     console.log(this.context);
//   }
  render() {
    return (
      <ul className="list-group mt-4">
        {this.context.todos.length > 0 ? (
          this.context.todos.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                <div>{item}</div>
                <div>
                  <button className="btn btn-warning mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </div>
              </li>
            );
          })
        ) : (
          <li className="list-group-item">No Todo</li>
        )}
      </ul>
    );
  }
}
