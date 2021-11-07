import React from 'react';
import styled from 'styled-components';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProgress } from '../../hooks/useProgress';
import {Logo} from "../svg/Logo";
import {Title} from "../common/Title";
import {Text, TextBold} from "../common/Text";
import {FemaleIcon} from "../svg/Female";

const Wrapper = styled(ScreenWrapper)`
  padding-top: 34px;
  @media screen and (max-width: 320px){ 
     padding-top: 25px; 
  }
  @media screen and (min-width: 640px){
      padding-top:0;
  }
`

const LogoStyled = styled(Logo)`
  height: 88px;
  width: 135px;
  margin-bottom: 35px;
  
  @media screen and (max-width: 320px){ 
      height: 70px;
      width: 107px;
      margin-bottom: 25px;
  }
`

const InfoWrapper = styled.div`
    margin-top: 25px; 
    @media screen and (max-width: 320px){ 
         margin-top: 15px; 
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

export function Screen1() {
  const { next, updateUser } = useProgress();

  function handleNameChange(event) {
    updateUser('name', event.target.value);
  }

  function handleSexChange(event) {
    updateUser('sex', event.target.value);
  }

  return (
    <Wrapper>
        <LogoStyled />
      <Title>Привет!</Title>
      <Text>
        Atlas Copco приготовила для вас тренажер нестандартного собеседования. Всегда приятно попробовать себя в чем-то новом.
      </Text>
      <TextBold>Познакомимся?</TextBold>
        <InfoWrapper>

        </InfoWrapper>
      <NameInput type="text" onChange={handleNameChange} placeholder={'Твоё имя'}/>
      <FemaleIcon active={true} />
      <FemaleIcon active={false} />
      <div>
          <input type="radio" name='sex' value='male' onChange={handleSexChange} />
          Male
          <input type="radio" name='sex' value='female' onChange={handleSexChange} />
          Female
      </div>
      <button onClick={next}>Дальше</button>
    </Wrapper>
  );
}