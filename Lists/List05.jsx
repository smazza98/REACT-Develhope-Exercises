import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleReset = () => {
    setItems([]);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TodoList;
