import React from 'react';

const calc = (a, b) => {
    const sum = a + b;
    return <h2> Result is {sum} </h2>;
}

function App() {
  return (
    <div>
        {calc(2, 2)}
    </div>
  );
}

export default App;
