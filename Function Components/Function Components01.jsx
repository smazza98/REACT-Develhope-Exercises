import React from "react";
import Age from "./Age";

const Welcome = (props) => {
  const { name = "..." } = props;
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={props.age} />
    </>
  );
};

export default Welcome;
