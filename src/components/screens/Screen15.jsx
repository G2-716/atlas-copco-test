import React, { useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { RangeQuestionWrapper } from '../common/RangeQuestionWrapper';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peopleLightning } from '../../constants/images';
import { TextBold } from '../common/Text';
import { useProgress } from '../../hooks/useProgress';
import { AFTER_ANSWER_DELAY } from '../../constants/delays';

const ImageWrapperStyled = styled(ImageWrapper)`
    @media screen and (max-width: 330px){
        height: 35%;
    }
`;

const Image = styled(ImageStyled)`
    width: auto;
`;

const AfterImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 60%;
`
export function Screen15() {
    const [answer, setAnswer] = useState(null);
    const { user, next } = useProgress();
    const question = getQuestionById('5');
    const getSliderColor = (answer) => {
        return answer.color
    }

    const onGiveAnswer = (givenAnswer) => {
        setAnswer(givenAnswer);
        setTimeout(next, AFTER_ANSWER_DELAY);
    }

    return (
        <RangeQuestionWrapper
            question={question}
            getSliderColor={getSliderColor}
            onGiveAnswerFunc={onGiveAnswer}
        >
            {answer ? (
                <>
                    <TextBold>
                        {answer.afterText(user)}
                    </TextBold>
                    <AfterImageWrapperStyled>
                        <ImageStyled src={answer.picture} />
                    </AfterImageWrapperStyled>
                </>
                )
                : (
                <ImageWrapperStyled>
                    <Image src={peopleLightning} alt={''} />
                </ImageWrapperStyled>
                )
            }

        </RangeQuestionWrapper>
    );
}