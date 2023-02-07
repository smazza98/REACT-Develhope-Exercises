import React, { useState } from "react";

const TodoList = ({ render }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleRemove = (index) => {
    setItems(items.filter((_item, i) => i !== index));
  };

  return (
    <div>
      {render(items, handleRemove)}
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
