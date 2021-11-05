import { useMemo, useState } from 'react';
import { screens } from '../screens.config';
import { Screen10 } from '../components/screens/Screen10';

function parseScreens(currentScreenIndex, progress) {
  return screens.reduce((acc, screen, index) => {
    if (index <= currentScreenIndex) {
      let parsedScreen = screen;

      if (typeof parsedScreen === 'function') {
        parsedScreen = parsedScreen(progress);
      }

      if (Array.isArray(parsedScreen)) {
        return [...acc, ...parsedScreen];
      }

      return [...acc, parsedScreen];
    } else {
      return [...acc, screen];
    }
  }, []);
}

const INITIAL_ANSWERS = {};
const INITIAL_USER = { name: null, sex: null };
const INITIAL_PROGRESS = { answers: INITIAL_ANSWERS, user: INITIAL_USER };

function getInitialScreenIndex() {
  /////////////////// for development ////////////////////////////////////

  const urlParams = new URLSearchParams(window.location.search);
  const screenParam = urlParams.get('screen');

  ////////////////////////////////////////////////////////////////////////

  return +screenParam || 0;
}

export function useProgressInit() {
  const [progress, setProgress] = useState(INITIAL_PROGRESS);

  const [currentScreenIndex, setCurrentScreenIndex] = useState(getInitialScreenIndex());
  const parsedScreens = useMemo(
    () => parseScreens(currentScreenIndex, progress),
    [currentScreenIndex, progress],
  );
  const screen = parsedScreens[currentScreenIndex];

  const next = () => {
    const nextScreenIndex = currentScreenIndex + 1;
    const canNext = nextScreenIndex <= parsedScreens.length - 1;

    if (canNext) {
      setCurrentScreenIndex(nextScreenIndex);
    }
  };

  const reset = () => {
    setCurrentScreenIndex(getInitialScreenIndex());
    setProgress(INITIAL_PROGRESS);
  };

  const resetInterview = () => {
    const startInterviewIndex = parsedScreens.findIndex(({ component }) => component === Screen10);
    setCurrentScreenIndex(startInterviewIndex);
    updateProgress('answers', INITIAL_ANSWERS);
  };

  const updateUser = (name, value) => {
    setProgress(progress => ({
      ...progress,
      user: { ...progress.user, [name]: value },
    }));
  }

  const updateAnswer = (name, value) => {
    setProgress(progress => ({
      ...progress,
      answers: { ...progress.answers, [name]: value },
    }));
  };

  const updateProgress = (name, value) => {
    setProgress(progress => ({ ...progress, [name]: value }));
  };

  return {
    progress,
    user: progress.user,
    answers: progress.answers,
    screen,
    next,
    reset,
    resetInterview,
    updateAnswer,
    updateUser,
    updateProgress,
  };
}