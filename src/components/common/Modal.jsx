import React from 'react';
import styled from 'styled-components';
import { Text, TextBold } from './Text';
import { Button } from './Button';

const ModalWrapper = styled.div`
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    padding-top: 124px;
`;

const ModalWindow = styled.div`
    background: white;
    color: #0098C7;
    padding: 67px 10px 80px 40px;
    max-width: 85%;
    margin: 0 auto;
`;

const TextStyled = styled(TextBold)`
    margin-bottom: 15px;
    
    @media screen and (max-width: 300px){
      font-size: 14px;
    }
`;

const ButtonStyled = styled(Button)`
    background: #0098C7;
    border: none;
    margin-top: ${({ btnTop }) => btnTop}px;
    
    @media screen and (max-width: 300px){
      font-size: 14px;
    }
`;

export const Modal = (props) => {
    const {
        className,
        text = 'К сожалению,\nвы не успели дать ответ.\n\nПродолжим?',
        additionalText = '',
        btnText = 'Продолжить',
        btnTop = 0,
        onClick,
    } = props;

    return (
        <ModalWrapper>
            <ModalWindow className={className}>
                <TextStyled>{text}</TextStyled>
                <Text>{additionalText}</Text>
                <ButtonStyled btnTop={btnTop} onClick={onClick}>{btnText}</ButtonStyled>
            </ModalWindow>
        </ModalWrapper>
    )
}