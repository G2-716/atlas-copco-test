import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { Button } from '../common/Button';
import { TextBold } from '../common/Text';
import { QuestionNumber } from '../common/QuestionNumber';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { helloPeople } from '../../constants/images';

const ModalWrapper = styled.div`
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    padding-top: 124px;
`

const Modal = styled.div`
  background: white;
  color: #0098C7;
  padding: 67px 40px 80px 49px;
  max-width: 85%;
  margin: 0 auto;
`

const TextStyled = styled(TextBold)`
    max-width: 195px;
    margin-bottom: 15px;
    @media screen and (max-width: 300px){
      font-size: 14px;
    }
`

const ButtonStyled = styled(Button)`
  background: #0098C7;
  border: none;
`

export function Screen10() {
  const { next } = useProgress();

  return (
    <ScreenWrapper>
        <QuestionNumber number='1' />
        <ModalWrapper>
            <Modal>
                <TextStyled>{'Сейчас будет вопрос\nна время, вы готовы?'}</TextStyled>
                <ButtonStyled onClick={next}>Готов!</ButtonStyled>
            </Modal>
        </ModalWrapper>
        <ImageWrapper>
            <ImageStyled src={helloPeople} />
        </ImageWrapper>

    </ScreenWrapper>
  );
}