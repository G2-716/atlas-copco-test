import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { PenPlace } from './PenPlace';

const Wrapper = styled.div`
  position: relative;
`;

export function Board(props) {
  const { places, positions, onPositionsChange } = props;

  function handlePenDrop(placeId, penId) {
    const prev = positions;
    const prevPlaceId = Object.keys(prev).find(placeId => prev[placeId] === penId);
    onPositionsChange?.({ ...prev, [prevPlaceId]: null, [placeId]: penId }, placeId, penId);
  }

  return (
    <DndProvider options={HTML5toTouch}>
      <Wrapper>
        {Object.keys(places).map((placeId) => {
          const { top, left, direction } = places[placeId];
          return (
            <PenPlace
              key={placeId}
              id={placeId}
              top={top}
              left={left}
              direction={direction}
              pen={positions[placeId]}
              onDropPen={(penId) => handlePenDrop(placeId, penId)}
            />
          );
        })}
      </Wrapper>
    </DndProvider>
  );
}