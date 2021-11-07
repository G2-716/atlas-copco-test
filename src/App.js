import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { preloadImage } from "./utils/preloadImage";
import { ProgressProvider } from './context/ProgressContext';
import { iphone } from "./constants/images";
import { useProgressInit } from './hooks/useProgressInit';

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
  width: 100%;

  @media screen and (min-width: 640px) {
    overflow: hidden;
    background: #0098C7;
    width: 325px;
    max-height: 700px;
    height: 700px;
    max-width: 325px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    padding-top: 58px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export function App() {
  const [height, setHeight] = useState('100vh');
  const progress = useProgressInit();
  const { screen } = progress;

  const Component = screen?.component || (() => null);

  useEffect(() => {
    const preloadImages = screen?.preloadImages;
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [screen]);

  useEffect(() => {
    function handleResize() {
      const viewportHeight = document.documentElement.clientHeight;
      setHeight(viewportHeight + 'px');
    }
    handleResize();
  //TODO: not resize on keyboard appear

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ProgressProvider value={progress}>
        <Image src={iphone} />
        <ComponentWrapper styles={{ height }}>
          <Component />
        </ComponentWrapper>
      </ProgressProvider>
    </div>
  );
}
