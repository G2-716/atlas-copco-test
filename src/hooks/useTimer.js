import { useRef, useState } from 'react';
import { useDidMountEffect } from './useDidMountEffect';

export function useTimer(timeInSecs, { onFinish } = {}) {
  const timerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(timeInSecs);

  function tick() {
    setTimeLeft(prev => prev - 1);
  }

  function start() {
    timerRef.current = setTimeout(tick, 1000);
    return stop;
  }

  function stop() {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  function restart() {
    setTimeLeft(timeInSecs);
  }

  useDidMountEffect(() => {
    if (timeLeft === 0) {
      stop();
      onFinish?.();
    } else {
      start();
    }
  }, [timeLeft]);

  return { timeLeft, start, stop, restart };
}