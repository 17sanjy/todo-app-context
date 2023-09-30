import React, { useContext } from "react";
import store from "../store";

export default function App() {
    // const state = useContext(store)
  return (
    <div>
      <p>
        Fname:
        {<store.Consumer>{(state) => state.counter}</store.Consumer>}
      </p>

      {/* <p>Counter:{state.counter} </p> */}
    </div>
  );
}
