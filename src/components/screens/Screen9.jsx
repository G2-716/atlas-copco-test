import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { InterviewStartScreen } from '../common/InterviewStartScreen';



export function Screen9() {
  const { user } = useProgress();

  return <InterviewStartScreen
      title={`Здравствуйте еще раз,\n${user.name}!`}
      text={'Не переживайте, я бы тоже растерялся в лифте, вечно с этими кнопками путаюсь :)'}
  />;
}