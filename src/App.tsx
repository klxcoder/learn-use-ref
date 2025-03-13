import { useState, useRef } from 'react';

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const debounceRef = useRef<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    // Clear the previous timer
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // Set a new timer
    debounceRef.current = setTimeout(() => {
      setResult(`Searching for: ${e.target.value}`);
    }, 500);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <p>{result}</p>
    </div>
  );
}

export default DebouncedSearch;
