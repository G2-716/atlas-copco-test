import styled from 'styled-components';

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
    @media screen and (min-width: 320px){
        font-size: 16px;
    }
`
export const TextBold = styled(Text)`
  font-weight: 900;
`
