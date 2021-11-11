import styled from 'styled-components';
import { Logo } from '../svg/Logo';

export const LogoStyled = styled(Logo)`
    height: 73px;
    width: 111px;
    margin-bottom: 3.9%;
    
    @media screen and (max-width: 320px){ 
      height: 56px;
      width: 85px;
      margin-bottom: 3.2%;
    }
    
    @media screen and (max-height: 520px) and (orientation: landscape){
      display: none;
    }
`