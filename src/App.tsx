import { forwardRef, useRef } from 'react';

const Input = forwardRef<HTMLInputElement, { label: string }>(
  ({ label }, ref) => (
    <div>
      <label>{label}</label>
      <input ref={ref} />
    </div>
  )
);

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <Input ref={inputRef} label="Enter text:" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
