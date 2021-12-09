import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { useTimer } from '../../hooks/useTimer';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peopleThinking } from '../../constants/images';
import { Modal } from '../common/Modal';
import { useProgress } from '../../hooks/useProgress';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { getAnswerById } from '../../utils/getAnswerById';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: 25%;
    
    @media screen and (min-width: 640px) and (max-height: 750px){
        height: 23%;
    }
`;

const Image = styled(ImageStyled)`
    width: auto;
`;

export function Screen14() {
    const [isModal, setIsModal] = useState(false)
    const { next } = useProgress();

    const handleTimerFinish = () => {
        setIsModal(true)
    };

    const handleTimeoutConfirm = () => {
        reachMetrikaGoal('timeout4');
        next?.();
    };

    const questionId = '4';
    const question = getQuestionById(questionId);

    const { timeLeft, start, stop } = useTimer(question.time, { onFinish: handleTimerFinish });

    const handleAnswerChoose = (answerId) => {
        stop?.();
        const answer = getAnswerById(questionId, answerId);
        reachMetrikaGoal(answer.isCorrect ? 'r4' : 'w4');
    }

    useEffect(start, []);

    return (
        <DefaultQuestionWrapper
            question={question}
            isShort={false}
            timeLeft={timeLeft}
            chooseFunc={handleAnswerChoose}
        >
            {isModal && <Modal onClick={handleTimeoutConfirm} />}
            <ImageWrapperStyled>
                <Image src={peopleThinking} alt={''} />
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}