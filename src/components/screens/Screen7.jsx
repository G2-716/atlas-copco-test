import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { Text, TextBold } from '../common/Text';
import { coffeeWoman } from '../../constants/images';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { Circle } from '../common/Circle';
import { Button } from '../common/Button';

const Wrapper = styled(ScreenWrapper)`
    padding-top: calc(100px + 3.6%)
`;

const CircleStyled = styled(Circle)`
    top: -144px;
    left: -148px;
    width: 244px;
    background: white;
    height: 244px;
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    height: 50.3%;
    max-height: 380px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-height: 600px){
            height: 47.3%;
    }
    @media screen and (min-width: 640px) and (max-height: 655px){
        height: 43.3%;
    }
`;

const Image = styled(ImageStyled)`
    width: auto;
`

export function Screen7() {
  const { next, user } = useProgress();

  return (
    <Wrapper>
        <CircleStyled />
        <TextBold>
            {`Здравствуйте,\nвы, должно быть,\n${user.name}?`}
        </TextBold>
        <Text>
            {'Проходите в кабинет,\nвас ждут.'}
        </Text>
        <ImageWrapperStyled>
            <Image src={coffeeWoman} />
        </ImageWrapperStyled>
      <Button onClick={next}>Дальше</Button>
    </Wrapper>
  );
}