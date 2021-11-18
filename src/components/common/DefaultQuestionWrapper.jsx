import React from 'react';
import { QuestionWrapper } from './QuestionWrapper';
import { AFTER_ANSWER_DELAY } from '../../constants/delays';
import { useProgress } from '../../hooks/useProgress';
import styled from 'styled-components';

const AnswersWrapper = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    
    @media screen and (max-height: 600px){
        margin-top: 10px;
    }
`;

const AnswerWrapper = styled.div`
    border: 2px solid white;
    position: relative;
    z-index: 10;
    cursor: pointer;
    width:  100%;
    padding: 10px 36px 10px 24px;
    background: ${({ isCorrect, isSelected }) => isSelected ? (isCorrect ? '#42CC58' : '#FF0000') : 'none'};
    
    & + & {
        margin-top: 7px;
    }
    
    @media screen and (max-height: 600px){
        padding: 5px 19px 5px 15px;
        font-size: 14px;
        & + & {
            margin-top: 5px;
        }
    }
    
    @media screen and (max-width: 300px){
        padding: 5px 12px 5px 10px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 685px){
        padding: 5px 12px 5px 10px;
    }
`;

const AnswerWrapperShort = styled(AnswerWrapper)`
    width: calc(48% - 5px);
    margin: 0 5px 5px 0;
    & + & {
        margin-top: 0;
    }
    
    @media screen and (max-height: 600px){
        & + & {
            margin-top: 0;
        }
    }
`;

export const DefaultQuestionWrapper = (props) => {
    const { question, timeLeft, isShort, afterAnswerDelay, chooseFunc, children } = props;

    const { answers, updateAnswer, next } = useProgress();

    const onAnswerChoose = (id) => {
        if (answers[question.id]) return;
        if (typeof chooseFunc === 'function') chooseFunc(id);
        updateAnswer(question.id, id);
        const timeout = afterAnswerDelay || AFTER_ANSWER_DELAY;
        setTimeout(next, timeout);
    };

    const renderAnswerWrapper = (answer) => {
        const Component = isShort ? AnswerWrapperShort : AnswerWrapper;
        return (
            <Component
                key={answer.id}
                isShort={isShort}
                isSelected={answers[question.id] && answers[question.id] === answer.id}
                isCorrect={answer.isCorrect}
                onClick={()=>onAnswerChoose(answer.id)}
            >
                {answer.text}
            </Component>
        )
    }


    return (
        <QuestionWrapper question={question} timeLeft={timeLeft}>
            <AnswersWrapper>
                {question.answers.map(answer => renderAnswerWrapper(answer))}
            </AnswersWrapper>
            {children}
        </QuestionWrapper>
    )
}