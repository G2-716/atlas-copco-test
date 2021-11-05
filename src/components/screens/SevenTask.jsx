import React, {useState} from "react";
import {QuestionWrapper} from "../QuestionWrapper";

export const SevenTask = () => {
    const  [isQuestionShown, setIsQuestionShown] = useState(false);
    return <div>
        { !isQuestionShown ? (
            <>
                <p>
                    Сейчас будет вопрос на время, вы готовы?
                </p>
                <button onClick={() => setIsQuestionShown(true)}> Готов </button>
            </>
            )
            : <QuestionWrapper questionId={'1'} />
        }

    </div>
}