import React from "react";
import styled from 'styled-components';

const ButtonStyled = styled.button`
    outline: none;
    border: 1px solid white;
    background: none;
    opacity: ${ ({ disabled }) => disabled ? 0.6 : 1};
    display: block;
    pointer-events: ${ ({ disabled }) => disabled ? 'none' : 'auto'};
    font-size: 18px;
    width: 127px;
    height: 55px;
    text-align: center;
    cursor: pointer;
    color: white;
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      height: 30px;
      font-size: 12px;
    }
`
export const Button = (props) => {
    return <ButtonStyled {...props} />
}