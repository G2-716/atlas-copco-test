import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { QuestionNumber } from '../common/QuestionNumber';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { helloPeople } from '../../constants/images';
import { Modal } from '../common/Modal';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 46%;
`;

export function Screen10() {
  return (
    <ScreenWrapper>
        <QuestionNumber number='1' />
        <Modal text={'Сейчас будет вопрос\nна время, вы готовы?'} btnText={'Готов!'}/>
        <ImageWrapperStyled>
            <ImageStyled src={helloPeople} />
        </ImageWrapperStyled>

    </ScreenWrapper>
  );
}