import React, { useContext } from 'react'
import {ProgressContext} from "../../context/ProgressContext";

export const ReadyQuestion = () => {
    const { retryInterview, setNext, checkIsAnswerCorrect, userData } = useContext(ProgressContext);

    const isPreviousCorrect = checkIsAnswerCorrect('3');
    return (
        <div>
            {isPreviousCorrect ? <p>{`Вы правы, ${userData.name}! Теперь вопрос на креативность, вы готовы?`}</p>
            : <p>К сожалению, мимо! Теперь вопрос на креативность, вы готовы?</p>}
            <div>
                <button onClick={setNext}>Готов</button>
                {!isPreviousCorrect && <button onClick={retryInterview}>Я уже ни в чем не уверен</button>}
            </div>
        </div>
    )
}