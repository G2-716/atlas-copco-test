import React, { useLayoutEffect, useRef, useState } from 'react';
import mergeRefs from 'react-merge-refs';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { usePreview } from 'react-dnd-multi-backend'
import { penHorizontal, penVertical } from '../../../constants/images';

const StyledPen = styled.img`
  -webkit-touch-callout: none;
  ${({ direction }) => `${getPrimarySize(direction)}: 100%`};
  object-fit: contain;
  padding: 8px;
  box-sizing: content-box;
  cursor: pointer;
  z-index: 10;
`;

const StyledPenPreview = styled(StyledPen)`
  ${({ direction, size }) => `${getPrimarySize(direction)}: ${size}px`};
  box-sizing: border-box;
`;

function getPrimarySize(direction) {
  return direction === 'vertical' ? 'height' : 'width';
}

const PenPreview = (props) => {
  const { size } = props;
  const { display, style } = usePreview();

  if (!display || !size) {
    return null;
  }

  return <StyledPenPreview style={style} {...props} />;
};

export function Pen(props) {
  const { id, className, direction } = props;
  const dragRef = useRef();
  const [dragSize, setDragSize] = useState(0);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PEN',
    item: { id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id]);

  const pen = direction === 'vertical' ? penVertical : penHorizontal;

  useLayoutEffect(() => {
    if (!dragRef.current) return;

    const rect = dragRef.current.getBoundingClientRect();
    setDragSize(rect[getPrimarySize(direction)]);
  }, [])

  if (isDragging) {
    return <PenPreview direction={direction} size={dragSize} src={pen} alt="" />;
  }

  return (
    <StyledPen
      className={className}
      direction={direction}
      ref={mergeRefs([drag, dragRef])}
      src={pen}
      alt=""
    />
  );
}