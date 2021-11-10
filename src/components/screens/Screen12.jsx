import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { companyPeople } from '../../constants/images';
import styled from 'styled-components';

const ImageWrapperStyled = styled(ImageWrapper)`
  height: auto;
  max-height: none;
`;

export function Screen12() {
    const question = getQuestionById('2');
    return (
        <DefaultQuestionWrapper question={question} isShort={false}>
            <ImageWrapperStyled>
                <ImageStyled src={companyPeople} alt={''}/>
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}