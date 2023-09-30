import React, { useState } from "react";
import store, { initialState } from "./store";

export default function ContextProvider(props) {
  let [todos, setTodos] = useState(["breakfast", "lunch", "dinner", "snacks"]);
  let [editData, setEditData] = useState({
    index: "",
    value: "",
  });

  const addTodo = (value) => {
    setTodos([...todos, value]);
  };

  const deleteTodo = (value) => {
    let filter = todos.filter((t) => t !== value);
    setTodos([...filter]);
  };

  const editTodo = (index, value) => {
    setEditData({
      index,
      value,
    });
  };

  const updateTodo = (index, value) => {
    let mapedTodo = todos.map((todo, ind) => {
      if (index === ind) return value;

      return todo;
    });
    setTodos([...mapedTodo]);
    setEditData({
        index:'',
        value:''
    })
  };

  return (
    <store.Provider
      value={{
        ...initialState,
        todos,
        editData,
        editTodo,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {props.children}
    </store.Provider>
  );
}
