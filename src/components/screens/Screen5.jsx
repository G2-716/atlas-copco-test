import React from "react";
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen5() {
  const { next } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        Ой, спасибо вам,
        что подождали!

        У меня сейчас собеседование,
        а я чуть не опоздал.
      </div>

      <button onClick={next}>Дальше</button>
    </ScreenWrapper>
  );
}