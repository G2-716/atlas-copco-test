import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { TextBold } from '../common/Text';
import { Triangle } from '../svg/Triangle';
import { dialog, peopleBb } from '../../constants/images';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { Button } from '../common/Button';

const TriangleStyled = styled(Triangle)`
    position: absolute;
    top: -61px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 165px;
    height: 143px;

    @media screen and (max-width: 640px){
      top: -91px;
    }
`;

const DialogWrapper = styled.div`
    width: 298px;
    height: 229px;
    margin: 40px auto 0;
    position: relative;
    
    @media screen and (max-width: 330px){
      width: 240px;
      height: 184px;
    }
    
    @media screen and (min-width: 640px){
      width: 267px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
      height: 190px;
    }
`;

const DialogStyled = styled.img`
    width: 100%;
    height: 100%;
`;

const ButtonStyled = styled(Button)`
  margin-top: 20px;
`;

const TextWrapper = styled.div`
    position: absolute;
    top: 45px;
    left: 65px;
    
    @media screen and (max-width: 330px){
        top: 30px;
        left: 45px;
        
        & ${TextBold}{
          font-size: 14px;
        }
    }
    
    @media screen and (min-width: 640px){
      left: 55px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
      top: 23px;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 40%;
`;

export function Screen19() {
  const { next } = useProgress();

  return (
    <ScreenWrapper>
        <TriangleStyled/>
        <DialogWrapper>
            <DialogStyled src={dialog} alt={''} />
            <TextWrapper>
                <TextBold>
                    {'Спасибо\nза уделенное время!'}
                </TextBold>
                <TextBold>
                    {'Мы вам обязательно\nперезвоним.'}
                </TextBold>
            </TextWrapper>
          <ButtonStyled onClick={next}>Дальше</ButtonStyled>
        </DialogWrapper>
        <ImageWrapperStyled>
            <ImageStyled src={peopleBb} alt={''} />
        </ImageWrapperStyled>
    </ScreenWrapper>
  );
}