import React, {useContext} from "react";
import {ProgressContext} from "../../context/ProgressContext";

export const IntroScreen2 = () => {
    const { userData, setNext } = useContext(ProgressContext);

    return <div>
        <p>Очень приятно, {userData.name}! В этом тренажере вас ждут нестандартные ситуации: вопросы на время и логику, проверка на выдержку и многое другое! Всего будет 7 ситуаций :)
            Успешное прохождение задач можно посмотреть на шкале. Что на нее влияет? Начинайте скорее, и поймете…
        </p>
        <button onClick={setNext}>next</button>
    </div>
}