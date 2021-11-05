import React, {useContext, useState} from "react";
import {getQuestionById} from "../../utils/getQuestionById";
import {ProgressContext} from "../../context/ProgressContext";

export const MatchTask = () => {
    const [attempt, setAttempt] = useState(0);
    const [isGame, setIsGame] = useState(false);
    const task = getQuestionById('7');
    const { setNext, setAnswer } = useContext(ProgressContext);
    const onGameOver = () => {
        setAnswer('2');
        setAttempt(0);
        setNext();
    }
    return (
        <div>
            {isGame ? <div>
                    <div>tut budet igra </div>
                    <button onClick={onGameOver}>next</button>
            </div>
            : (
                <>
                    <p>Нам очень важно, чтобы в нашей компании люди дружили не только между собой, но и с логикой. Мы выложим фигуру из ручек. Вам нужно переложить ручки так, чтобы получилось 11 квадратов.
                        Имейте в виду, что задача на время, у вас две попытки. Желаем удачи!)
                    </p>
                    <button onClick={()=> setIsGame(true)}>go</button>
                </>
                )
            }

        </div>
    )
}