import React, { useState, useEffect } from "react";

const ClickCounter = ({ onCounterChange }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ClickCounter;
