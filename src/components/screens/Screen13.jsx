import React, { useState } from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../utils/getQuestionById';
import { RangeQuestionWrapper } from '../common/RangeQuestionWrapper';
import { ImageStyled, ImageWrapper } from '../common/Image';
import { correctAge, incorrectAge, peopleRocket } from '../../constants/images';
import { Text, TextBold } from '../common/Text';
import { useProgress } from '../../hooks/useProgress';
import { Button } from '../common/Button';

const ImageWrapperStyled = styled(ImageWrapper)`
    
    @media screen and (max-height: 600px) {
        height: 35%;
    }
    @media screen and (max-width: 300px){
        height: 30%;
    }
    
    @media screen and (min-width: 640px){
        height: 38%;
    }
`;

const Image = styled(ImageStyled)`
    width: auto;
`;

const AfterTextBold = styled(TextBold)`
    margin: 0;
`;

const AfterText = styled(Text)`
    margin: 0;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 5px;
    margin-right: -15px;
`;

const ButtonStyled = styled(Button)`
    width: 25%;
    min-width: 75px;
    font-size: 16px;
    height: 45px;
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      height: 30px;
      font-size: 12px;
    }
`;

const ResetButtonStyled = styled(ButtonStyled)`
    width: 248px;
    margin-left: 10px;
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      height: 30px;
      font-size: 12px;
    }
`;

const AfterIncorrectImageWrapperStyled = styled(ImageWrapper)`
    max-height: 30%;
    height: auto;
    
    @media screen and (min-width: 400px){
        justify-content: flex-start;
        max-height: 35%;
        height: 35%;
        & ${ImageStyled}{
            width: auto;
        }
    }
    
    @media screen and (min-width: 640px){
        max-height: 26%;
    }
    
    @media screen and (max-height: 700px){
        max-height: 25%;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        max-height: 21%;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      display: none;
    } 
`;

const AfterCorrectImageWrapperStyled = styled(ImageWrapper)`
    max-height: 40%;
    height: auto;
    
    @media screen and (min-width: 400px) {
        justify-content: flex-start;
        height: 42%;
        & ${ImageStyled}{
            width: auto;
        }
    }
    
    @media screen and (min-width: 640px){
        max-height: 33%;
    }
    
    @media screen and (max-height: 700px){
        max-height: 35%;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        max-height: 29%;
        justify-content: flex-end;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      display: none;
    } 
`;


export function Screen13() {
    const [answer, setAnswer] = useState(null);

    const question = getQuestionById('3');

    const { user, next, resetInterview } = useProgress();

    const getSliderColor = (answer) => {
        if (answer.isCorrect) return '#42CC58'
        return '#FF0000'
    }

    const onGiveAnswer = (givenAnswer) => {
        setAnswer(givenAnswer)
    }

    const getAfterAnswerContent = () => {
        let title, image, resetBtn;
        const text = 'Теперь вопрос на креативность, вы готовы?';
        if (answer.isCorrect) {
            title = `Вы правы, ${user.name}!`;
            resetBtn = false;
            image = <AfterCorrectImageWrapperStyled>
                <ImageStyled src={correctAge} alt={''} />
            </AfterCorrectImageWrapperStyled>
        }
        else {
            title = 'К сожалению, мимо!\nAtlas Copco в мире уже 148 лет!';
            image = <AfterIncorrectImageWrapperStyled>
                <ImageStyled src={incorrectAge} alt={''} />
            </AfterIncorrectImageWrapperStyled>;
            resetBtn = true;

        }

        return (
            <>
                <AfterTextBold>
                    {title}
                </AfterTextBold>
                <AfterText>
                    {text}
                </AfterText>
                <ButtonsWrapper>
                    <ButtonStyled onClick={next}>Готов!</ButtonStyled>
                    {resetBtn && <ResetButtonStyled
                        onClick={resetInterview}
                    >
                        Я уже ни в чем не уверен
                    </ResetButtonStyled>}
                </ButtonsWrapper>
                {image}
            </>
        )
    }

    return (
        <RangeQuestionWrapper
            question={question}
            getSliderColor={getSliderColor}
            onGiveAnswerFunc={onGiveAnswer}
        >
            {answer ? getAfterAnswerContent()
                    : (
                        <ImageWrapperStyled>
                            <Image src={peopleRocket} alt={''}/>
                        </ImageWrapperStyled>
                    )
            }
        </RangeQuestionWrapper>
    );
}