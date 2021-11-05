import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { INTERVIEWER_NAME } from '../../constants/names';

export function Screen8() {
  const { next, user } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        Как мы с вами интересно столкнулись!

        Меня зовут {INTERVIEWER_NAME}, а вы, как я понял, {user.name}.

        Давайте начинать?
      </div>

      <button onClick={next}>Конечно!</button>
    </ScreenWrapper>
  );
}