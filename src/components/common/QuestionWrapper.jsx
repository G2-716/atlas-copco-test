import React from 'react';
import styled from 'styled-components';
import { QuestionNumber } from './QuestionNumber';
import { useProgress } from '../../hooks/useProgress';
import { Timer } from './Timer';
import { Text, TextBold } from './Text';
import { ScreenWrapper } from './ScreenWrapper';

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
    @media screen and (min-width: 640px) and (max-height: 655px){
        height: 32px;
    } 
`;

export const QuestionWrapper = (props) => {
    const { question, timeLeft, children } = props;
    const { user } = useProgress();
    const { time } = question;

    const renderQuestionTitle = () => {
        if (!question.title) return;
        const { title } = question;
        const text = title(user);
        if (text.split(' ').length > 13) return <Text>{text}</Text>
        else return <TextBold>{text}</TextBold>
    }

    return (
        <ScreenWrapper>
            <QuestionInfoWrapper>
                <QuestionNumber number={question.id} />
                {time && <TimerStyled timeLeft={timeLeft}/>}
            </QuestionInfoWrapper>
            {renderQuestionTitle()}
            <TextBold>{question.text(user)}</TextBold>
            {children}
        </ScreenWrapper>
    )
}