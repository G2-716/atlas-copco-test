import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { useTimer } from '../../hooks/useTimer';
import { normalizeSecs } from '../../utils/normalizeSecs';
import {Button} from "../common/Button";
import {ImageStyled, ImageWrapper} from "../common/Image";
import {elevatorMan} from "../../constants/images";
import {TextBold} from "../common/Text";
import {Triangle} from "../svg/Triangle";

const ImageWrapperStyled = styled(ImageWrapper)`
    height: 600px;
    max-height: none;
    width: 345px;
    //TODO: остальные запросы по фикс ширине + еще медиа 
    @media screen and (max-height: 700px){
        height: 500px;
        width: 330px;
    }
    @media screen and (max-height: 600px){
        height: 400px;
        width: 265px;
    }
    
    @media screen and (min-width: 640px){
        height: 570px;
        width: 325px;  
    }
`
const Image = styled(ImageStyled)`
    @media screen and (max-width: 640px){
        object-fit: fill;
    }
`
const TextStyled = styled(TextBold)`
  position: absolute;
  
  @media screen and (max-height: 700px){
        top: 45px;
        left: 130px;
    }
    @media screen and (max-height: 600px){
        font-size: 14px;
        top: 35px;
        left: 100px;
    }
    
    @media screen and (min-width: 640px){
        top: 55px;
        left: 130px;
    }
    
`

const TimerWrapper = styled.div`
  background: #ff0000;
  border: 2px solid white;
  padding: 16px 0;
  text-align: center;
  margin-left: auto;
  width: 100px;
`

const TriangleStyled = styled(Triangle)`
    position: absolute;
    width: 475px;
    height: 549px;
    top: -390px;
    left: -320px;
    transform: rotate(180deg);
    @media screen and (min-width: 640px){
        top: -363px;
        left: -340px;
    }
`

const ButtonWrapper = styled.div`
   position: absolute;
   bottom: 28.5%;
   right: 20px;

   @media screen and (max-height: 700px){
        bottom: 170px;
    }
    @media screen and (max-height: 600px){
        bottom: 130px;
    }
    @media screen and (min-width: 640px){
        bottom: 205px;
    }
`
const ButtonStyled = styled(Button)`
    width: 147px;
    &:last-child{
      margin-top: 10px;
    }
    
    @media screen and (max-height: 700px){
        height: 40px;
        font-size: 16px;
    }
    @media screen and (max-height: 600px){
        height: 40px;
        font-size: 16px;
        width: 100px;
    }
    @media screen and (min-width: 640px){
        height: 45px;
    }
`

export function Screen4() {
  const { updateProgress, next } = useProgress();

  function handleTimerFinish() {
    // handleDontWait();
  }

  const { timeLeft, start } = useTimer(7, { onFinish: handleTimerFinish });

  function handleWait() {
    updateProgress('wait', true);
    next();
  }

  function handleDontWait() {
    updateProgress('wait', false);
    next();
  }

  useEffect(start);

  return (
    <ScreenWrapper>
        <TriangleStyled />
        <TimerWrapper>
            {normalizeSecs(timeLeft)}
        </TimerWrapper>
        <ImageWrapperStyled>
            <Image src={elevatorMan} alt={''} />
            <TextStyled>
                {'Подождите меня!\nПодождите!'}
            </TextStyled>
        </ImageWrapperStyled>
        <ButtonWrapper>
            <ButtonStyled onClick={handleWait}>Подождать</ButtonStyled>
            <ButtonStyled onClick={handleDontWait}>Не ждать</ButtonStyled>
        </ButtonWrapper>
    </ScreenWrapper>
  );
}