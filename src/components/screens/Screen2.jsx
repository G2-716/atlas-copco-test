import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen2() {
  const { user, next } = useProgress();

  return (
    <ScreenWrapper>
      <div>Очень приятно, {user.name}!</div>

      <div>
        В этом тренажере вас ждут нестандартные ситуации:
        вопросы на время и логику, проверка на выдержку и многое другое!

        Всего будет 7 ситуаций :)
      </div>

      <button onClick={next}>Играть</button>
    </ScreenWrapper>
  );
}