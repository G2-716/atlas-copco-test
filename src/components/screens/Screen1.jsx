import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import {Title} from "../common/Title";
import {Text, TextBold} from "../common/Text";
import {FemaleIcon} from "../svg/Female";
import {MaleIcon} from "../svg/Male";
import {introBgElem, introPeople} from "../../constants/images";
import {ImageStyled, ImageWrapper} from "../common/Image";
import { LogoStyled } from '../common/LogoStyled';
import { Button } from '../common/Button';

const Wrapper = styled(ScreenWrapper)`
    padding-top: 4.61%;
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        padding-top: 20px;
    }
`;

const BgElement = styled.img`
    position: absolute;
    right: 0;
    top: 16%;
    width: 68px;
    height: 88px;
    
    @media screen and (max-width: 320px){ 
      width: 58px;
      height: 75px;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      display: none;
    }
`;

const NameInput = styled.input`
    padding: 16px 0 16px 19px;
    font-size: 18px;
    border: 2px solid #FFFFFF;
    outline: none;
    background: none;
    color: white;
    font-weight: 600;
    
    &::placeholder{
      color: white;
      font-weight: 600;
    }
    
    @media screen and (max-width: 320px){ 
      padding: 12px 0 12px 19px;
      font-size: 16px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
      padding: 12px 0 12px 19px;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      padding: 10px 0 10px 13px;
      font-size: 12px;
    }
`;

const RadioWrapper = styled.div`
    margin-top: 3.1%;
    @media screen and (max-width: 320px){ 
       margin-top: 2.5%;
    }
`;

const RadioBtn = styled.input`
    display: none;
`;

const Male = styled(MaleIcon)`
    width: 60px;
    height: 60px;
    margin-left: 10px;
    
    @media screen and (max-height: 600px){
      width: 50px;
      height: 50px;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      width: 40px;
      height: 40px;
    }
`;

const Female = styled(FemaleIcon)`
    width: 60px;
    height: 60px;
    
    @media screen and (max-height: 600px){
      width: 50px;
      height: 50px;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      width: 40px;
      height: 40px;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    @media screen and (max-height: 700px){
        height: 34%;
    }
    
    @media screen and (max-height: 600px){
        height: 30%;
    }
    
    @media screen and (min-width: 640px){
        height: 35%;
    }
    
    @media screen and (min-width: 640px) and (max-height: 655px){
        height: 29%;
        justify-content: flex-end;
    }
`;

const Image = styled(ImageStyled)`
    width: auto;
`;

const TextStyled = styled(Text)`
    max-width: 290px;
    font-size: 16px;
    @media screen and (max-height: 520px) and (orientation: landscape){
      font-size: 12px;
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: 10px;
`;

export function Screen1() {
  const { next, updateUser, user } = useProgress();

  function handleNameChange(event) {
    updateUser('name', event.target.value);
  }

  function handleSexChange(event) {
    updateUser('sex', event.target.value);
  }

  return (
    <Wrapper>
        <BgElement src={introBgElem} alt={''}/>
        <LogoStyled />
        <Title>Привет!</Title>
        <TextStyled>
            Atlas Copco приготовила для вас тренажер нестандартного собеседования. Всегда приятно попробовать себя в чем-то новом.
        </TextStyled>
        <TextBold>
            Познакомимся?
        </TextBold>
        <NameInput type="text" onChange={handleNameChange} placeholder={'Твоё имя'}/>
        <RadioWrapper>
          <RadioBtn id='femaleRadio' type="radio" name='sex' value='female' onChange={handleSexChange} />
          <label htmlFor={'femaleRadio'}> <Female active={user.sex === 'female'}/> </label>
          <RadioBtn id='maleRadio' type="radio" name='sex' value='male' onChange={handleSexChange} />
          <label htmlFor={'maleRadio'}>  <Male  active={user.sex === 'male'}/> </label>
        </RadioWrapper>
          <ButtonStyled onClick={next}>Играть</ButtonStyled>
        <ImageWrapperStyled>
          <Image src={introPeople} alt={''} />
        </ImageWrapperStyled>
    </Wrapper>
  );
}