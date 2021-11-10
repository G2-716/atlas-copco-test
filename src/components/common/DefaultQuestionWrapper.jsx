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
    cursor: pointer;
    width:  ${props => props.isShort ? 'calc(48% - 5px)' : '100%'};
    padding: 10px 36px 10px 24px;
    margin: ${props => props.isShort ? '0 5px 5px 0' : '0'};
    & + & {
        margin-top: ${props => props.isShort ? '0' : '7px'};
    }
    
    @media screen and (max-height: 600px){
        padding: 5px 19px 5px 15px;
        font-size: 14px;
        & + & {
            margin-top: ${props => props.isShort ? '0' : '5px'};
        }
    }
    
    @media screen and (max-width: 300px){
        padding: 5px 12px 5px 10px;
    }
`;

const SelectedAnswerWrapper = styled(AnswerWrapper)`
    background: ${({ isCorrect }) => isCorrect ? '#42CC58' : '#FF0000'};
`;

export const DefaultQuestionWrapper = (props) => {
    const { question, timeLeft, isShort, chooseFunc, children } = props;

    const { answers, updateAnswer, next } = useProgress();

    const onAnswerChoose = (id) => {
        if (answers[question.id]) return;
        if (typeof chooseFunc === 'function') chooseFunc();
        updateAnswer(question.id, id);
        setTimeout(next, AFTER_ANSWER_DELAY);
    };

    const renderAnswerWrapper = (answer) => {
        return answers[question.id] && answers[question.id] === answer.id ? (
            <SelectedAnswerWrapper
                key={answer.id}
                isCorrect={answer.isCorrect}
                isShort={isShort}
            >
                {answer.text}
            </SelectedAnswerWrapper>
        ) : (
            <AnswerWrapper
                key={answer.id}
                isShort={isShort}
                onClick={()=>onAnswerChoose(answer.id)}
            >
                {answer.text}
            </AnswerWrapper>
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