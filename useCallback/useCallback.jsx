import { useState, useCallback } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);
  const reset = useCallback(() => setCount(initialCount), []);

  return [count, increment, decrement, reset];
}

export default useCounter;
