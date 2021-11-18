import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { isNil } from 'lodash';
import { Pen } from './Pen';

const StyledWrapper = styled.div`
  position: relative;
  width: ${({ direction }) => direction === 'vertical' ? '1px' : '100%'};
  height: ${({ direction }) => direction === 'vertical' ? '100%' : '1px'};
`;

const StyledPenPlaceWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: content-box;
`;

const StyledPenPlace = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ hovered }) => `rgba(255, 255, 255, ${hovered ? '0.8' : '0.3'})`};
`;

const StyledPen = styled(Pen)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function hasPen(pen) {
  return !isNil(pen);
}

export function PenPlace(props) {
  const { pen, className, direction, onPenDrop, onPenDragStart } = props;

  const [{ hovered }, drop] = useDrop(() => ({
    accept: 'PEN',
    collect: monitor => ({
      hovered: monitor.canDrop() && monitor.isOver(),
    }),
    drop: (item) => {
      onPenDrop?.(item?.id);
    },
    canDrop: () => !hasPen(pen),
  }), [pen, onPenDrop]);

  return (
    <StyledWrapper className={className} direction={direction}>
      <StyledPenPlaceWrapper ref={drop}>
        <StyledPenPlace hovered={hovered} />
      </StyledPenPlaceWrapper>
      {hasPen(pen) && <StyledPen id={pen} direction={direction} onDragStart={onPenDragStart} />}
    </StyledWrapper>
  );
}