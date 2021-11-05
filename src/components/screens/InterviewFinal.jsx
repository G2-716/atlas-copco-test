import React, {useContext} from "react";
import {ProgressContext} from "../../context/ProgressContext";

export const InterviewFinal = () => {
    const { setNext } = useContext(ProgressContext);

    return (
        <div>
            <p>Спасибо за уделенное время! Мы вам обязательно перезвоним.</p>
            <button onClick={setNext}> next </button>
        </div>
    )
}