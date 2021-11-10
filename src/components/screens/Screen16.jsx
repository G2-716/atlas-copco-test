import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../common/DefaultQuestionWrapper';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { peopleFlying } from '../../constants/images';
import styled from 'styled-components';

const ImageWrapperStyled = styled(ImageWrapper)`
    height: auto;
    max-height: 46%;
`;

export function Screen16() {
    const question = getQuestionById('6');
    return (
        <DefaultQuestionWrapper question={question} isShort={false}>
            <ImageWrapperStyled>
                <ImageStyled src={peopleFlying} />
            </ImageWrapperStyled>
        </DefaultQuestionWrapper>
    );
}