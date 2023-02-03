import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleRemove = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoList;
