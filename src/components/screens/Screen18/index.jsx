import React, { useRef, useState, useEffect } from 'react';
import { xor, isEmpty } from 'lodash';
import { useProgress } from '../../../hooks/useProgress';
import { ScreenWrapper } from '../../common/ScreenWrapper';
import { useTimer } from '../../../hooks/useTimer';
import { Board } from './Board';
import { hasPen } from './PenPlace';
import styled from 'styled-components';
import { QuestionNumber } from '../../common/QuestionNumber';
import { Text, TextBold } from '../../common/Text';
import { getQuestionById } from '../../../utils/getQuestionById';
import { Triangle } from '../../svg/Triangle';
import { useDidMountEffect } from '../../../hooks/useDidMountEffect';
import { Modal } from '../../common/Modal';
import { Timer } from '../../common/Timer';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

const WrapperStyled = styled(ScreenWrapper)`
    @media screen and (max-height: 550px){
        padding-top: 10px;
    }
`

const GameInfoStyled = styled.div`
  display: flex;
`;

const TimerStyled = styled(Timer)`
    height: 45px;
    width: 86px;
    margin-left: 10px;
    
    @media screen and (max-height: 600px){
        height: 30px;
    }
    @media screen and (min-width: 640px) and (max-height: 655px){
        height: 32px;
    } 
`;

const TextWrapper = styled.div`
  margin-top: 24px;
  
  @media screen and (max-height: 720px){
      margin-top: 15px;
  }
  
  @media screen and (max-height: 500px){
      margin-top: 10px;
  }
`;

const StyledText = styled(Text)`
  font-size: 16px;
  @media screen and (max-height: 720px){
        font-size: 14px;
  }
  
  @media screen and (max-height: 500px){
      font-size: 12px;
  }
  
  @media screen and (max-height: 460px){
    margin-bottom: 5px;
    
    &:first-child{
        display: none;
    }
  }
`;

const StyledTextBold = styled(TextBold)`
  font-size: 16px;
  
  @media screen and (max-height: 720px){
        font-size: 14px;
  }
  
  @media screen and (max-height: 500px){
      font-size: 12px;
  }
`;

const StyledBoard = styled(Board)`
  margin-left: -14px;
  margin-top: 30px;
  width: calc(100% + 28px);
  
  @media screen and (max-height: 630px){
    margin-left: 0;
    margin-top: 15px;
    width: 100%;
  }
  
  @media screen and (max-height: 500px){
    margin-top: 10px;
  }
  
  @media screen and (max-height: 640px) and (orientation: landscape){
    max-width: 100%;
    width: 300px;
    margin: 10px auto 0;
  }
  
  @media screen and (max-height: 400px) and (orientation: landscape){
    width: 28vh;
    margin: 5px auto 0;
  }
`;

const TriangleStyled = styled(Triangle)`
  position: absolute;
  width: 190px;
  height: 190px;
  right: -108px;
  top: -104px;
  transform: rotate(179deg);

  @media screen and (min-width: 640px){
    right: -108px;
    top: -104px;
  }

  @media screen and (max-height: 600px)  and (max-width:640px){
    right: -121px;
    top: -128px;
  }
`;

const StyledModal = styled(Modal)`
  padding: 35px 20px 35px 35px;
`;

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
  '11': '1',
  '12': '2',
  '15': '3',
  '16': '4',
  '17': '5',
  '20': '6',
  '21': '7',
  '24': '8',
  '25': '9',
  '26': '10',
  '29': '11',
  '30': '12',
};

// PenPlaceId[]
const WIN_PEN_PLACES = [
  ['19', '23', '24', '28', '11', '15', '16', '20', '21', '25', '26', '30'],
  ['20', '24', '25', '29', '12', '16', '17', '21', '22', '26', '27', '31'],
  ['10', '14', '15', '19', '20', '24', '25', '29', '12', '16', '17', '21'],
  ['11', '15', '16', '20', '21', '25', '26', '30', '13', '17', '18', '22'],
  ['2', '6', '7', '11', '12', '16', '17', '21', '20', '24', '25', '29'],
  ['11', '15', '16', '20', '21', '25', '26', '30', '29', '33', '34', '38'],
  ['3', '7', '8', '12', '11', '15', '16', '20', '21', '25', '26', '30'],
  ['12', '16', '17', '21', '20', '24', '25', '29', '30', '34', '35', '39'],
];

