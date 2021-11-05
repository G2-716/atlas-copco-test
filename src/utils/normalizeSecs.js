export function normalizeSecs(timeInSecs) {
  const mins = Math.floor(timeInSecs / 60);
  const secs = Math.floor(timeInSecs % 60);

  return `${`${mins}`.padStart(2, '0')}:${`${secs}`.padStart(2, '0')}`;
}