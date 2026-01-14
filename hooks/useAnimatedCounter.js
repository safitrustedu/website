import { useEffect, useState } from 'react';

export const useAnimatedCounter = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timeout = setTimeout(() => {
      const incrementTime = duration / end;
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += 1;
        setCount(currentCount);

        if (currentCount >= end) {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay, hasAnimated]);

  return count;
};