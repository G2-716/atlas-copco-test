import React from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { INTERVIEWER_NAME } from '../../constants/names';

export function Screen6() {
  const { next, user } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        Здравствуйте, {INTERVIEWER_NAME}!

        А вы, должно быть, {user.name}?

        Проходите за {INTERVIEWER_NAME}, это ваш интервьюер.
      </div>

      <button onClick={next}>Дальше</button>
    </ScreenWrapper>
  );
}