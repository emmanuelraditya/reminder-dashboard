import React, { useState, useEffect, useRef } from "react";

function TodosForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todos-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update item"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
            className="todos-input edit"
          />
          <button className="todos-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="What to do?"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
            className="todos-input"
          />
          <button className="todos-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodosForm;
