import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { QuestionNumber } from '../common/QuestionNumber';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { helloPeople } from '../../constants/images';
import { Modal } from '../common/Modal';
import { useProgress } from '../../hooks/useProgress';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 46%;
`;

export function Screen10() {
  const { next } = useProgress();

  return (
    <ScreenWrapper>
        <QuestionNumber number='1' />
        <Modal
          text={'Сейчас будет вопрос\nна время, вы готовы?'}
          btnText={'Готов!'}
          onClick={next}
        />
        <ImageWrapperStyled>
            <ImageStyled src={helloPeople} />
        </ImageWrapperStyled>

    </ScreenWrapper>
  );
}