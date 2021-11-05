import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {pulseBg} from "../../utils/keyframes";
import {ProgressContext} from "../../context/ProgressContext";


const Wrapper = styled.div`
  animation: ${pulseBg} infinite forwards;
  animation-duration: 2s;
  height: 100%;
  width: 100%;
`
export const ElevatorTask = () => {
    const { setUserInfo, setNext } = useContext(ProgressContext);
    const [isPressed, setIsPressed] = useState(false);
    useEffect(()=>{
        setTimeout(()=> {
            if(!isPressed) setNext();
        }, 2000)
    }, [isPressed, setNext])

    const onPressBtn = () => {
        setIsPressed( true);
        setUserInfo('hasPressedBtn', true)
        setNext();
    }
    return <Wrapper>
        <button onClick={onPressBtn} > knopka lifta</button>
    </Wrapper>
}