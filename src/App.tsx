import { useRef, useEffect } from 'react';

function App() {
  // Create a ref for the input
  const inputRef = useRef<HTMLInputElement>(null);

  // Create a ref to track render count
  const renderCountRef = useRef<number>(0);

  // Log render count on each render to demonstrate no re-renders occur when typing
  useEffect(() => {
    renderCountRef.current += 1;
    console.log(`Component rendered ${renderCountRef.current} times`);
  });

  // Function to demonstrate we can still access the current value
  const logInputValue = () => {
    console.log(`Current input value: ${inputRef.current?.value}`);
    // We could use the current value for any operation here
    alert(`You typed: ${inputRef.current?.value}`);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      // Note: No value or onChange props, so React doesn't control this input
      />
      <button onClick={logInputValue}>
        Show Value
      </button>
      <p>Render count: {renderCountRef.current}</p>
      <p>Try typing in the input - the render count won't change!</p>
    </div>
  );
}

export default App;