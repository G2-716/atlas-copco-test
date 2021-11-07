import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import {Circle} from "../common/Circle";
import {dots3d, womanTalking} from "../../constants/images";
import {Text, TextBold} from "../common/Text";
import {Title} from "../common/Title";
import {Button} from "../common/Button";
import {ImageStyled, ImageWrapper} from "../common/Image";

const Wrapper = styled(ScreenWrapper)`
    padding-top: calc(71px + 8%);
    
    @media screen and (min-width: 640px){
        padding-top: calc(15px + 8%);
    }
`
const CircleStyled = styled(Circle)`
    background: white;
    top: -46px;
    left: -51px;
    width: 117px;
    height: 117px;
`
const DotsWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 9.2%;
    width: 68px;
    height: 27px;
`
const Dots = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const InfoWrapper = styled.div`
    margin-bottom: 4.2354%;
`

const ImageWrapperStyled = styled(ImageWrapper)`
    height: 43%;
    max-height: 504px;
`
export function Screen2() {
  const { user, next } = useProgress();

  return (
    <Wrapper>
        <CircleStyled />
        <DotsWrapper>
            <Dots src={dots3d} alt={''} />
        </DotsWrapper>
        <InfoWrapper>
            <Title>Очень приятно, {user.name}!</Title>
            <Text>
                {'В этом тренажере вас ждут нестандартные ситуации: вопросы на время и логику, проверка на выдержку и многое другое!\n\nВсего будет 7 ситуаций :)'}
            </Text>
        </InfoWrapper>
        <ImageWrapperStyled>
            <ImageStyled src={womanTalking} alt={''}/>
        </ImageWrapperStyled>
        <Button onClick={next}>Играть</Button>
    </Wrapper>
  );
}