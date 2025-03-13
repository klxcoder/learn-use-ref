import { useRef, useState } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCountRef = useRef(0);

  renderCountRef.current += 1; // Increase renderCountRef.current each time render

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render Count: {renderCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RenderCounter;
