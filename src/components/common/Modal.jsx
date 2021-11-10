import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
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
    
    @media screen and (max-width: 300px){
      font-size: 14px;
    }
`;

export const Modal = (props) => {
    const { next } = useProgress();
    const {
        text = 'К сожалению,\nвы не успели дать ответ.\n\nПродолжим?',
        additionalText = '',
        btnText = 'Продолжить'
    } = props;

    return (
        <ModalWrapper>
            <ModalWindow>
                <TextStyled>{text}</TextStyled>
                <Text>{additionalText}</Text>
                <ButtonStyled onClick={next}>{btnText}</ButtonStyled>
            </ModalWindow>
        </ModalWrapper>
    )
}