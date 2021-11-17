import React from 'react';
import styled from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider, TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import { PenPlace } from './PenPlace';

const Wrapper = styled.div`
  width: 100%;
`;

const WrapperInner = styled.div`
  position: relative;
  padding-top: 100%;
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HorizontalRow = styled.div`
  display: flex;
`;

const VerticalRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
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
  const { className, places, positions, onPositionsChange } = props;

  function handlePenDrop(placeId, penId) {
    const prev = positions;
    const prevPlaceId = Object.keys(prev).find(placeId => prev[placeId] === penId);
    onPositionsChange?.({ ...prev, [prevPlaceId]: null, [placeId]: penId });
  }

  return (
    <DndProvider options={HTML5toTouch}>
      <Wrapper className={className}>
        <WrapperInner>
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
        </WrapperInner>
      </Wrapper>
    </DndProvider>
  );
}