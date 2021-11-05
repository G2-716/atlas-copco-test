import { useEffect } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { useTimer } from '../../hooks/useTimer';
import { normalizeSecs } from '../../utils/normalizeSecs';

export function Screen4() {
  const { updateProgress, next } = useProgress();

  function handleTimerFinish() {
    handleDontWait();
  }

  const { timeLeft, start } = useTimer(7, { onFinish: handleTimerFinish });

  function handleWait() {
    updateProgress('wait', true);
    next();
  }

  function handleDontWait() {
    updateProgress('wait', false);
    next();
  }

  useEffect(start);

  return (
    <ScreenWrapper>
      <div>{normalizeSecs(timeLeft)}</div>

      <div>Подождите меня! Подождите!</div>

      <button onClick={handleWait}>Подождать</button>
      <button onClick={handleDontWait}>Не ждать</button>
    </ScreenWrapper>
  );
}