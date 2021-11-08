import React from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen41() {
  const { next } = useProgress();

  return (
    <ScreenWrapper onClick={next}>
      <div>
        Спасибо
        за уделенное время!

        Мы вам обязательно
        перезвоним.
      </div>
    </ScreenWrapper>
  );
}