const MAX_TRIES_COUNT = 2;

export function Screen18() {
  const questionId = '7';
  const question = getQuestionById(questionId);

  const { next, user } = useProgress();

  const [tryLoseModalShown, setTryLoseModalShown] = useState(false);
  const [loseModalShown, setLoseModalShown] = useState(false);
  const [winModalShown, setWinModalShown] = useState(false);
  const [positions, setPositions] = useState(INITIAL_PEN_POSITIONS);
  const usedTriesCount = useRef(0);
  const isGameCompleted = useRef(false);
  const isGameStarted = useRef(false);

  const { timeLeft, start, stop, restart } = useTimer(question.time, { onFinish: handleTimeout });

  function checkPositions(positions) {
    const places = Object.keys(positions).filter(place => hasPen(positions[place]));
    return WIN_PEN_PLACES.some(winPlaces => isEmpty(xor(places, winPlaces)));
  }

  function resetTryState() {
    setTryLoseModalShown(false);
    setPositions(INITIAL_PEN_POSITIONS);
    restart();
  }

  function handleDragStart() {
    if (isGameCompleted.current || isGameStarted.current) return;

    isGameStarted.current = true;
    start();
  }

  function handlePositionsChange(positions) {
    if (isGameCompleted.current) return;
    setPositions(positions);
  }

  function handleTimeout() {
    if (isGameCompleted.current) return;

    if (checkPositions(positions)) {
      return handleWin();
    }

    usedTriesCount.current += 1;
    setTryLoseModalShown(true);

    if (usedTriesCount.current >= MAX_TRIES_COUNT) {
      setLoseModalShown(true);
    }
  }

  function handleWin() {
    if (isGameCompleted.current) return;

    isGameCompleted.current = true;
    stop();
    setWinModalShown(true);
  }

  function handleTimeoutConfirm() {
    reachMetrikaGoal('timeout7');
    next?.();
  }

  function handleWinConfirm() {
    reachMetrikaGoal('r7');
    next?.();
  }

  useDidMountEffect(() => {
    if (checkPositions(positions)) {
      handleWin();
    }
  }, [positions]);

  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <WrapperStyled>
      <TriangleStyled />
      <GameInfoStyled>
        <QuestionNumber number={7} />
        <TimerStyled timeLeft={timeLeft}/>
      </GameInfoStyled>
      <TextWrapper>
        <StyledText>
          ?????? ?????????? ??????????, ?????????? ?? ?????????? ???????????????? ???????? ?????????????? ???? ????????????
          ?????????? ??????????, ???? ?? ?? ??????????????.
        </StyledText>
        <StyledText>
          ???? ?????????????? ???????????? ???? ??????????.
          ?????? ?????????? ???????????????????? 3 ?????????? ??????,
          ?????????? ???????????????????? 3 ???????????? ????????????????.
        </StyledText>
        <StyledTextBold>
          ???????????? ?? ????????, ?????? ???????????? ???? ??????????,
          ?? ?????? ?????? ??????????????. ???????????? ??????????!)
        </StyledTextBold>
      </TextWrapper>
      <StyledBoard
        places={PEN_PLACES}
        positions={positions}
        onPositionsChange={handlePositionsChange}
        onDragStart={handleDragStart}
      />
      {tryLoseModalShown && (
        <StyledModal
          text={`???? ???? ????????????, ${user.name}.\n\n???? ??????????????????????, ???????? ?????? ???????? ?????????????? :)`}
          btnTop={30}
          onClick={resetTryState}
        />
      )}
      {loseModalShown && (
        <StyledModal
          text={`${user.name}, \n?? ??????????????????, ?????????? ?? ?????????????? ??????????????????.`}
          additionalText={'???????????? ??????????????????, ?? ?????????????????? ?????? ?????????? ??????????????????!'}
          btnTop={30}
          onClick={handleTimeoutConfirm}
        />
      )}
      {winModalShown && (
        <StyledModal
          text={`???? ?????????????? ????????????????????, ${user.name}!`}
          btnText={'??????????????????'}
          btnTop={50}
          onClick={handleWinConfirm}
        />
      )}
    </WrapperStyled>
  );
}