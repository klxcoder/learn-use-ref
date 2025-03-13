import { useRef } from 'react';

// Update the interface to accept the type that useRef actually returns
interface ChildComponentProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
}

function ChildComponent({ inputRef }: ChildComponentProps) {
  return (
    <div>
      <h3>Child Component</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="This input is controlled by parent's ref"
      />
      <p>Try typing here - parent can access this value!</p>
    </div>
  );
}

function App() {
  // This creates a RefObject<HTMLInputElement | null>
  const inputRef = useRef<HTMLInputElement>(null);

  const readChildInput = () => {
    if (inputRef.current) {
      alert(`Value from child: ${inputRef.current.value}`);
    }
  };

  const focusChildInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={readChildInput}>
        Read Child Input Value
      </button>
      <button onClick={focusChildInput}>
        Focus Child Input
      </button>

      <hr />

      {/* This is where the error was occurring */}
      <ChildComponent inputRef={inputRef} />
    </div>
  );
}

export default App;