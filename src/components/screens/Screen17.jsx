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
`

export function Screen17() {
    const { answers } = useProgress();
    const questionNumber = '6';
    const text = getAnswerById(questionNumber, answers[questionNumber])?.afterText();
    return (
        <ScreenWrapper>
            <QuestionNumber number={questionNumber} />
            <TextStyled>{text}</TextStyled>
            <ImageWrapperStyled>
                <ImageStyled src={peoplePhone} alt={''} />
            </ImageWrapperStyled>
        </ScreenWrapper>
    )
}