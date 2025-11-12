import { useState, useEffect, useRef } from 'react';
import { lerp } from '../utils/animation';

export function useAnimatedValue(
  targetValue: number,
  duration: number = 1000
): number {
  const [currentValue, setCurrentValue] = useState(targetValue);
  const startValueRef = useRef(targetValue);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    startValueRef.current = currentValue;
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const newValue = lerp(startValueRef.current, targetValue, progress);
      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration]);

  return currentValue;
}
