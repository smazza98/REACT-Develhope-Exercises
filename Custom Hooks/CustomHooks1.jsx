// hook

import { useState } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return [count, increment, decrement, reset];
}

export default useCounter;

// use

// function Counter() {
//   const [count, increment, decrement, reset] = useCounter();

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
