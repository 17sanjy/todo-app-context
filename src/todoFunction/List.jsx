import React, { useContext } from "react";
import store from "./store";

export default function List() {
  let { todos, deleteTodo ,editTodo} = useContext(store);
  return (
    <div>
      <ul className="list-group mt-4">
        {todos.length > 0 ? (
          todos.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                <div>{item}</div>
                <div>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => editTodo(index, item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <li className="list-group-item">No Todo</li>
        )}
      </ul>
    </div>
  );
}
