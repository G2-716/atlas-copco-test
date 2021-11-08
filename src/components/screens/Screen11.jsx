import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export function Screen11() {
    const question = getQuestionById('1');
    return <QuestionWrapper question={question} isShort={true}/>;
}