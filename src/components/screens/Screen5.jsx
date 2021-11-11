import React from "react";
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { Text, TextBold } from '../common/Text';
import { Button } from '../common/Button';
import { Circle } from '../common/Circle';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { elevatorManThankful } from '../../constants/images';

const Wrapper = styled(ScreenWrapper)`
    padding-top:60px;
    padding-left: 12%;
    
    @media screen and (max-width: 300px){
        padding-left: 10px;
    }
    
    @media screen and (max-height: 600px) and (max-width: 640px){
        padding-top: 30px;
    }
`;

const TextWrapper = styled.div`
    max-width: 180px;
    margin-bottom: 20px;
`;

const CircleStyled = styled(Circle)`
    width: 205px;
    height: 205px;
    top: -82px;
    right: -85px;
    background: #42CC58;
`;

const CircleWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    width: 120px;
    height: 123px;
    top: 0;
    right: 0;
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    width: 100%;
    height: auto;
    max-height: 77%;
    margin-left: -12%;
    
    @media screen and (max-width: 300px){
        margin-left: -10px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        max-height: 64%;
    }
`

export function Screen5() {
  const { next } = useProgress();

  return (
    <Wrapper>
        <CircleWrapper>
            <CircleStyled />
        </CircleWrapper>
        <TextWrapper>
            <TextBold>
                {'Ой, спасибо вам,\nчто подождали!'}

            </TextBold>
            <Text>
                {'У меня сейчас собеседование,\n' +
                'а я чуть не опоздал.'}
            </Text>
        </TextWrapper>
        <ImageWrapperStyled>
            <ImageStyled src={elevatorManThankful} alt={''}/>
        </ImageWrapperStyled>
        <Button onClick={next}>Дальше</Button>
    </Wrapper>
  );
}