import { useRef, useState } from 'react';

// TODO Fix wrong ticks
export function useTimer(timeInSecs, { onFinish } = {}) {
  const timerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(timeInSecs);

  function tick() {
    const newTimeLeft = timeLeft - 1;
    setTimeLeft(newTimeLeft);

    if (timeLeft === 0) {
      stop();
      onFinish?.();
    } else {
      start();
    }
  }

  function start() {
    timerRef.current = setTimeout(tick, 1000);
    return stop;
  }

  function stop() {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  return { timeLeft, start, stop };
}