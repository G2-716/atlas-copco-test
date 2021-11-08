import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from './ScreenWrapper';
import { ImageStyled, ImageWrapper } from './Image';
import { useProgress } from '../../hooks/useProgress';
import { Text, TextBold } from './Text';
import { coffeeMan } from '../../constants/images';
import { Button } from './Button';

const Wrapper = styled(ScreenWrapper)`
      padding-left: 52px;
      padding-top: 8.1%;
      
      @media screen and (max-height: 600px){
          padding-top: 7.3%;
      }
      
      @media screen and (max-width: 300px){
          padding-left: 20px;
      }
      
`;

const TextWrapper = styled.div`
    max-width: 265px;
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    height: 64%;
    max-height: 425px;
    margin-left: -52px;
    display: flex;
    justify-content: flex-end;
    
    @media screen and (max-height: 600px){
      height: 50%;
    }
    
    @media screen and (max-width: 300px){
              margin-left: -20px;
    }
`;

const Image = styled(ImageStyled)`
      width: auto;
`;

export function InterviewStartScreen(props) {
    const { next } = useProgress();
    const { title, text } = props
    return (
        <Wrapper>
            <TextWrapper>
                <TextBold>
                    {title}
                </TextBold>
                <Text>
                    {text}
                </Text>
                <TextBold>
                    Давайте начинать?
                </TextBold>
            </TextWrapper>
            <ImageWrapperStyled>
                <Image src={coffeeMan} />
            </ImageWrapperStyled>
            <Button onClick={next}>Конечно!</Button>
        </Wrapper>
    );
}