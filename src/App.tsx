import { useState, useRef, useEffect } from 'react';

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = count; // Store the current count as the previous one
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current === null ? 'null' : prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValueTracker;
