import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

`;

export function ScreenWrapper(props) {
    const { children } = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}
