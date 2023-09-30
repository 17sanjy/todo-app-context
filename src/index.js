import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Class/App";  //for class todo
// import TodoContextProvider from "./Class/TodoContextProvider";  //for class provider
// import App from "./Functional/App";  //for functional todo
// import TodoContextProvider from "./Functional/TodoContextProvider";  //for functional provider
// import { initialState } from "./Functional/store"; //for functional initialState from store
// import App from './ContextApi/App'
import store from "./store";
// import { initialState } from "./store";
// import ClassComponent from "./ContextApi/ClassComponent";
import App from "./todoFunction/App";
import ContextProvider from "./todoFunction/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
