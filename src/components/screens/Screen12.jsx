import React, { useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { ImageStyled, ImageWrapper } from '../common/Image';
import {
    companyPeople,
    correctCompany,
    incorrectCompany
} from '../../constants/images';
import { getAnswerById } from '../../utils/getAnswerById';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: none;
`;

export function Screen12() {
    const questionId = '2';
    const [answer, setAnswer] = useState(null);

    const getImage = () => {
        if (!answer) return companyPeople
        if (answer.isCorrect) return correctCompany
        return incorrectCompany;
    }

    const onGiveAnswer = (answerId) => {
        setAnswer(getAnswerById(questionId, answerId));
    }

    const question = getQuestionById(questionId);
    return (
        <DefaultQuestionWrapper
            question={question}
            isShort={false}
            chooseFunc={onGiveAnswer}
        >
            <ImageWrapperStyled>
                <ImageStyled src={getImage()} alt={''}/>
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}