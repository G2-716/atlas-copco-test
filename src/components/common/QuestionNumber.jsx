import React from 'react';
import styled from 'styled-components';
import { TextBold } from './Text';
import { questions } from '../../questions.config';

const QuestionNumberWrapper = styled.div`
  height: 45px;
  width: 80px;
  color: #0098C7;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-height: 600px){
        height: 30px;
  }
`;

const NumberText = styled(TextBold)`
  margin: 0;
`;

export const QuestionNumber = (props) => {
    const { number } = props;
    return (
        <QuestionNumberWrapper>
            <NumberText>{number} / {questions.length}</NumberText>
        </QuestionNumberWrapper>
    );
}