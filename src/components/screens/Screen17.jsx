import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { getAnswerById } from '../../utils/getAnswerById';
import { TextBold } from '../common/Text';
import { QuestionNumber } from '../common/QuestionNumber';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peoplePhone } from '../../constants/images';

const TextStyled = styled(TextBold)`
    margin-top: 36px;
    
    @media screen and (max-width: 330px){
        margin-top: 20px;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 73%;
    
    @media screen and (max-height: 700px){
        max-height: 68%;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        max-height: 58%;
    }
`

export function Screen17() {
    const { answers, next } = useProgress();
    const questionNumber = '6';
    const text = getAnswerById(questionNumber, answers[questionNumber])?.afterText();

    return (
        <ScreenWrapper onClick={next}>
            <QuestionNumber number={questionNumber} />
            <TextStyled>{text}</TextStyled>
            <ImageWrapperStyled>
                <ImageStyled src={peoplePhone} alt={''} />
            </ImageWrapperStyled>
        </ScreenWrapper>
    )
}