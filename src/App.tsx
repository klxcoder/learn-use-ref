import { useRef, useState, useEffect } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCountRef = useRef(1); // Start at 1 since the initial render counts

  useEffect(() => {
    renderCountRef.current += 1; // Increment on each render
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render Count: {renderCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RenderCounter;
