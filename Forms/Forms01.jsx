import React, { useState } from "react";

const Welcome = ({ name }) => <h1>Welcome, {name}</h1>;

const InteractiveWelcome = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Welcome name={inputValue} />
    </>
  );
};

export default InteractiveWelcome;
