import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isTouchDevice } from '../../../utils/isTouchDevice';
import { PenPlace } from './PenPlace';

const Wrapper = styled.div`
  position: relative;
`;

const Backend = isTouchDevice() ? TouchBackend : HTML5Backend;

export function Board(props) {
  const { places, positions, onPositionsChange } = props;

  function handlePenDrop(placeId, penId) {
    const prev = positions;
    const prevPlaceId = Object.keys(prev).find(placeId => prev[placeId] === penId);
    onPositionsChange?.({ ...prev, [prevPlaceId]: null, [placeId]: penId });
  }

  return (
    <DndProvider backend={Backend}>
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