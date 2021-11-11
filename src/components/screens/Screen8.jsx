import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { InterviewStartScreen } from '../common/InterviewStartScreen';

export function Screen8() {
    const { user } = useProgress();

    return <InterviewStartScreen
        title={`Как мы с вами интересно столкнулись!`}
        text={`Меня зовут Сергей, а вы, как я понял, ${user.name}.`}
    />;
}