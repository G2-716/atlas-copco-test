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
`;

const TriangleWrapper = styled.div`
    width: 87.922%;
    height: 31.25%;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
`;

const TriangleStyled = styled(Triangle)`
  position: absolute;
  width: 545px;
  height: 475px;
  left: -245px;
  bottom: -245px;
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
        <TriangleWrapper>
            <TriangleStyled />
        </TriangleWrapper>
    </ScreenWrapper>
  );
}