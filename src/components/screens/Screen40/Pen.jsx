import React, { useEffect } from 'react';
import { useDrag, useDragLayer } from 'react-dnd';
import styled from 'styled-components';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { penHorizontal, penVertical } from '../../../constants/images';

const StyledPen = styled.img`
  ${({ direction }) => direction === 'vertical' ? 'height: 100%' : 'width: 100%'};
  object-fit: contain;
  padding: 8px;
  box-sizing: content-box;
  cursor: pointer;
`;

function getPreviewStyles(differenceFromInitialOffset) {
  if (!differenceFromInitialOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = differenceFromInitialOffset;
  const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

  return {
    transform,
    pointerEvents: 'none',
    willChange: 'transform',
    WebkitTransform: transform,
    zIndex: 10,
  };
}

const PenPreview = ({ className, pen, direction }) => {
  const { differenceFromInitialOffset, isDragging } = useDragLayer((monitor) => ({
    differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
      <StyledPen
        className={className}
        direction={direction}
        style={getPreviewStyles(differenceFromInitialOffset)}
        src={pen}
        alt=""
      />
  );
};

export function Pen(props) {
  const { id, className, direction } = props;

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'PEN',
    item: { id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id]);

  const pen = direction === 'vertical' ? penVertical : penHorizontal;

  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []);

  if (isDragging) {
    return (
      <PenPreview className={className} direction={direction} pen={pen} preview={dragPreview} />
    );
  }

  return (
    <StyledPen className={className} direction={direction} ref={drag} src={pen} alt="" />
  );
}