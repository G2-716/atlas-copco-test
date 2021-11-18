import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { getAnswerById } from '../../utils/getAnswerById';
import { TextBold } from '../common/Text';
import { QuestionNumber } from '../common/QuestionNumber';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peoplePhone } from '../../constants/images';
import { Button } from '../common/Button';
import { Circle } from '../common/Circle';
import { Triangle } from '../svg/Triangle';

const TextStyled = styled(TextBold)`
    margin-top: 36px;
    margin-bottom: 30px;
    @media screen and (max-width: 330px){
        margin-top: 20px;
    }
`;

const CircleStyled = styled(Circle)`
    background: #42CC58;
    right: 8%;
    top: 12%;
    width: 63px;
    height: 63px;
    
    @media screen and (max-width: 365px){
        top: 5%;
    }
    @media screen and (max-width: 330px){
        top: 2.5%;
        right: 20px;
    }
    @media screen and (min-width: 640px){
      right: 15px;
      top: 60px;
    }
`;

const TriangleStyled = styled(Triangle)`
    transform: rotate(-150deg);
    position: absolute;
    right: -95px;
    top: 170px;
    width: 142px;
    height: 165px;
    
    @media screen and (max-height: 700px){
       top: 150px;
    }
    
    @media screen and (min-width: 640px){
      top: 220px;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 58%;
    
    @media screen and (max-height: 700px){
        max-height: 46%;
    }
    
    @media screen and (max-height: 500px){
        max-height: 38%;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        max-height: 38%;
    }
`

export function Screen17() {
    const { answers, next } = useProgress();
    const questionNumber = '6';
    const text = getAnswerById(questionNumber, answers[questionNumber])?.afterText();

    return (
        <ScreenWrapper>
            <QuestionNumber number={questionNumber} />
            <CircleStyled/>
            <TriangleStyled fill={'#42CC58'} strokeWidth={'7'}/>
            <TextStyled>{text}</TextStyled>
            <Button onClick={next}>Продолжить</Button>
            <ImageWrapperStyled>
                <ImageStyled src={peoplePhone} alt={''} />
            </ImageWrapperStyled>
        </ScreenWrapper>
    )
}