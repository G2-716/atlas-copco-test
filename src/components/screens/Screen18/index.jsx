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

const WrapperStyled = styled(ScreenWrapper)`
    @media screen and (max-height: 550px){
        padding-top: 10px;
    }
`
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
  
  @media screen and (max-height: 575px) and (orientation: landscape){
    //width: 480px;
    //height: 100%;
  }
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

const MAX_TRIES_COUNT = 2;

export function Screen18() {
  const questionId = '7';
  const question = getQuestionById(questionId);

  const { next } = useProgress();

  const [positions, setPositions] = useState(INITIAL_PEN_POSITIONS);
  const usedTriesCount = useRef(0);
  const isGameCompleted = useRef(false);

  const { timeLeft, start, stop } = useTimer(question.time, { onFinish: checkPositions });

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
    // isGameCompleted.current = true;
    // stop();
    // next();
  }

  function handleLose() {
    handleFinishGame();
  }

  function handleWin() {
    handleFinishGame();
  }

  // useEffect(start, []);

  return (
    <WrapperStyled>
      <TriangleStyled />
      <QuestionNumber number={7} />
      <TextWrapper>
        <StyledText>
          Нам очень важно, чтобы в нашей компании люди дружили не только
          между собой, но и с логикой.
        </StyledText>
        <StyledText>
          Мы выложим фигуру из ручек.
          Вам нужно переложить ручки так,
          чтобы получилось 3 равных квадрата.
        </StyledText>
        <StyledTextBold>
          Имейте в виду, что задача на время,
          у вас две попытки. Желаем удачи!)
        </StyledTextBold>
      </TextWrapper>
      <StyledBoard places={PEN_PLACES} positions={positions} onPositionsChange={handlePositionsChange} />
    </WrapperStyled>
  );
}