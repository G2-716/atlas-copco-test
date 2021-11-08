import { useDrag, DragPreviewImage } from 'react-dnd';
import styled from 'styled-components';
import { penHorizontal, penVertical } from '../../../constants/images';

const StyledPen = styled.img`
  ${({ direction }) => direction === 'vertical' ? 'height: 140px' : 'width: 140px'};
  padding: 8px;
  box-sizing: content-box;
  cursor: pointer;
`;

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

  if (isDragging) {
    return <DragPreviewImage src={pen} connect={dragPreview} />;
  }

  return (
    <StyledPen className={className} direction={direction} ref={drag} src={pen} alt="" />
  );
}