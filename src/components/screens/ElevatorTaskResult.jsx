import React, {useContext} from "react";
import {ProgressContext} from "../../context/ProgressContext";

export const ElevatorTaskResult = () => {
    const { userData, setNext } = useContext(ProgressContext);

    return <div>
        <p>{userData.hasPressedBtn ?
           ( 'Ой, спасибо вам, что подождали! У меня сейчас собеседование, а я чуть не опоздал.\nЗдравствуйте, %имя Торопящегося человека%! А вы, должно быть, ' + userData.name+'? Проходите за %имя Торопящегося человека%, это ваш интервьюер.')
            : 'Здравствуйте, вы, должно быть, ' + userData.name +'? Проходите в кабинет, вас ждут.'
        }</p>
        <button onClick={setNext}>next</button>
    </div>
}