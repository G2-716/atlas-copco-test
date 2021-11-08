import React from 'react';
import styled from 'styled-components';
import { normalizeSecs } from '../../utils/normalizeSecs';

const TimerWrapper = styled.div`
    background: #ff0000;
    border: 2px solid white;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    width: 100px;
`;

export const Timer = (props) => {
    const { timeLeft, className } = props;
    return (
        <TimerWrapper className={className}>
            {normalizeSecs(timeLeft)}
        </TimerWrapper>
    )
}