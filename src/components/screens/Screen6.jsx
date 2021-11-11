import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import { Text, TextBold } from '../common/Text';
import { Button } from '../common/Button';
import { Circle } from '../common/Circle';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { coffeeWoman } from '../../constants/images';

const Wrapper = styled(ScreenWrapper)`
    padding-top: calc(61px + 4.6%);
`;

const CircleStyled = styled(Circle)`
    top: -46px;
    left: -51px;
    width: 117px;
    background: white;
    height: 117px;
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
`;

export function Screen6() {
  const { next, user } = useProgress();

  return (
    <Wrapper>
        <CircleStyled/>
        <TextBold>
          {`Здравствуйте,\nСергей!`}
        </TextBold>
        <Text>
            {`А вы, должно быть,\n${user.name}?`}
        </Text>
        <Text>
            Проходите за Сергеем, это ваш интервьюер.
        </Text>
        <ImageWrapperStyled>
            <Image src={coffeeWoman} />
        </ImageWrapperStyled>
        <Button onClick={next}>Дальше</Button>
    </Wrapper>
  );
}