import React, { useRef, useState, useEffect } from 'react';
import { xor, isEmpty } from 'lodash';
import { useProgress } from '../../../hooks/useProgress';
import { ScreenWrapper } from '../../common/ScreenWrapper';
import { useTimer } from '../../../hooks/useTimer';
import { normalizeSecs } from '../../../utils/normalizeSecs';
import { Board } from './Board';
import { hasPen } from './PenPlace';
import { Button } from '../../common/Button';

const PEN_PLACES = [
  {
    direction: 'horizontal',
    ids: ['1', '2', '3', '4'],
  },
  {
    direction: 'vertical',
    ids: ['5', '6', '7', '8', '9'],
  },
  {
    direction: 'horizontal',
    ids: ['10', '11', '12', '13'],
  },
  {
    direction: 'vertical',
    ids: ['14', '15', '16', '17', '18'],
  },
  {
    direction: 'horizontal',
    ids: ['19', '20', '21', '22'],
  },
  {
    direction: 'vertical',
    ids: ['23', '24', '25', '26', '27'],
  },
  {
    direction: 'horizontal',
    ids: ['28', '29', '30', '31'],
  },
  {
    direction: 'vertical',
    ids: ['32', '33', '34', '35', '36'],
  },
  {
    direction: 'horizontal',
    ids: ['37', '38', '39', '40'],
  },
];

// PenPlaceId: PenId | null
const INITIAL_PEN_POSITIONS = {
  '0': null,
  '1': null,
  '2': '1',
  '3': null,
  '4': '2',
  '5': null,
  '6': '3',
  '7': null,
  '8': null,
  '9': '4',
  '10': null,
};

// PenPlaceId[]
const WIN_PEN_PLACES = ['1', '2'];

const MAX_TRIES_COUNT = 1;
const MAX_TIME_AVAILABLE = 60;

export function Screen18() {
  const { next } = useProgress();
  const [positions, setPositions] = useState(INITIAL_PEN_POSITIONS);
  const usedTriesCount = useRef(0);
  const isGameCompleted = useRef(false);

  const { timeLeft, start, stop } = useTimer(MAX_TIME_AVAILABLE, { onFinish: checkPositions });

  function checkPositions() {
    const places = Object.keys(positions).filter(place => hasPen(positions[place]));

    if (isEmpty(xor(places, WIN_PEN_PLACES))) {
      handleWin();
    } else {
      usedTriesCount.current += 1;

      if (usedTriesCount.current >= MAX_TRIES_COUNT) {
        handleLose();
      }
    }
  }

  function handlePositionsChange(positions) {
    if (isGameCompleted.current) return;
    setPositions(positions);
  }

  function handleFinishGame() {
    isGameCompleted.current = true;
    stop();
    next();
  }

  function handleLose() {
    handleFinishGame();
  }

  function handleWin() {
    handleFinishGame();
  }

  useEffect(start, []);

  return (
    <ScreenWrapper>
      <div>{normalizeSecs(timeLeft)}</div>
      <br/>
      <Board places={PEN_PLACES} positions={positions} onPositionsChange={handlePositionsChange} />
      <br/>
      <Button onClick={checkPositions}>Ответить</Button>
    </ScreenWrapper>
  );
}