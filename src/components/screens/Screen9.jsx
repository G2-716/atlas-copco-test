import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen9() {
  const { next, user } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        Здравствуйте еще раз, {user.name}!

        Не переживайте, я бы тоже растерялся в лифте, вечно с этими кнопками путаюсь :)

        Давайте начинать?
      </div>

      <button onClick={next}>Конечно!</button>
    </ScreenWrapper>
  );
}