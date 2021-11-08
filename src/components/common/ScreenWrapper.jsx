import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  height: 100%;
  padding: 27px 25px 10px 29px;
  white-space: pre-wrap;
  overflow: hidden;
  
  @media screen and (min-width: 640px){
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
