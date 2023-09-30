import React, { useContext, useEffect, useState } from "react";
import store from "./store";

export default function Input() {
  let { addTodo, editData, updateTodo } = useContext(store);
  let [todo, setTodo] = useState("");

  const inputChange = (event) => {
    setTodo(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (editData.index !== "") {
      updateTodo(editData.index, todo);
    } else {
      addTodo(todo);
    }
    setTodo("");
  };

  useEffect(() => {
    setTodo(editData.value);
  }, [editData.index, editData.value]);
  return (
    <div>
      <form className="row mt-4" onSubmit={submit}>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            value={todo}
            onChange={inputChange}
          />
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">
            {editData.index !== "" ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
