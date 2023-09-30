import React, { useContext, useState, useEffect, useRef  } from 'react';
import TodoContext from './store';

export default function Input() {
  const { addTodo, editData, updateTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const inputRef = useRef(''); // Create a ref for the input element


  const inputChange = (event) => {
    setTodo(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();

    if (editData.index !== '') {
      updateTodo(editData.index, todo);
    } else {
      addTodo(todo);
    }

    setTodo('');
  };

  useEffect(() => {
    // Set the input field with the currently selected task when editing
    if (editData.index !== '') {
      setTodo(editData.value);
      inputRef.current.focus(); // Set focus to the input element when editing
    } else {
      setTodo(''); // Clear the input field when not editing
    }
  }, [editData.index, editData.value]);

  return (
    <form className="row" onSubmit={submit}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo..."
          value={todo}
          onChange={inputChange}
          ref={inputRef} // Attach the ref to the input element
        />
      </div>

      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          {editData.index !== '' ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
}
