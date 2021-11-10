import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { useTimer } from '../../hooks/useTimer';
import { useProgress } from '../../hooks/useProgress';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { correct7, helloPeople, incorrect7 } from '../../constants/images';
import { Modal } from '../common/Modal';
import { getAnswerById } from '../../utils/getAnswerById';

const ImageWrapperStyled = styled(ImageWrapper)`
  height: auto;
  max-height: 46%;
`;

export function Screen11() {
    const questionId = '1';

    const [isModal, setIsModal] = useState(false);
    const [answer, setAnswer] = useState(null);
    const handleTimerFinish = () => {
        setIsModal(true);
    };

    const getImage = () => {
        if (!answer) return helloPeople
        if (answer.isCorrect) return correct7
        return incorrect7;
    }

    const onGiveAnswer = (answerId) => {
        stop();
        setAnswer(getAnswerById(questionId, answerId));
    }

    const question = getQuestionById(questionId);

    const { timeLeft, start, stop } = useTimer(question.time, { onFinish: handleTimerFinish });

    useEffect(start, []);

    return (
        <DefaultQuestionWrapper
            question={question}
            isShort={true}
            timeLeft={timeLeft}
            chooseFunc={onGiveAnswer}
        >
            {isModal && <Modal />}
            <ImageWrapperStyled>
                <ImageStyled src={getImage()} alt={''} />
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}