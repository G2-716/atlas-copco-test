import {keyframes} from "styled-components";

export const pulseBg = keyframes`
    0% {
     box-shadow: 0 0 7px 5px red inset;
    }

    70% {
    transform: scale(1);
    box-shadow: 0 0 20px 15px red inset;
    }
    
    100% {
        box-shadow: 0 0 7px 5px red inset;
    }
`

export const shake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
        transform: translate3d(2px, 0, 0);
    } 

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`