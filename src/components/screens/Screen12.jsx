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
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

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
        const answer = getAnswerById(questionId, answerId);
        setAnswer(answer);
        reachMetrikaGoal(answer.isCorrect ? 'r2' : 'w2');
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