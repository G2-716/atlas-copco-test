import React from 'react';
import styled from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider, TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import { PenPlace } from './PenPlace';

const Wrapper = styled.div`
  position: relative;
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizontalRow = styled.div`
  display: flex;
`;

const VerticalRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
`;

const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      preview: true,
      transition: TouchTransition,
    },
  ],
};

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
        <RowsContainer>
          {places.map(({ direction, ids }, index) => {
            const Row = direction === 'vertical' ? VerticalRow : HorizontalRow;

            return (
              <Row key={index}>
                {ids.map((placeId) => {
                  return (
                    <PenPlace
                      key={placeId}
                      id={placeId}
                      direction={direction}
                      pen={positions[placeId]}
                      onDropPen={(penId) => handlePenDrop(placeId, penId)}
                    />
                  );
                })}
              </Row>
            );
          })}
        </RowsContainer>
      </Wrapper>
    </DndProvider>
  );
}