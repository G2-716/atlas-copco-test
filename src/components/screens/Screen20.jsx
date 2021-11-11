import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { Triangle } from '../svg/Triangle';
import { LogoStyled } from '../common/LogoStyled';
import { Text, TextBold } from '../common/Text';
import { Button } from '../common/Button';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { phoneCall } from '../../constants/images';
import { Circle } from '../common/Circle';

const TriangleStyled = styled(Triangle)`
    position: absolute;
    top: -27px;
    right: 22px;
    width: 164px;
    height: 144px;
    
    @media screen and (max-width: 290px){
        right: -5px;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      display: none;
    } 
`;

const TextWrapper = styled.div`
    margin-top: 6.1%;
    max-width: 270px;
    
    @media screen and (max-width: 330px){
        max-width: 250px;
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: 34px;
    width: 160px;
    height: 50px;
`;

const CircleWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    z-index: -2;
    bottom: 0;
    right: 0;
    height: 440px;
    max-height: 59.7%;
    width: 183px;
    
    @media screen and (max-height: 700px){
      max-height: 55%;
    }
    
    @media screen and (min-width: 640px){
        width: 100px;
    }
    
    @media screen and (max-width: 330px){
        width: 110px;
    }
    
`

const CircleStyled = styled(Circle)`
    display: block;
    width: 474px;
    height: 474px;
    border-radius: 300px;
`

const ImageWrapperStyled = styled(ImageWrapper)`
    max-height: none;
    height: 33%;
    
    @media screen and (max-width: 330px){
        height: 30%;
    }
    
    @media screen and (max-height: 600px){
        height: 24%
    }
    
    @media screen and (max-height: 700px){
        height: 27%;
    }
    
    @media screen and (min-width: 640px){
        height: 31%;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        max-height: 25%;
        justify-content: flex-end;
    }
    
    @media screen and (max-height: 500px){
            justify-content: flex-end;
    }
    
`;

const Image = styled(ImageStyled)`
    width: auto;
`;

export function Screen20() {
  const { user } = useProgress();

  const onLandingBtnClick = () => {
      window.open('https://www.atlascopco.com/ru-ru/jobs', '_blank');
  }

  return (
    <ScreenWrapper>
        <TriangleStyled />
        <LogoStyled />
        <TextWrapper>
          <TextBold>
              {user.name}, поздравляем с успешным прохождением собеседования!
          </TextBold>
            <Text>
                {'Мы обязательно рассмотрим\nвашу кандидатуру, а пока\nпредлагаем вам изучить карьерные возможности от создателя нашего тренажера Atlas Copco!'}
            </Text>
        </TextWrapper>
        <ButtonStyled onClick={onLandingBtnClick}>Узнать больше</ButtonStyled>
        <CircleWrapper>
            <CircleStyled />
        </CircleWrapper>
        <ImageWrapperStyled>
            <Image src={phoneCall} alt={''}/>
        </ImageWrapperStyled>
    </ScreenWrapper>
  );
}