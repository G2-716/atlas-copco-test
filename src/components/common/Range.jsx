import React from 'react';
import ReactSlider from "react-slider";
import styled from 'styled-components';

const Slider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`
const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid blue;
    cursor: grab;
`;

const Thumb = (props) => <StyledThumb {...props} />;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    border-radius: 999px;
    background: #61dafb;
`;

const Track = (props) => <StyledTrack {...props} />;

export const RangeSlider = (props) => {
    const { min, max, onChange } = props;

    return <Slider
        min={min}
        max={max}
        onAfterChange={onChange}
        defaultValue={0}
        renderTrack={Track}
        renderThumb={Thumb}
    />
}