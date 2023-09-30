import { createContext } from "react";

export const initialState = {
    counter: 10,
    fname: 'sanjay'
}

let store = createContext(initialState);
export default store;