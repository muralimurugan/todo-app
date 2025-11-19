import React, { useState } from "react";
import "./App.css";

/**
 * 1. Add new item to TODO list on click of "+" button from input box.
 * 2. Complete an item on checkbox selection.
 * 3. Remove the items on click of delete button.
 * 4. You can't delete the completed items.
 * 5. Apply necessary valdations wherever needed.
 * 6. Try to use smart syntax, wherever possible.
 * 7. Do not bother about CSS.
 * 8. Pick whichever point you wish to implement first.
 * 9. **optional**: Move Add TODO feature in a seperate component.
 */

const Listitems = [
  { text: "Learn JavaScriptss", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in codesandbox", done: true },
  { text: "Build something awesome", done: true },
];

export default function App() {
  const [items, setItems] = useState(Listitems);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    // console.log(e.target.value);
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
  console.log("item", items);
  console.log("todo", todo);
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
