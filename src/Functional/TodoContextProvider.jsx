import React, { useState, useContext } from 'react';
import TodoContext, { initialState } from './store';

export default function TodoContextProvider(props) {
  const [todos, setTodos] = useState(initialState.todos);
  const [editData, setEditData] = useState(initialState.editData);

  const addTodo = (value) => {
    setTodos([...todos, value]);
  };

  const deleteTodo = (value) => {
    const filteredTodos = todos.filter((todo) => todo !== value);
    setTodos(filteredTodos);
  };

  const editTodo = (index, value) => {
    setEditData({
      index:index,
      value:value
    });
  };

  const updateTodo = (index, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
    setEditData(initialState.editData);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        editData,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
