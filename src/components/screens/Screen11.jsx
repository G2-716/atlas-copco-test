import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { useTimer } from '../../hooks/useTimer';
import { useProgress } from '../../hooks/useProgress';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { helloPeople } from '../../constants/images';
import { Modal } from '../common/Modal';

const ImageWrapperStyled = styled(ImageWrapper)`
  height: auto;
  max-height: 46%;
`;

export function Screen11() {
    const { next } = useProgress();
    const [isModal, setIsModal] = useState(false)
    const handleTimerFinish = () => {
        setIsModal(true);
    };

    const question = getQuestionById('1');

    const { timeLeft, start, stop } = useTimer(question.time, { onFinish: handleTimerFinish });

    useEffect(start, []);

    return (
        <DefaultQuestionWrapper
            question={question}
            isShort={true}
            timeLeft={timeLeft}
            chooseFunc={stop}
        >
            {isModal && <Modal />}
            <ImageWrapperStyled>
                <ImageStyled src={helloPeople} alt={''} />
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}