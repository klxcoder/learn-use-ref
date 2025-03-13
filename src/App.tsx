import { useRef, useEffect } from 'react';
import styles from './Box.module.scss';

function MovingBox() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const moveBox = () => {
    if (boxRef.current) {
      positionRef.current += 2; // Move 2px per frame
      boxRef.current.style.transform = `translateX(${positionRef.current}px)`;

      if (positionRef.current < 500) {
        animationRef.current = requestAnimationFrame(moveBox);
      }
    }
  };

  const startAnimation = () => {
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(moveBox);
    }
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <div ref={boxRef} className={styles.box}></div>
      <button onClick={startAnimation}>Start</button>
      <button onClick={stopAnimation}>Stop</button>
    </div>
  );
}

export default MovingBox;
