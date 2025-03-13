import { useRef } from 'react';

function App() {
  // Create a ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to focus the input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />
      <button onClick={focusInput}>
        Focus the input
      </button>
    </div>
  );
}

export default App
