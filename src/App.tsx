import { useRef, useState, useEffect } from 'react';

function App() {
  // Create a ref for the input
  const inputRef = useRef<HTMLInputElement>(null);

  // Add a second ref to track previous input value
  const prevInputValueRef = useRef<string>('');

  // Add state to track current input value
  const [inputValue, setInputValue] = useState<string>('');

  // Count how many times the component renders
  const renderCountRef = useRef<number>(0);

  // Function to focus the input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Log render count on each render
  useEffect(() => {
    renderCountRef.current += 1;
    console.log(`Component rendered ${renderCountRef.current} times`);
  });

  // Store previous value in ref after each render
  useEffect(() => {
    prevInputValueRef.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={focusInput}>
        Focus the input
      </button>
      <div>
        <p>Current value: {inputValue}</p>
        <p>Previous value: {prevInputValueRef.current}</p>
        <p>Render count: {renderCountRef.current}</p>
      </div>
    </div>
  );
}

export default App;