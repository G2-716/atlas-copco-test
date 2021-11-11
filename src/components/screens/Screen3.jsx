import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { Circle } from '../common/Circle';
import { Triangle } from '../svg/Triangle';
import { Title } from '../common/Title';
import { Button } from '../common/Button';

const CircleStyled = styled(Circle)`
    width: 244px;
    height: 244px;
    top: -122px;
    left: 50%;
    transform: translate(-50%, 0);
    @media screen and (max-height: 520px) and (orientation: landscape){
        width: 180px;
        height: 180px;
    } 
`;

const TriangleStyled = styled(Triangle)`
    position: absolute;
    max-width: 545px;
    width: 131.6%;
    max-height: 475px;
    height: 64.5%;
    left: -245px;
    bottom: -245px;
    
    @media screen and (min-width: 640px){
        width: 540px;
        height: 470px;
    }
    
    @media screen and (max-height: 575px) and (orientation: landscape){
        width: 480px;
        height: 100%;
    } 
    
    
`;

const InfoWrapper = styled.div`
    margin: calc(12.6% + 122px) 0 30px;
    
    @media screen and (min-width: 640px){
        margin-top: calc(12.6% + 66px);
    }
`;

export function Screen3() {
  const { user, next } = useProgress();

  return (
    <ScreenWrapper>
        <CircleStyled />
        <InfoWrapper>
            <Title>{user.name}, вы в офисе Atlas Copco!</Title>
            <Title>Заходим в лифт :)</Title>
        </InfoWrapper>
        <Button onClick={next}>Зайти</Button>
        <TriangleStyled />
    </ScreenWrapper>
  );
}