import React, { useRef, useState } from 'react';
import { xor, isEmpty } from 'lodash';
import { useProgress } from '../../../hooks/useProgress';
import { ScreenWrapper } from '../../common/ScreenWrapper';
import { useTimer } from '../../../hooks/useTimer';
import { normalizeSecs } from '../../../utils/normalizeSecs';
import { BEFORE_NEXT_SCREEN_DELAY } from '../../../constants/delays';
import { Board } from './Board';
import { hasPen } from './PenPlace';

const PEN_PLACES = {
  '0': {
    top: 0,
    left: 'calc(50% - 74px)',
    direction: 'horizontal',
  },
  '1': {
    top: '14px',
    left: 'calc(50% - 74px)',
    direction: 'vertical',
  },
  '2': {
    top: '14px',
    left: 'calc(100% - 80px)',
    direction: 'vertical',
  },
  '3': {
    top: '158px',
    left: '0px',
    direction: 'horizontal',
  },
  '4': {
    top: '158px',
    left: '144px',
    direction: 'horizontal',
  },
  // '5': {
  //   top: 0,
  //   left: 0,
  //   direction: 'horizontal',
  // },
  // '6': {
  //   top: 0,
  //   left: 0,
  //   direction: 'horizontal',
  // },
  // '7': {
  //   top: 0,
  //   left: 0,
  //   direction: 'horizontal',
  // },
  // '8': {
  //   top: 0,
  //   left: 0,
  //   direction: 'horizontal',
  // },
  // '9': {
  //   top: 0,
  //   left: 0,
  //   direction: 'horizontal',
  // },
  // '10': {
  //   top: 0,
  //   left: 0,
  //   direction: 'horizontal',
  // },
};

// PenPlaceId: PenId | null
const INITIAL_PEN_POSITIONS = {
  '0': '0',
  '1': null,
  '2': null,
  '3': '1',
  '4': null,
  '5': null,
  '6': null,
  '7': null,
  '8': null,
  '9': null,
  '10': null,
};

// PenPlaceId[]
const WIN_PEN_PLACES = ['1', '2'];

const MAX_TRIES_COUNT = 2;
const MAX_TIME_AVAILABLE = 40;

export function Screen40() {
  const { next } = useProgress();
  const [positions, setPositions] = useState(INITIAL_PEN_POSITIONS);
  const usedTriesCount = useRef(0);
  const isGameCompleted = useRef(false);

  const { timeLeft, start, stop } = useTimer(MAX_TIME_AVAILABLE, { onFinish: handleLose });

  function handlePositionsChange(positions, placeId) {
    if (isGameCompleted.current) return;

    setPositions(positions);

    const places = Object.keys(positions).filter(place => hasPen(positions[place]));

    if (isEmpty(xor(places, WIN_PEN_PLACES))) {
      handleWin();
    } else {
      if (!WIN_PEN_PLACES.includes(placeId)) {
        usedTriesCount.current += 1;
      }

      if (usedTriesCount.current >= MAX_TRIES_COUNT) {
        handleLose();
      }
    }
  }

  function handleFinishGame() {
    isGameCompleted.current = true;
    stop();
    setTimeout(next, BEFORE_NEXT_SCREEN_DELAY);
  }

  function handleLose() {
    handleFinishGame();
  }

  function handleWin() {
    handleFinishGame();
  }

  // useEffect(start, []);

  return (
    <ScreenWrapper>
      <div>{normalizeSecs(timeLeft)}</div>
      <br/>
      <Board places={PEN_PLACES} positions={positions} onPositionsChange={handlePositionsChange} />
    </ScreenWrapper>
  );
}