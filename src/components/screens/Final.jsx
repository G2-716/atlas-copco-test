import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {shake} from "../../utils/keyframes";
import {ProgressContext} from "../../context/ProgressContext";
const TelephoneWrapper = styled.div`
    animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    animation-iteration-count: 3;
    transform: translate3d(0, 0, 0);
    width: 200px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
`
const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
`

const Modal = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const Final = () => {
    const { points, userData } = useContext(ProgressContext);

    const [isModal, setIsModal] = useState(false);
    const [isButtonShown, setIsButton] = useState(false);

    useEffect(()=> {
        setTimeout(()=> {
            setIsButton(true);
        }, 2000);
    }, [])

    return (
        <div>
            <TelephoneWrapper />
            {isButtonShown && <button onClick={() => setIsModal(true)}>Взять трубку</button>}
            {isModal && (<ModalWrapper>
                <Modal>
                    <p>{`${userData.name}, поздравляем с успешным прохождением собеседования! Мы обязательно рассмотрим вашу кандидатуру, а пока предлагаем вам изучить карьерные возможности от создателя нашего тренажера Atlas Copco! Points: ${points}`}</p>
                    <a>Ссылка на лендинг</a>
                </Modal>
            </ModalWrapper>)}
        </div>
    )
}