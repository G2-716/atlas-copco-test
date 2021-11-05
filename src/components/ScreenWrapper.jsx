import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {screens} from "../screens.config";
import {preloadImage} from "../utils/preloadImage";
import { ProgressProvider } from '../context/ProgressContext';
import {iphone} from "../constants/images";

const Image = styled.img`
  display: none;
  @media screen and (min-width: 640px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    height: 770px;
    max-height: 100%;
    width: 400px;
    max-width: 51.948%;
    display: block;
    z-index: 100;
    pointer-events: none;
  }
`;

const ComponentWrapper = styled.div`
  ${({ styles }) => styles};
  width: 100vw;
  @media screen and (min-width: 640px) {
    overflow: hidden;
    width: 325px;
    max-height: 700px;
    height: 700px;
    max-width: 325px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;


export function ScreenWrapper() {
    /////////////////// for development ////////////////////////////////////

    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');

    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState( +screenParam || 0);
    const [screenDelta, setScreenDelta] = useState(0);
    const [answers, setAnswers] = useState({});
    const [currentAttempt, setCurrentAttempt] = useState(0);
    const [height, setHeight] = useState('100vh');

    // const setPrev = () => {
    //     const canSet = currentScreenIndex > 0;
    //     if (canSet) {
    //         setCurrentScreenIndex(currentScreenIndex - 1);
    //         setScreenDelta(screenDelta - 1);
    //     }
    // };

    const setNext = () => {
        const canSet = currentScreenIndex < screens.length - 1;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex + 1);
            setScreenDelta(screenDelta === 0 ? screenDelta : screenDelta + 1);
        }
    };

    const retryPlanet = (planet) => {
        setCurrentScreenIndex(planet.startScreen);
        setCurrentAttempt(0);
        setAnswers(answers=> ({...answers, [planet.id]:{}}));
    }

    const setAnswer = (planetId, questionId, answerId) => {
        setAnswers(answers => ({...answers, [planetId]: {...answers[planetId], [questionId]: answerId}}))
    };

    const { component, preloadImages, ...screen } = screens[currentScreenIndex] || {};
    const Component = component || (() => null);

    useEffect(() => {
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [preloadImages]);

    useEffect(()=>{
        let viewportHeight = 0;
            viewportHeight = document.documentElement.clientHeight;
        setHeight(viewportHeight + 'px');
        function handleResize() {
            setHeight(viewportHeight + 'px');
        }
        window.addEventListener('resize', handleResize)
    }, [])

    const progressProviderValue = {
        screen,
        answers,
        height,
        screenDelta,
        currentAttempt,
        setCurrentAttempt,
        retryPlanet,
        setAnswer,
        setNext,
    };


    return (
        <div>
            <ProgressProvider value={progressProviderValue}>
                <Image src={iphone} />
                <ComponentWrapper styles={{height}}>
                    <Component />
                </ComponentWrapper>
            </ProgressProvider>
        </div>
    );
}
