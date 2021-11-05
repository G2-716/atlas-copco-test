import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen3() {
  const { user, next } = useProgress();

  return (
    <ScreenWrapper>
      <div>{user.name}, вы в офисе Atlas Copco!</div>
      <div>Заходим в лифт :)</div>

      <button onClick={next}>Зайти</button>
    </ScreenWrapper>
  );
}