import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen7() {
  const { next, user } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        Здравствуйте, вы, должно быть, {user.name}?

        Проходите в кабинет, вас ждут.
      </div>

      <button onClick={next}>Дальше</button>
    </ScreenWrapper>
  );
}