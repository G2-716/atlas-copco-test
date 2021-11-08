import React from 'react';
import styled from 'styled-components';
import { QuestionNumber } from './QuestionNumber';
import { useProgress } from '../../hooks/useProgress';
import { Timer } from './Timer';
import { TextBold } from './Text';
import { ScreenWrapper } from './ScreenWrapper';
import { AFTER_ANSWER_DELAY } from '../../constants/delays';

const QuestionInfoWrapper = styled.div`
    display: flex;
    margin-bottom: 25px;
    
    @media screen and (max-height: 600px){
        margin-bottom: 15px;
    }
`;

const TimerStyled = styled(Timer)`
    height: 45px;
    margin-left: 10px;
    
    @media screen and (max-height: 600px){
        height: 30px;
    }
`
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
`;

const SelectedAnswerWrapper = styled(AnswerWrapper)`
    background: ${({ isCorrect }) => isCorrect ? '#42CC58' : '#FF0000'};
`;


export const QuestionWrapper = (props) => {
    const { question, timeLeft, isShort, children } = props;
    const { user, answers, updateAnswer, next } = useProgress();
    const { time } = question;

    const onAnswerChoose = (id) => {
        if (answers[question.id]) return;

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
    //TODO: several questions wrapper = main one -> typical components, name them correctly
    return (
        <ScreenWrapper>
            <QuestionInfoWrapper>
                <QuestionNumber number={question.id} />
                {time && <TimerStyled timeLeft={timeLeft}/>}
            </QuestionInfoWrapper>
            {question.title && <TextBold>{question.title(user)}</TextBold>}
            <TextBold>{question.text(user)}</TextBold>
            <AnswersWrapper>
                {question.answers.map(answer => renderAnswerWrapper(answer))}
            </AnswersWrapper>
            {children}
        </ScreenWrapper>
    )
}