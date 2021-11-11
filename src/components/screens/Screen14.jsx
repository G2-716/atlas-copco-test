import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { useTimer } from '../../hooks/useTimer';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peopleThinking } from '../../constants/images';
import { Modal } from '../common/Modal';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: 25%;
`;

const Image = styled(ImageStyled)`
    width: auto;
`;

export function Screen14() {
    const [isModal, setIsModal] = useState(false)

    const handleTimerFinish = () => {
        setIsModal(true)
    };

    const question = getQuestionById('4');

    const { timeLeft, start, stop } = useTimer(question.time, { onFinish: handleTimerFinish });

    useEffect(start, []);

    return (
        <DefaultQuestionWrapper
            question={question}
            isShort={false}
            timeLeft={timeLeft}
            chooseFunc={stop}
        >
            {isModal && <Modal />}
            <ImageWrapperStyled>
                <Image src={peopleThinking} alt={''} />
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}