import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([
    { text: "Learn JavaScriptss", done: false },
    { text: "Learn React", done: false },
    { text: "Play around in codesandbox", done: true },
    { text: "Build something awesome", done: true },
  ]);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    if (todo) {
      const todoItem = {
        text: todo,
        done: false,
      };
      const newItems = [...items, todoItem];
      setItems(newItems);
      setTodo("");
    }
  };
  const handelChange = (e) => {
    if (e.target.value) {
      setTodo(e.target.value);
    }
  };
  const handleClickCheckbox = (param) => {
    setItems((prev) =>
      prev.map((item) =>
        item.text === param.text ? { ...item, done: !item.done } : item
      )
    );
  };
  const handleDelete = (param) => {
    if (param.done) {
      return true;
    }
    setItems((prev) => prev.filter((item) => item.text !== param.text));
  };
  return (
    <div className="App">
      <p className="title">Todo</p>
      <input
        type="text"
        onChange={handelChange}
        className="txt-input"
        value={todo}
        placeholder="add new todo"
      />
      <button className="btn-add" onClick={addTodo}>
        +
      </button>
      <ol className="list">
        {items &&
          items.length &&
          items.map((item) => (
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => handleClickCheckbox(item)}
                />
                <span className={item.done ? "done" : ""}>{item.text}</span>
              </label>
              <button className="btn-delete" onClick={() => handleDelete(item)}>
                X
              </button>
            </li>
          ))}
      </ol>
    </div>
  );
}
