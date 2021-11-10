import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { TextBold } from '../common/Text';
import { Triangle } from '../svg/Triangle';
import { dialog, peopleBb } from '../../constants/images';
import { ImageStyled, ImageWrapper } from '../common/Image';

const TriangleStyled = styled(Triangle)`
    position: absolute;
    top: -61px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 165px;
    height: 143px;
`;

const DialogWrapper = styled.div`
  width: 298px;
  height: 229px;
  margin: 109px auto 0;
  position: relative;
  
  @media screen and (max-width: 330px){
      width: 240px;
      height: 184px;
  }
  
  @media screen and (max-height: 600px){
      margin-top: 80px;
  }
  
  @media screen and (min-width: 640px){
      width: 267px;
  }
`;

const DialogStyled = styled.img`
    width: 100%;
    height: 100%;
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
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 46%;
`;

export function Screen41() {
  const { next } = useProgress();

  return (
    <ScreenWrapper onClick={next}>
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
        </DialogWrapper>
        <ImageWrapperStyled>
            <ImageStyled src={peopleBb} alt={''} />
        </ImageWrapperStyled>
    </ScreenWrapper>
  );
}