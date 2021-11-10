import React from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { QuestionNumber } from '../common/QuestionNumber';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { helloPeople } from '../../constants/images';
import { Modal } from '../common/Modal';

export function Screen10() {
  return (
    <ScreenWrapper>
        <QuestionNumber number='1' />
        <Modal text={'Сейчас будет вопрос\nна время, вы готовы?'} btnText={'Готов!'}/>
        <ImageWrapper>
            <ImageStyled src={helloPeople} />
        </ImageWrapper>

    </ScreenWrapper>
  );
}