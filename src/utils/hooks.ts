import { useEffect, useRef } from "react";

export function useAnimationFrame(callback: (delta: number) => void) {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return () => cancelAnimationFrame(requestRef.current!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Make sure the effect runs only once
}
