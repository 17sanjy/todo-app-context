import { createContext } from "react";

export const initialState = {
  todos: ["breakfast", "lunch", "dinner"],
  editData: {
    index: "",
    value: "",
  },
};

const store = createContext(initialState);

export default store;
