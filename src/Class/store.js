import { createContext } from "react";

export const initialState = {
  todos: ["Breakfast", "Lunch", "Dinner"],
  editData: {
    index: "",
    value: "",
  },
  addTodo: (value) => {},
  deleteTodo: (value) => {},
  editTodo: (index, value) => {},
  updateTodo: (index, value) => {},
};

const store = createContext(initialState);

export default store;
