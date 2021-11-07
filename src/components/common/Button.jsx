import React from "react";
import styled from 'styled-components';

const ButtonStyled = styled.button`
  outline: none;
  border: 1px solid white;
  background: none;
  display: block;
  font-size: 18px;
  width: 127px;
  height: 55px;
  text-align: center;
  cursor: pointer;
  color: white
`
export const Button = (props) => {
    return <ButtonStyled {...props} />
}