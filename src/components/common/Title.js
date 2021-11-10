import styled from 'styled-components';

export const Title = styled.p`
    font-size: 24px;
    letter-spacing: 0.01em;
    font-weight: 900;
    margin-bottom: 10px;
    
    @media screen and (max-width: 320px){
      font-size: 18px;
    }
    @media screen and (max-height: 520px) and (orientation: landscape){
      font-size: 13px;
    }
`
