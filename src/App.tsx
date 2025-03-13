import { useState, useRef, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds countdown
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null; // Reset ref when finished
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <h1>Time Left: {timeLeft}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
    </div>
  );
}

export default CountdownTimer;
