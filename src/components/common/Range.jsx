import React, { useState } from 'react';
import ReactSlider from "react-slider";
import styled from 'styled-components';

const SliderWrapper = styled.div`
    height: 60px;
    background: white;
    border-radius: 4px;
    width: 100%;
    margin: 26px 0;
    padding: 0 22px;
    
    @media screen and (min-width: 640px){
        margin: 18px 0;
    }
    
    @media screen and (min-width: 320px){
        margin: 10px 0;
    }
`;

const Slider = styled(ReactSlider)`
    width: 100%;
`;

const StyledThumb = styled.div`
    height: 24px;
    line-height: 24px;
    width: 24px;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    border: 3px solid  ${props => getTrackColor(props)};
    cursor: grab;
    top: 19px;
    
    &:focus-visible {
        outline:  none;
    }
`;

const MarkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: ${({ isChanged }) => isChanged ? '40px' : '34px'};
    font-size: ${({ isChanged }) => isChanged ? '10px' : '13px'};
    color: #ccc;
    transition: 0.2s font-size ease-in-out, 0.2s padding-top ease-in-out;
`;


const getTrackColor = (props) => {
    const { index, sliderColor } = props;

    if (index === 1) return '#ccc'

    return sliderColor ? sliderColor : '#0098C7'
}
const StyledTrack = styled.div`
    top: 30px;
    border-radius: 999px;
    height: 4px;
    background: ${props => getTrackColor(props)};
`;


const renderTrack = (props, state) => {
    return <StyledTrack index={state.index} {...props} />;
};

const renderThumb = (props) => {
    return <StyledThumb {...props} />;
}

export const RangeSlider = (props) => {
    const { min, max, onChange, sliderColor, disabled, defaultValue } = props;
    const [isChanged, setIsChanged] = useState(false);

    return (
        <SliderWrapper>
            <Slider
                min={min}
                max={max}
                onAfterChange={onChange}
                disabled={disabled}
                defaultValue={defaultValue}
                renderTrack={(props, state) => renderTrack({...props, sliderColor}, state)}
                renderThumb={(props) => renderThumb({...props, sliderColor})}
                onBeforeChange={()=>setIsChanged(true)}
            />
            <MarkWrapper isChanged={isChanged}>
                <p>{min}</p>
                <p>{max}</p>
            </MarkWrapper>
        </SliderWrapper>
    )
}