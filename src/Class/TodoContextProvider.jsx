import React, { Component } from "react";
import store, { initialState } from "./store";

export default class TodoContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["Breakfast", "Lunch", "Dinner"],
      editData: {
        index: "",
        value: "",
      },
    };
  }

  addTodo = (value) => {
    this.setState({
      todos: [...this.state.todos, value]
    })
  }

  render() {
    return (
      <store.Provider
        value={{
          ...initialState,
          todos: this.state.todos,
          editData: this.state.editData,
          addTodo: this.state.addTodo,
        }}
      >
        {this.props.children}
      </store.Provider>
    );
  }
}
