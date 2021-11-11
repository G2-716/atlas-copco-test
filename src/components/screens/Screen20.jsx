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


const CircleStyled = styled(Circle)`
    max-width: 474px;
    max-height: 474px;
    border-radius: 300px;
    right: -70vw;
    bottom: -9vh;
    z-index: -2;
    width: 114.5vw;
    height: 114.5vw;
    
    @media screen and (max-height: 600px){
      right: -77vw;
      bottom: -14vh;
    }
    
    @media screen and (max-height: 500px){
      right: -80vw;
      bottom: -50vw;
    }
    
    @media screen and (max-height: 300px){
        display: none;
    }
    
    @media screen and (min-width: 640px){
      min-width: auto;
      min-height: auto;
      right: -320px;
      bottom: -55px;
      width: 450px;
      height: 450px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 690px){
      bottom: -23%;
    }
    
    @media screen and (max-height: 590px) and (orientation: landscape){
      right: -250px;
      bottom: -200px;
      width: 400px;
      height: 400px;
    } 
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
        <CircleStyled />
        <ImageWrapperStyled>
            <Image src={phoneCall} alt={''}/>
        </ImageWrapperStyled>
    </ScreenWrapper>
  );
}