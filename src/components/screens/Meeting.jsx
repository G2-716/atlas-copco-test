import React, {useContext} from "react";
import {ProgressContext} from "../../context/ProgressContext";

export const Meeting = () => {
    const { userData, setNext } = useContext(ProgressContext);

    return <div>
        {userData.hasPressedBtn ?
            (<>
                <p>
                    {`Как мы с вами интересно столкнулись! Меня зовут %имя Торопящегося человека%, а вы, как я понял, ${userData.name}. Давайте начинать?`}
                </p>
                <button onClick={setNext}>Конечно!</button>
            </>)
            : (<>
                <p>
                    {` Здравствуйте еще раз, ${userData.name}! Не переживайте, я бы тоже растерялся в лифте, вечно с этими кнопками путаюсь :)`}
                </p>
                <button onClick={setNext}>next</button>
            </>)

        }

    </div>
}