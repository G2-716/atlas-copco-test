import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    color: white;
    height: 100%;
    padding: 27px 29px 10px 29px;
    white-space: pre-wrap;
    @media screen and (max-height: 520px) and (orientation: landscape){
      padding-top: 0;
    } 
`;

export function ScreenWrapper(props) {
    const { children, className, onClick } = props;

    return (
        <Wrapper className={className} onClick={onClick}>
            {children}
        </Wrapper>
    );
}
