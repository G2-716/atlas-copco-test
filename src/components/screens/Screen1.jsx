import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';

export function Screen1() {
  const { next, updateUser } = useProgress();

  function handleNameChange(event) {
    updateUser('name', event.target.value);
  }

  function handleSexChange(event) {
    updateUser('sex', event.target.value);
  }

  return (
    <ScreenWrapper>
      <div>Привет!</div>
      <div>
        Atlas Copco приготовила для вас тренажер нестандартного собеседования. Всегда приятно попробовать себя в чем-то новом.
      </div>
      <div>Познакомимся?</div>
      <input type="text" onChange={handleNameChange} />
      <input type="radio" name='sex' value='male' onChange={handleSexChange} />
      Male
      <input type="radio" name='sex' value='female' onChange={handleSexChange} />
      Female
      <button onClick={next}>Дальше</button>
    </ScreenWrapper>
  );
}