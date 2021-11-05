import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import {getQuestionById} from "../utils/getQuestionById";
import {QUESTIONS_TYPES} from "../questions.config";
import {ProgressContext} from "../context/ProgressContext";
import {RangeSlider} from "./Range";
import {getAnswerById} from "../utils/getAnswerById";

export const QuestionWrapper = (props) => {
    const {questionId} = props;
    const question = getQuestionById(questionId);
    const { userData, setNext, setAnswer } = useContext(ProgressContext);
    const { name } = userData;
    const isTimeQuestion = question.type === QUESTIONS_TYPES.TimeAnswer;
    const isRange = question.type === QUESTIONS_TYPES.Range;
    const [remainingTime, setRemainingTime] = useState(isTimeQuestion ? question.time : 0);
    const [timerId, setTimerId] = useState(0);
    const [isAfterAnswerScreen, setIsAfterAnswerScreen] = useState(false);
    const [afterAnswerText, setAfterAnswerText] = useState('');

    useEffect(() => {
        if (isTimeQuestion)
            setTimerId(setInterval(()=>{setRemainingTime(time => time - 1);},1000));
    }, [])

    useEffect(()=>{
        if (remainingTime === 0 && timerId) {
            clearInterval(timerId);
            setNext();
        }
    }, [remainingTime])

    const onChooseAnswer = (answerId) => {
        setAnswer(questionId, answerId);
        clearInterval(timerId);
        const answer = getAnswerById(questionId, answerId);
        if (answer.afterText) {
            setIsAfterAnswerScreen(true);
            setAfterAnswerText(answer.afterText(name))
        } else setNext();
    }
    const onChooseRange = (value) => {
        const answerId = question.answers.find(answer => answer.min <= value && answer.max >= value).id;
        setAnswer(questionId, answerId);
        const answer = getAnswerById(questionId, answerId);
        if (answer.afterText) {
            setIsAfterAnswerScreen(true);
            setAfterAnswerText(answer.afterText(name))
        } else setNext();
    }

    return (
        <div>
            {!isAfterAnswerScreen ? (
                <>
                    {question.title && <p>{question.title(name)}</p>}
                        <p>{question.text(name)}</p>
                    {!isRange ?
                        question.answers.map(answer => (<div key={answer.text} onClick={() => onChooseAnswer(answer.id)}>{answer.text}</div>))
                        : <RangeSlider onChange={onChooseRange} min={question.min} max={question.max}/>
                    }
                        <button onClick={setNext}>next</button>
                </>)
                : <div>
                    <p>{afterAnswerText}</p>
                    <button onClick={setNext} />
                </div>
            }
        </div>
    )
}