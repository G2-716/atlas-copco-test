import React from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peopleFlying } from '../../constants/images';
import { SHORT_AFTER_ANSWER_DELAY } from '../../constants/delays';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 39%;
`;

export function Screen16() {
    const questionId = '6';
    const question = getQuestionById(questionId);

    const onGiveAnswer = () => {
      reachMetrikaGoal('q6');
    }

    return (
        <DefaultQuestionWrapper
          question={question}
          afterAnswerDelay={SHORT_AFTER_ANSWER_DELAY}
          isShort={false}
          chooseFunc={onGiveAnswer}
        >
            <ImageWrapperStyled>
                <ImageStyled src={peopleFlying} />
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}