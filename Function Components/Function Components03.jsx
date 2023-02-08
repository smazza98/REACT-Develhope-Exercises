import React from "react";

const Sum = ({ numbers = [] }) => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return <h1>Sum of numbers: {sum}</h1>;
};

export default Sum;
