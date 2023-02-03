import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleClick = () => {
    setItems([...items, newItem]);
    setNewItem("");
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
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default TodoList;
