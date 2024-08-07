import { useCallback, useEffect, useRef } from 'react';

// Utility helper for random number generation
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const useRandomInterval = (
  callback: () => void,
  minDelay: unknown,
  maxDelay: unknown
) => {
  const timeoutId = useRef<number | undefined>();
  const savedCallback = useRef<() => void | undefined>(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current?.();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => {
      window.clearTimeout(timeoutId.current);
    };
  }, [minDelay, maxDelay]);
  const cancel = useCallback(() => {
    window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};

// https://www.joshwcomeau.com/snippets/react-hooks/use-random-interval/
