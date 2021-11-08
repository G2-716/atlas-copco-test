import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import {Logo} from "../svg/Logo";
import {Title} from "../common/Title";
import {Text, TextBold} from "../common/Text";
import {FemaleIcon} from "../svg/Female";
import {MaleIcon} from "../svg/Male";
import {introBgElem, introPeople} from "../../constants/images";
import {ImageStyled, ImageWrapper} from "../common/Image";

const Wrapper = styled(ScreenWrapper)`
  padding-top: 4.61%;
`
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
`
const LogoStyled = styled(Logo)`
  height: 88px;
  width: 135px;
  margin-bottom: 3.9%;
  
  @media screen and (max-width: 320px){ 
      height: 70px;
      width: 107px;
      margin-bottom: 3.2%;
  }
`

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
`
const RadioWrapper = styled.div`
    margin-top: 3.1%;
    @media screen and (max-width: 320px){ 
       margin-top: 2.5%;
    }
`
const RadioBtn = styled.input`
    display: none;
`
const Male = styled(MaleIcon)`
    width: 60px;
    height: 60px;
    margin-left: 10px;
`
const Female = styled(FemaleIcon)`
    width: 60px;
    height: 60px;
`


const TextStyled = styled(Text)`
    max-width: 290px;
`
export function Screen1() {
  const { next, updateUser, user } = useProgress();

  function handleNameChange(event) {
    updateUser('name', event.target.value);
    if (user.sex) next();
  }

  function handleSexChange(event) {
    updateUser('sex', event.target.value);
    if (user.name) next();
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
    <ImageWrapper>
      <ImageStyled src={introPeople} alt={''} />
    </ImageWrapper>
      {/*<button onClick={next}>Дальше</button>*/}
    </Wrapper>
  );
}