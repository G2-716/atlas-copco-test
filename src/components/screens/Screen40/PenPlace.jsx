import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { isNil } from 'lodash';
import { Pen } from './Pen';

const StyledWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ direction }) => direction === 'vertical' ? '10px' : '140px'};
  height: ${({ direction }) => direction === 'vertical' ? '140px' : '10px'};
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
  background-color: ${({ hovered }) => `rgba(167, 167, 167, ${hovered ? '0.75' : '0.45'})`};
  border-radius: 18px;
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
  const { pen, className, top, left, direction, onDropPen } = props;

  const [{ hovered }, drop] = useDrop(() => ({
    accept: 'PEN',
    collect: monitor => ({
      hovered: monitor.canDrop() && monitor.isOver(),
    }),
    drop: (item) => {
      onDropPen?.(item?.id);
    },
    canDrop: () => !hasPen(pen),
  }), [pen, onDropPen]);

  return (
    <StyledWrapper className={className} top={top} left={left} direction={direction}>
      <StyledPenPlaceWrapper ref={drop}>
        <StyledPenPlace hovered={hovered} />
      </StyledPenPlaceWrapper>
      {hasPen(pen) && <StyledPen id={pen} direction={direction} />}
    </StyledWrapper>
  );
}