import React, { useState } from 'react';
import { QuestionWrapper } from './QuestionWrapper';
import { useProgress } from '../../hooks/useProgress';
import { RangeSlider } from './Range';
import { Button } from './Button';

export const RangeQuestionWrapper = (props) => {
    const { question, getSliderColor, onGiveAnswerFunc, children } = props;

    const defaultValue = Math.floor((question.max + question.min) / 2);

    const [answer, setAnswer] = useState(defaultValue);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [sliderColor, setSliderColor] = useState('');

    const { updateAnswer } = useProgress();

    const onGiveAnswer = () => {
        const givenAnswer = question.answers.find(ans => ans.min <= answer && ans.max >= answer);

        setSliderColor(getSliderColor(givenAnswer));
        setDisabled(true);
        updateAnswer(question, givenAnswer.id);
        setIsButtonVisible(false);
        onGiveAnswerFunc(givenAnswer);
    }

    return (
        <QuestionWrapper question={question}>
            <RangeSlider
                max={question.max}
                min={question.min}
                disabled={disabled}
                defaultValue={defaultValue}
                sliderColor={sliderColor}
                onChange={(value) => setAnswer(value)}/>
            {isButtonVisible && <Button onClick={onGiveAnswer}>Ответить</Button>}
            {children}
        </QuestionWrapper>
    )
}