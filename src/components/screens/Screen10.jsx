import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen10() {
  const { next } = useProgress();

  return (
    <ScreenWrapper>
      <div>
        Сейчас будет вопрос на время, вы готовы?
      </div>

      <button onClick={next}>Готов!</button>
    </ScreenWrapper>
  );
}