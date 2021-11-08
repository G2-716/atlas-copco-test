import React from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen42() {
  const { user } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        {user.name}, поздравляем с успешным прохождением собеседования!

        Мы обязательно рассмотрим
        вашу кандидатуру, а пока
        предлагаем вам изучить карьерные возможности от создателя
        нашего тренажера Atlas Copco!
      </div>
    </ScreenWrapper>
  );
}